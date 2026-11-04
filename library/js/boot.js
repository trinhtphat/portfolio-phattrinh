import { BRANDS, LIBRARY_ENTRIES, LIBRARY_META } from '../data/library-data.js';
import { mountLibraryApp } from './library-app.js';

const root = document.getElementById('drinks-library-root');
if (root) {
  mountLibraryApp(root, {
    entries: LIBRARY_ENTRIES,
    brands: BRANDS,
    meta: LIBRARY_META,
  });
}
