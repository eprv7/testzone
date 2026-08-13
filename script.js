document.addEventListener('DOMContentLoaded', () => {
  const PASSWORD = 'eprv4ever';
  const authScreen = document.getElementById('auth-screen');
  const siteContent = document.getElementById('site-content');
  const passwordInput = document.getElementById('password-input');
  const unlockButton = document.getElementById('unlock-button');
  const errorMessage = document.getElementById('error-message');

  const unlockSite = () => {
    const value = passwordInput.value.trim();

    if (value === PASSWORD) {
      authScreen.classList.add('hidden');
      siteContent.classList.remove('hidden');
      passwordInput.value = '';
      errorMessage.textContent = '';
      localStorage.setItem('testzoneUnlocked', 'true');
      return;
    }

    errorMessage.textContent = 'Incorrect password. Please try again.';
    passwordInput.focus();
  };

  const isUnlocked = localStorage.getItem('testzoneUnlocked') === 'true';
  if (isUnlocked) {
    authScreen.classList.add('hidden');
    siteContent.classList.remove('hidden');
  }

  unlockButton.addEventListener('click', unlockSite);
  passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      unlockSite();
    }
  });

  document.querySelectorAll('#site-content button').forEach((button) => {
    button.addEventListener('click', () => {
      button.textContent = 'Clicked';
    });
  });
});
