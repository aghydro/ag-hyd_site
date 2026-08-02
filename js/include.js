// Loads every element with a data-include="path/to/file.html" attribute,
// replacing it with the fetched HTML. Fires an 'includesLoaded' event on
// `document` once every partial has been inserted, so other scripts
// (see main.js) can safely wire up event listeners on the final DOM.
//
// NOTE: this uses fetch(), which requires the page to be served over
// http(s) (e.g. GitHub Pages, Netlify, a local dev server). It will NOT
// work if you open index.html directly from disk (file:// URLs).

async function loadIncludes() {
  
  const targets = Array.from(document.querySelectorAll('[data-include]'));

  await Promise.all(targets.map(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file, { cache: 'no-store' });
      if (!res.ok) throw new Error(`${file} responded with ${res.status}`);
      el.outerHTML = await res.text();
    } catch (err) {
      console.error('Failed to load partial:', file, err);
      el.innerHTML = `<p style="padding:40px;text-align:center;color:#c00;">
        Could not load ${file}
      </p>`;
    }
  }));

  document.dispatchEvent(new Event('includesLoaded'));
}

loadIncludes();
