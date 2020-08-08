// function to set a given theme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

// function to set the theme on initial load
(function () {
if (localStorage.getItem('theme') === 'theme-dark') {
  setTheme('theme-dark');
  document.getElementById('theme-slider').checked = false;
} else {
  setTheme('theme-light');
  document.getElementById('theme-slider').checked = true;
}
})();
