/**
 * ATStereo Official Web Hub Scripts
 * 1-Click Clipboard Utilities & Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initClipboardCopy();
  initMobileMenu();
  initAnchorScroll();
});

/**
 * 1-Click Clipboard copy utility with visual toast notification
 */
function initClipboardCopy() {
  const copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast('Copied to clipboard!');

        btn.classList.add('copied');
        setTimeout(() => {
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Copied to clipboard!');
      }
    });
  });
}

/**
 * Displays floating toast notification
 */
function showToast(message) {
  let toast = document.getElementById('copy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'copy-toast';
    toast.className = 'copy-toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  clearTimeout(toast.hideTimeout);

  toast.hideTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/**
 * Smooth scrolling for internal anchor links
 */
function initAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * Mobile navigation menu drawer toggle and link dismissal
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const header = document.querySelector('.site-header');

  if (toggle && header) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('mobile-menu-active');
    });

    // Close mobile menu when a nav link is clicked
    const navLinks = header.querySelectorAll('.nav-link, .btn-github');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('mobile-menu-active');
      });
    });
  }
}
