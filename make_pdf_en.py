# -*- coding: utf-8 -*-
"""
Generate English Brand Ambassador Profile PDF (1 Page A4)
Matching the tone, pillars, and branding of landing-trade.html
"""
import os
import qrcode
import textwrap
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from PIL import Image as PILImage, ImageDraw

BASE = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(BASE, "..")) if os.path.basename(BASE) == "pdf_profile" else BASE

OUT_PDF = os.path.join(BASE, "Phat-Trinh-Brand-Ambassador-Profile-EN.pdf")
QR_PNG = os.path.join(ROOT_DIR, "qr.png")
LOGOS = os.path.join(ROOT_DIR, "brand-logos")
PORTRAIT_JPG = os.path.join(ROOT_DIR, "portrait.jpg")
ROUNDED_PORTRAIT = os.path.join(ROOT_DIR, "portrait_rounded.png")
ZALO_URL = "https://zalo.me/0988822807"

# Prepare Rounded Portrait
if not os.path.exists(ROUNDED_PORTRAIT):
    im = PILImage.open(PORTRAIT_JPG).convert("RGBA")
    size = (360, 360)
    im = im.resize(size, PILImage.Resampling.LANCZOS)
    mask = PILImage.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size[0], size[1]), radius=24, fill=255)
    im.putalpha(mask)
    im.save(ROUNDED_PORTRAIT)

# Unicode fonts
if os.path.exists("C:/Windows/Fonts/segoeui.ttf"):
    pdfmetrics.registerFont(TTFont("CustomSans", "C:/Windows/Fonts/segoeui.ttf"))
    pdfmetrics.registerFont(TTFont("CustomSans-Bold", "C:/Windows/Fonts/segoeuib.ttf"))
    pdfmetrics.registerFont(TTFont("CustomSans-Oblique", "C:/Windows/Fonts/segoeuii.ttf"))
elif os.path.exists("C:/Windows/Fonts/arial.ttf"):
    pdfmetrics.registerFont(TTFont("CustomSans", "C:/Windows/Fonts/arial.ttf"))
    pdfmetrics.registerFont(TTFont("CustomSans-Bold", "C:/Windows/Fonts/arialbd.ttf"))
    pdfmetrics.registerFont(TTFont("CustomSans-Oblique", "C:/Windows/Fonts/ariali.ttf"))
else:
    pdfmetrics.registerFont(TTFont("CustomSans", "Helvetica"))
    pdfmetrics.registerFont(TTFont("CustomSans-Bold", "Helvetica-Bold"))
    pdfmetrics.registerFont(TTFont("CustomSans-Oblique", "Helvetica-Oblique"))

F_REG, F_BOLD, F_IT = "CustomSans", "CustomSans-Bold", "CustomSans-Oblique"
BG, SURFACE, TEXT, MUTED, ACCENT, LINE, WHITE = (
    "#F6F1E6", "#EBE0CC", "#221A12", "#6E5F4C", "#A85B23", "#D8CBB0", "#FFFFFF"
)

# QR Code
qr = qrcode.QRCode(border=1, box_size=10, error_correction=qrcode.constants.ERROR_CORRECT_M)
qr.add_data(ZALO_URL)
qr.make(fit=True)
qr.make_image(fill_color=TEXT, back_color="white").save(QR_PNG)

PAGE_W, PAGE_H = A4
MARGIN = 14 * mm
CONTENT_W = PAGE_W - 2 * MARGIN

c = canvas.Canvas(OUT_PDF, pagesize=A4)

def bg_fill():
    c.setFillColor(HexColor(BG))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

def hline(y, x1=MARGIN, x2=PAGE_W - MARGIN, color=LINE, width=0.7):
    c.setStrokeColor(HexColor(color))
    c.setLineWidth(width)
    c.line(x1, y, x2, y)

def wrap_draw(text, x, y, width_chars, font, size, leading, color=TEXT, align="left"):
    c.setFont(font, size)
    c.setFillColor(HexColor(color))
    lines = []
    for para in text.split("\n"):
        lines.extend(textwrap.wrap(para, width=width_chars) or [""])
    cy = y
    for line in lines:
        if align == "left":
            c.drawString(x, cy, line)
        elif align == "right":
            c.drawRightString(x, cy, line)
        elif align == "center":
            c.drawCentredString(x, cy, line)
        cy -= leading
    return cy

def pill_row(tags, x0, y0, max_x, font=F_REG, size=7.2, pad=6.5, h=14.0, gap=5.5, row_gap=16.0,
             fg=MUTED, bd=LINE):
    x, y = x0, y0
    c.setFont(font, size)
    for t in tags:
        tw = c.stringWidth(t, font, size) + pad * 2
        if x + tw > max_x and x > x0:
            x = x0
            y -= row_gap
        c.setStrokeColor(HexColor(bd))
        c.setLineWidth(0.7)
        c.roundRect(x, y - h, tw, h, h / 2, stroke=1, fill=0)
        c.setFillColor(HexColor(fg))
        c.drawCentredString(x + tw / 2, y - h / 2 - size * 0.32, t)
        x += tw + gap
    return y - h

def draw_brand_logos_centered(x_center, y_top, max_w, box_h=25, gap=6.5):
    logos_config = [
        ("telmont.png", False, 11.5, 7.0),
        ("mount-gay.png", False, 12.5, 7.0),
        ("octomore.png", False, 13.0, 7.0),
        ("remy-martin.png", True, 19.0, 8.0),
        ("cointreau.png", True, 15.5, 8.0),
        ("bruichladdich.png", False, 13.0, 7.0),
        ("port-charlotte.png", False, 14.5, 1.57),
        ("botanist.png", False, 11.0, 7.0),
    ]
    boxes = []
    total_w = 0.0
    for fname, is_anchor, target_area, target_aspect in logos_config:
        fpath = os.path.join(LOGOS, fname)
        if not os.path.exists(fpath):
            continue
        try:
            with PILImage.open(fpath) as pimg:
                pw, ph = pimg.size
                actual_aspect = pw / float(ph)
        except Exception:
            actual_aspect = target_aspect

        area_factor = 1.25 if is_anchor else 0.95
        inner_h = min(14.0, max(8.0, target_area * area_factor / actual_aspect**0.4))
        inner_w = inner_h * actual_aspect
        box_w = inner_w + (18.0 if is_anchor else 12.0)
        box_w = max(box_w, 42.0)
        box_w = min(box_w, 90.0)
        boxes.append({
            'fpath': fpath,
            'is_anchor': is_anchor,
            'bw': box_w,
            'bh': box_h,
            'img_w': inner_w,
            'inner_h': inner_h
        })
        total_w += box_w

    total_w += (len(boxes) - 1) * gap
    cur_x = x_center - total_w / 2.0
    for b in boxes:
        bx = cur_x
        by = y_top - b['bh']
        c.setFillColor(HexColor(SURFACE if not b['is_anchor'] else WHITE))
        c.setStrokeColor(HexColor(LINE))
        c.setLineWidth(0.8 if b['is_anchor'] else 0.6)
        c.roundRect(bx, by, b['bw'], b['bh'], 3, stroke=1, fill=1)
        img_x = bx + (b['bw'] - b['img_w']) / 2.0
        img_y = by + (b['bh'] - b['inner_h']) / 2.0
        c.drawImage(ImageReader(b['fpath']), img_x, img_y, width=b['img_w'], height=b['inner_h'], mask="auto")
        cur_x += b['bw'] + gap
    return y_top - box_h

bg_fill()

# 1. Top bar
y = PAGE_H - MARGIN
c.setFont(F_REG, 8.0)
c.setFillColor(HexColor(MUTED))
c.drawString(MARGIN, y, "PHAT TRINH  ·  BRAND AMBASSADOR & SPIRITS EDUCATOR")
c.drawRightString(PAGE_W - MARGIN, y, "TRADE PROFILE")
y -= 6
hline(y)

# 2. Hero Section
y -= 18
photo_size = 68
photo_x = PAGE_W - MARGIN - photo_size
photo_y = y - photo_size + 6

c.setFillColor(HexColor(SURFACE))
c.roundRect(photo_x - 3, photo_y - 3, photo_size + 6, photo_size + 6, 6, stroke=0, fill=1)
c.setStrokeColor(HexColor(LINE))
c.setLineWidth(0.8)
c.roundRect(photo_x - 3, photo_y - 3, photo_size + 6, photo_size + 6, 6, stroke=1, fill=0)
c.drawImage(ImageReader(ROUNDED_PORTRAIT), photo_x, photo_y, width=photo_size, height=photo_size, mask="auto")

c.setFont(F_BOLD, 8.5)
c.setFillColor(HexColor(ACCENT))
c.drawString(MARGIN, y, "BRAND AMBASSADOR  —  RÉMY COINTREAU VIETNAM")

y -= 23
c.setFont(F_BOLD, 24)
c.setFillColor(HexColor(TEXT))
c.drawString(MARGIN, y, "PHAT TRINH")

y -= 18
tagline = "Championing world-class heritage spirits — with the authentic voice of the trade."
y = wrap_draw(tagline, MARGIN, y, width_chars=48, font=F_IT, size=11.5, leading=15.0, color=TEXT)
y -= 5

lead_text = (
    "I've spent 10+ years behind the bar and on the road for some of the world's top spirits brands. "
    "These days I represent Rémy Cointreau's portfolio in Vietnam — training bartenders, "
    "hosting tastings, and helping brands actually connect with the people pouring their drinks."
)
y = wrap_draw(lead_text, MARGIN, y, width_chars=68, font=F_REG, size=8.5, leading=11.5, color=MUTED)

y = min(y, photo_y) - 10
hline(y)

# 3. Stat Row
y -= 15
stats = [
    ("10+", "Years in the trade"),
    ("08", "Prestige brands repped"),
    ("Nationwide", "Bar & partner network"),
    ("HCMC", "Primary home base"),
]

col_w = CONTENT_W / 4
stat_bottom = y
for i, (n, d) in enumerate(stats):
    x = MARGIN + i * col_w
    c.setFont(F_BOLD, 14.5)
    c.setFillColor(HexColor(ACCENT))
    c.drawString(x, y, n)
    bot = wrap_draw(d, x, y - 13, width_chars=20, font=F_REG, size=7.4, leading=9.0, color=MUTED)
    stat_bottom = min(stat_bottom, bot)
    if i > 0:
        c.setStrokeColor(HexColor(LINE))
        c.setLineWidth(0.5)
        c.line(x - 8, y + 11, x - 8, stat_bottom)
y = stat_bottom - 9
hline(y)

# 4. Background & Philosophy
y -= 15
c.setFont(F_BOLD, 8.5)
c.setFillColor(HexColor(ACCENT))
c.drawString(MARGIN, y, "BACKGROUND & PHILOSOPHY")
y_top = y - 13

col_gap = 8 * mm
col2_x = MARGIN + (CONTENT_W - col_gap) / 2 + col_gap

story_text = (
    "Whenever I get up to share something, I tell people the same thing: I came up the "
    "exact same way you did — service, barback, bartender, then bar operations. "
    "The hard parts of this job aren't something I heard about. I lived them."
)
pull = (
    "“Great spirits are just the beginning. My favorite part of the job is still pulling up "
    "a stool, pouring a drink, and talking shop with the person behind the bar.”"
)

y1 = wrap_draw(story_text, MARGIN, y_top, width_chars=44, font=F_REG, size=8.6, leading=11.8, color=TEXT)
c.setStrokeColor(HexColor(ACCENT))
c.setLineWidth(1.4)
c.line(col2_x, y_top + 3, col2_x, y_top - 46)
y2 = wrap_draw(pull, col2_x + 9, y_top, width_chars=36, font=F_IT, size=9.5, leading=13.0, color=ACCENT)

y = min(y1, y2) - 9
hline(y)

# 5. Brands Represented
y -= 15
c.setFont(F_BOLD, 8.5)
c.setFillColor(HexColor(ACCENT))
c.drawString(MARGIN, y, "RÉMY COINTREAU CORE PORTFOLIO")
y -= 7
y = draw_brand_logos_centered(PAGE_W / 2.0, y, CONTENT_W, box_h=25, gap=6.5)
y -= 11
hline(y)

# 6. 3 Core Pillars
y -= 15
c.setFont(F_BOLD, 8.5)
c.setFillColor(HexColor(ACCENT))
c.drawString(MARGIN, y, "3 CORE PILLARS")
y -= 13

col3_w = (CONTENT_W - 14 * mm) / 3
col3_gap = 7 * mm

pillars = [
    (
        "01  TERROIR · BRAND REPRESENTATION",
        "[HEADLINE] Rémy Cointreau Portfolio",
        "Championing the heritage and authentic terroir of exceptional spirits across premier venues, industry partners, and the trade community nationwide."
    ),
    (
        "02  PEOPLE · TEAM TRAINING",
        "[PROOF POINTS] 50+ Masterclasses • 500+ Staff",
        "Conducting hands-on tastings, spirits craft, and practical hospitality workshops—empowering bar and floor teams with real-world skills."
    ),
    (
        "03  TIME · EVENT & HOSTING",
        "[PROOF POINTS] 100+ Activations (Guest Shifts)",
        "Curating and hosting memorable guest shifts, curated tasting dinners, and brand activations that celebrate the art of mindful drinking and modern lifestyle."
    )
]

card_h = 82
pillar_bottom = y - card_h
for i, (title, sub, body) in enumerate(pillars):
    px = MARGIN + i * (col3_w + col3_gap)
    py = y

    c.setFillColor(HexColor(SURFACE))
    c.setStrokeColor(HexColor(LINE))
    c.setLineWidth(0.6)
    c.roundRect(px, py - card_h, col3_w, card_h, 4, stroke=1, fill=1)

    c.setFont(F_BOLD, 8.2)
    c.setFillColor(HexColor(TEXT))
    c.drawString(px + 8, py - 13, title)

    c.setFont(F_BOLD, 6.8)
    c.setFillColor(HexColor(ACCENT))
    c.drawString(px + 8, py - 23, sub)

    wrap_draw(body, px + 8, py - 34, width_chars=28, font=F_REG, size=7.0, leading=9.0, color=MUTED)

y = pillar_bottom - 11
hline(y)

# 7. Signature Venues & Collaborations
y -= 14
c.setFont(F_BOLD, 8.2)
c.setFillColor(HexColor(ACCENT))
col2_mid = MARGIN + CONTENT_W / 2 + 5
c.drawString(MARGIN, y, "SIGNATURE VENUES COLLABORATED")
c.drawString(col2_mid, y, "AVAILABLE COLLABORATIONS")
y -= 12

venues = [
    "Sofitel Legend Metropole", "InterContinental Danang", "Stir Saigon (Top 50 Asia)",
    "The Haflington Hanoi", "La Siesta Hotels", "CHẤM Dining", "Chess Club Saigon"
]
avail = [
    "Bespoke Team Training", "Private Tasting & Masterclasses", "Guest Shift Takeovers", "Brand Sponsorship & Events"
]

y1t = pill_row(venues, MARGIN, y, col2_mid - 8, row_gap=16)
y2t = pill_row(avail, col2_mid, y, PAGE_W - MARGIN, row_gap=16)
y = min(y1t, y2t) - 10

# 8. Footer / CTA (Matching Landing Page)
foot_h = 60
foot_top = y
foot_bottom = foot_top - foot_h
c.setFillColor(HexColor(SURFACE))
c.roundRect(MARGIN, foot_bottom, CONTENT_W, foot_h, 5, stroke=0, fill=1)

c.setFont(F_BOLD, 10.8)
c.setFillColor(HexColor(TEXT))
c.drawString(MARGIN + 14, foot_top - 16, "LET'S TALK")

c.setFont(F_REG, 7.6)
c.setFillColor(HexColor(MUTED))
c.drawString(MARGIN + 14, foot_top - 28, "Looking for someone who knows every label by heart, but also understands every corner behind the bar?")
c.drawString(MARGIN + 14, foot_top - 39, "Get in touch directly to explore collaborations — private tastings, team trainings, or guest shifts.")
c.setFont(F_BOLD, 7.8)
c.setFillColor(HexColor(ACCENT))
c.drawString(MARGIN + 14, foot_bottom + 8, "phat.trinh@alchemy-asia.com  ·  +84 988 822 807  ·  @trinhtphat  ·  Ho Chi Minh City")

qr_size = foot_h - 14
qr_x = PAGE_W - MARGIN - 14 - qr_size
qr_y = foot_bottom + 7
c.setFillColor(HexColor(WHITE))
c.rect(qr_x - 3, qr_y - 3, qr_size + 6, qr_size + 6, fill=1, stroke=0)
c.drawImage(ImageReader(QR_PNG), qr_x, qr_y, width=qr_size, height=qr_size)
c.setFont(F_REG, 5.5)
c.setFillColor(HexColor(MUTED))
c.drawCentredString(qr_x + qr_size / 2, qr_y - 7, "CONNECT ON ZALO")

c.showPage()
c.save()
print(f"Generated {OUT_PDF}")
