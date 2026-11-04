// Self-contained ISO/IEC 18004 QR Code SVG generator (Versions 1–10, Byte mode, EC Level L).
// Zero external dependencies and zero network requests; renders crisp vector modules for Zalo & camera scan.

const VERSION_SPEC_L = [
  null,
  { totalCw: 26, ecPerBlock: 7, blocks: [19], align: [] },
  { totalCw: 44, ecPerBlock: 10, blocks: [34], align: [6, 18] },
  { totalCw: 70, ecPerBlock: 15, blocks: [55], align: [6, 22] },
  { totalCw: 100, ecPerBlock: 20, blocks: [80], align: [6, 26] },
  { totalCw: 134, ecPerBlock: 26, blocks: [108], align: [6, 30] },
  { totalCw: 172, ecPerBlock: 18, blocks: [68, 68], align: [6, 34] },
  { totalCw: 196, ecPerBlock: 20, blocks: [78, 78], align: [6, 22, 38] },
  { totalCw: 242, ecPerBlock: 24, blocks: [97, 97], align: [6, 24, 42] },
  { totalCw: 292, ecPerBlock: 30, blocks: [116, 116], align: [6, 26, 46] },
  { totalCw: 346, ecPerBlock: 18, blocks: [68, 68, 69, 69], align: [6, 28, 50] },
];

const GF_EXP = new Uint8Array(512);
const GF_LOG = new Uint8Array(256);
(() => {
  let x = 1;
  for (let i = 0; i < 255; i += 1) {
    GF_EXP[i] = x;
    GF_LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i += 1) {
    GF_EXP[i] = GF_EXP[i - 255];
  }
})();

function gfMul(a, b) {
  if (a === 0 || b === 0) return 0;
  return GF_EXP[GF_LOG[a] + GF_LOG[b]];
}

function rsGeneratorPoly(degree) {
  let poly = [1];
  for (let i = 0; i < degree; i += 1) {
    const next = new Array(poly.length + 1).fill(0);
    const root = GF_EXP[i];
    for (let j = 0; j < poly.length; j += 1) {
      next[j] ^= poly[j];
      next[j + 1] ^= gfMul(poly[j], root);
    }
    poly = next;
  }
  return poly;
}

function rsEncode(dataBytes, ecDegree) {
  const gen = rsGeneratorPoly(ecDegree);
  const rem = new Uint8Array(ecDegree);
  for (let i = 0; i < dataBytes.length; i += 1) {
    const factor = dataBytes[i] ^ rem[0];
    rem.copyWithin(0, 1);
    rem[ecDegree - 1] = 0;
    for (let j = 0; j < ecDegree; j += 1) {
      rem[j] ^= gfMul(gen[j + 1], factor);
    }
  }
  return rem;
}

function pushBits(bitBucket, val, len) {
  for (let i = len - 1; i >= 0; i -= 1) {
    bitBucket.push((val >>> i) & 1);
  }
}

function selectVersion(byteLen) {
  for (let v = 1; v <= 10; v += 1) {
    const spec = VERSION_SPEC_L[v];
    const dataCw = spec.blocks.reduce((a, b) => a + b, 0);
    const headerBits = 4 + (v <= 9 ? 8 : 16);
    const maxBytes = Math.floor((dataCw * 8 - headerBits) / 8);
    if (byteLen <= maxBytes) return v;
  }
  throw new Error('QR payload exceeds Version 10 capacity');
}

function buildCodewords(utf8Bytes, version) {
  const spec = VERSION_SPEC_L[version];
  const totalDataCw = spec.blocks.reduce((a, b) => a + b, 0);
  const capacityBits = totalDataCw * 8;
  const bits = [];

  // Mode indicator 0100 (Byte mode)
  pushBits(bits, 0b0100, 4);
  pushBits(bits, utf8Bytes.length, version <= 9 ? 8 : 16);
  for (const b of utf8Bytes) pushBits(bits, b, 8);

  // Terminator up to 4 zero bits
  const term = Math.min(4, capacityBits - bits.length);
  pushBits(bits, 0, term);
  while (bits.length % 8 !== 0) bits.push(0);

  const dataCw = new Uint8Array(totalDataCw);
  let idx = 0;
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let b = 0; b < 8; b += 1) byte = (byte << 1) | bits[i + b];
    dataCw[idx] = byte;
    idx += 1;
  }
  let padToggle = 0;
  while (idx < totalDataCw) {
    dataCw[idx] = padToggle % 2 === 0 ? 0xec : 0x11;
    idx += 1;
    padToggle += 1;
  }

  // Split blocks & compute Reed-Solomon EC
  const dataBlocks = [];
  const ecBlocks = [];
  let offset = 0;
  for (const blockLen of spec.blocks) {
    const slice = dataCw.slice(offset, offset + blockLen);
    offset += blockLen;
    dataBlocks.push(slice);
    ecBlocks.push(rsEncode(slice, spec.ecPerBlock));
  }

  // Interleave data codewords, then EC codewords
  const out = [];
  const maxDataLen = Math.max(...spec.blocks);
  for (let i = 0; i < maxDataLen; i += 1) {
    for (const blk of dataBlocks) {
      if (i < blk.length) out.push(blk[i]);
    }
  }
  for (let i = 0; i < spec.ecPerBlock; i += 1) {
    for (const blk of ecBlocks) {
      out.push(blk[i]);
    }
  }
  return out;
}

function drawFinder(modules, isFunc, size, topR, leftC) {
  for (let dr = -1; dr <= 7; dr += 1) {
    for (let dc = -1; dc <= 7; dc += 1) {
      const r = topR + dr;
      const c = leftC + dc;
      if (r < 0 || r >= size || c < 0 || c >= size) continue;
      const inOuter = dr >= 0 && dr <= 6 && dc >= 0 && dc <= 6;
      const onRing = dr === 0 || dr === 6 || dc === 0 || dc === 6;
      const inCore = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
      modules[r][c] = inOuter && (onRing || inCore);
      isFunc[r][c] = true;
    }
  }
}

function drawAlignment(modules, isFunc, centerR, centerC) {
  for (let dr = -2; dr <= 2; dr += 1) {
    for (let dc = -2; dc <= 2; dc += 1) {
      const r = centerR + dr;
      const c = centerC + dc;
      modules[r][c] = Math.max(Math.abs(dr), Math.abs(dc)) !== 1;
      isFunc[r][c] = true;
    }
  }
}

function drawFormatBits(modules, isFunc, size, maskIndex) {
  // EC Level L = 01
  const data = (0b01 << 3) | maskIndex;
  let rem = data;
  for (let i = 0; i < 10; i += 1) {
    rem = (rem << 1) ^ (((rem >>> 9) & 1) * 0x537);
  }
  const bits = ((data << 10) | rem) ^ 0x5412;

  for (let i = 0; i <= 5; i += 1) {
    modules[8][i] = ((bits >>> i) & 1) !== 0;
    isFunc[8][i] = true;
  }
  modules[8][7] = ((bits >>> 6) & 1) !== 0;
  isFunc[8][7] = true;
  modules[8][8] = ((bits >>> 7) & 1) !== 0;
  isFunc[8][8] = true;
  modules[7][8] = ((bits >>> 8) & 1) !== 0;
  isFunc[7][8] = true;
  for (let i = 9; i < 15; i += 1) {
    modules[14 - i][8] = ((bits >>> i) & 1) !== 0;
    isFunc[14 - i][8] = true;
  }

  for (let i = 0; i < 8; i += 1) {
    modules[8][size - 1 - i] = ((bits >>> i) & 1) !== 0;
    isFunc[8][size - 1 - i] = true;
  }
  for (let i = 8; i < 15; i += 1) {
    modules[size - 15 + i][8] = ((bits >>> i) & 1) !== 0;
    isFunc[size - 15 + i][8] = true;
  }
  modules[size - 8][8] = true;
  isFunc[size - 8][8] = true;
}

function drawVersionBits(modules, isFunc, size, version) {
  if (version < 7) return;
  let rem = version;
  for (let i = 0; i < 12; i += 1) {
    rem = (rem << 1) ^ (((rem >>> 11) & 1) * 0x1f25);
  }
  const bits = (version << 12) | rem;
  for (let i = 0; i < 18; i += 1) {
    const bit = ((bits >>> i) & 1) !== 0;
    const a = size - 11 + (i % 3);
    const b = Math.floor(i / 3);
    modules[b][a] = bit;
    isFunc[b][a] = true;
    modules[a][b] = bit;
    isFunc[a][b] = true;
  }
}

function maskBit(mask, r, c) {
  switch (mask) {
    case 0: return (r + c) % 2 === 0;
    case 1: return r % 2 === 0;
    case 2: return c % 3 === 0;
    case 3: return (r + c) % 3 === 0;
    case 4: return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0;
    case 5: return ((r * c) % 2) + ((r * c) % 3) === 0;
    case 6: return (((r * c) % 2) + ((r * c) % 3)) % 2 === 0;
    default: return (((r + c) % 2) + ((r * c) % 3)) % 2 === 0;
  }
}

function penaltyScore(modules, size) {
  let score = 0;
  for (let r = 0; r < size; r += 1) {
    let runColor = modules[r][0];
    let runLen = 1;
    for (let c = 1; c < size; c += 1) {
      if (modules[r][c] === runColor) {
        runLen += 1;
        if (runLen === 5) score += 3;
        else if (runLen > 5) score += 1;
      } else {
        runColor = modules[r][c];
        runLen = 1;
      }
    }
  }
  for (let c = 0; c < size; c += 1) {
    let runColor = modules[0][c];
    let runLen = 1;
    for (let r = 1; r < size; r += 1) {
      if (modules[r][c] === runColor) {
        runLen += 1;
        if (runLen === 5) score += 3;
        else if (runLen > 5) score += 1;
      } else {
        runColor = modules[r][c];
        runLen = 1;
      }
    }
  }
  return score;
}

export function encodeQrMatrix(text) {
  const bytes = new TextEncoder().encode(String(text || ''));
  const version = selectVersion(bytes.length);
  const spec = VERSION_SPEC_L[version];
  const size = 17 + version * 4;

  const baseModules = Array.from({ length: size }, () => new Array(size).fill(false));
  const isFunc = Array.from({ length: size }, () => new Array(size).fill(false));

  drawFinder(baseModules, isFunc, size, 0, 0);
  drawFinder(baseModules, isFunc, size, 0, size - 7);
  drawFinder(baseModules, isFunc, size, size - 7, 0);

  for (let i = 8; i < size - 8; i += 1) {
    baseModules[6][i] = i % 2 === 0;
    isFunc[6][i] = true;
    baseModules[i][6] = i % 2 === 0;
    isFunc[i][6] = true;
  }

  const coords = spec.align;
  for (let i = 0; i < coords.length; i += 1) {
    for (let j = 0; j < coords.length; j += 1) {
      const isCorner =
        (i === 0 && j === 0) ||
        (i === 0 && j === coords.length - 1) ||
        (i === coords.length - 1 && j === 0);
      if (!isCorner) drawAlignment(baseModules, isFunc, coords[i], coords[j]);
    }
  }

  drawFormatBits(baseModules, isFunc, size, 0);
  drawVersionBits(baseModules, isFunc, size, version);

  const codewords = buildCodewords(bytes, version);
  const bitStream = [];
  for (const cw of codewords) pushBits(bitStream, cw, 8);

  let bitIdx = 0;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let vert = 0; vert < size; vert += 1) {
      const upward = ((right + 1) & 2) === 0;
      const r = upward ? size - 1 - vert : vert;
      for (let j = 0; j < 2; j += 1) {
        const c = right - j;
        if (!isFunc[r][c]) {
          baseModules[r][c] = bitIdx < bitStream.length ? bitStream[bitIdx] === 1 : false;
          bitIdx += 1;
        }
      }
    }
  }

  // Pick lowest-penalty mask among 0..7
  let bestMatrix = null;
  let bestScore = Infinity;
  for (let m = 0; m < 8; m += 1) {
    const candidate = baseModules.map((row, r) =>
      row.map((val, c) => (isFunc[r][c] ? val : val !== maskBit(m, r, c)))
    );
    drawFormatBits(candidate, isFunc, size, m);
    const sc = penaltyScore(candidate, size);
    if (sc < bestScore) {
      bestScore = sc;
      bestMatrix = candidate;
    }
  }
  return bestMatrix;
}

export function renderQrSvg(text, { size = 180, margin = 3 } = {}) {
  const matrix = encodeQrMatrix(text);
  const n = matrix.length;
  const viewSize = n + margin * 2;
  let d = '';
  for (let r = 0; r < n; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (matrix[r][c]) {
        d += `M${c + margin} ${r + margin}h1v1h-1z`;
      }
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewSize} ${viewSize}" width="${size}" height="${size}" role="img" aria-label="QR Code" shape-rendering="crispEdges"><rect width="${viewSize}" height="${viewSize}" fill="#FFFFFF"/><path d="${d}" fill="#070A0E"/></svg>`;
}
