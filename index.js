document.addEventListener('DOMContentLoaded', () => {
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }
  if(localStorage.getItem('theme') !== null) {
    setTheme(`${localStorage.getItem('theme')}`);
  } else {
    setTheme('light-theme')
  }
  function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
      setTheme('light-theme');
    } else {
      setTheme('dark-theme');
    }
  }
  document.querySelector('.switch-theme-btn').addEventListener('click', (e) => {
    toggleTheme();
  });
})
