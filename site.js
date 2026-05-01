// StatsAI — shared site behavior

function toggleLang() {
  const body = document.body;
  body.classList.add('switching');
  setTimeout(() => {
    const isAr = body.dataset.lang === 'ar';
    body.dataset.lang = isAr ? 'en' : 'ar';
    body.dir = isAr ? 'ltr' : 'rtl';
    body.lang = isAr ? 'en' : 'ar';
    body.classList.remove('switching');
    try { localStorage.setItem('statsai-lang', body.dataset.lang); } catch (e) {}
  }, 150);
}

// Restore saved language preference
(function() {
  try {
    const saved = localStorage.getItem('statsai-lang');
    if (saved && saved !== document.body.dataset.lang) {
      document.body.dataset.lang = saved;
      document.body.dir = saved === 'en' ? 'ltr' : 'rtl';
      document.body.lang = saved;
    }
  } catch (e) {}
})();

// Highlight active nav link
(function() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === './')) {
      link.classList.add('active');
    }
  });
})();
