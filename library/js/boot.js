import { BRANDS, LIBRARY_ENTRIES, LIBRARY_META } from '../data/library-data.js?v=2.3.0';
import { mountLibraryApp } from './library-app.js?v=2.3.0';

const root = document.getElementById('drinks-library-root');
if (root) {
  mountLibraryApp(root, {
    entries: LIBRARY_ENTRIES,
    brands: BRANDS,
    meta: LIBRARY_META,
  });
}
