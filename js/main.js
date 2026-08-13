/**
 * Mow & Glow Property Services — Landing Page Interactivity
 * Sticky navbar, smooth scrolling, gallery tab switching, lightbox modal, form validation
 */

const galleryData = {
  yard: [
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20251204_133917816_hdr-high-l7u7ne.jpg', caption: 'Lawn mowing & edge trimming' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260212_122953299_hdr-2-high.jpg', caption: 'Garden bed hedging & pruning' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260213_100123442-high-30d7l1.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260423_165022651-high-j3khej.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260424_133048252-high-sd7iih.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20251204_133848256_hdr-high-3u6sze.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260110_173858421_hdr-high-49m1e8.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260110_173913433_hdr-high-sdno0g.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260114_145211785-high-haq8eo.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260209_082518037_hdr-high-sdo0d8.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260402_151153063_hdr-high-ijyo8o.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260402_151823639-high-irqs1e.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260424_132843837_hdr-high-owi0nl.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260423_165045153-high-hlj5be.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/arch-high-ag60ah.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260605_102931951_hdr-2-high.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/20260717_165352-2-high.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/messenger_creation_bf03cb1d-26d7-4671-9024-adf5602758e0-high.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/20260728_082100-high.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/20260807_144036-1-high.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/messenger_creation_d8f9d522-d391-4e34-890e-bb268eac6aac-high-8832m6.jpg?enable-io=true&fit=bounds&width=1200&height=839', caption: '' }
  ],
  cleaning: [
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260129_115443854-high-usvuvb.jpg', caption: 'End of lease bond clean detail' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260129_115414897-high-3cp9gw.jpg', caption: 'Spotless kitchen deep clean' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260129_115408991-high-6vpbbn.jpg?enable-io=true&fit=bounds&width=1200&height=916', caption: 'Bathroom deep clean' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260210_123932927-high-3bj1g3.jpg?enable-io=true&fit=bounds&width=1200&height=916', caption: 'Kitchen deep clean' }
  ],
  maintenance: [
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260406_182445360-high-q9dfmg.jpg', caption: 'Lacquered Concrete Slab' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260412_180927576_hdr-high-axbxvk.jpg', caption: 'Lacquered Concrete Slab 2' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260427_143259354_hdr-high-rxatxh.jpg?enable-io=true&fit=bounds&width=1200&height=909', caption: 'Flat Pack Construction' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260527_173036954-high-nmx0hk.jpg?enable-io=true&fit=bounds&width=1200&height=909', caption: 'Roller Blinds Installation' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/img_20260527_173044352-high-p5i0c3.jpg?enable-io=true&fit=bounds&width=1200&height=909', caption: 'Roller Blinds Installation' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/20260724_150745-high.jpg?enable-io=true&fit=bounds&width=1200&height=909', caption: 'Telstra Box Renewal' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/20260720_174100-high.jpg?enable-io=true&fit=bounds&width=1200&height=909', caption: 'Telstra Box Renewal 2' },
    { src: 'https://primary.jwwb.nl/public/j/w/b/temp-emvlsfwthmslsvmukeyz/20260724_150720-high.jpg?enable-io=true&fit=bounds&width=1200&height=909', caption: 'Telstra Box Renewal 3' }
  ]
};

const ITEMS_PER_LOAD = 4;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation & Mobile Menu Toggle
  const header = document.getElementById('main-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Smooth Scrolling & CTA Routing to Quote Form
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Focus Name input if routing to Quote Form
        if (targetId === '#quote-form') {
          setTimeout(() => {
            const nameInput = document.getElementById('quote-name');
            if (nameInput) nameInput.focus();
          }, 400);
        }
      }
    });
  });

  // 3. Project Gallery Tab Switching
  const tabButtons = document.querySelectorAll('.gallery-tab-btn');
  const galleryContents = document.querySelectorAll('.gallery-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      galleryContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      const activeGallery = document.getElementById(`gallery-${targetTab}`);
      if (activeGallery) {
        activeGallery.classList.add('active');
      }
    });
  });

  // 4. Dynamic Gallery Rendering & Lightbox Modal
  const galleryState = {
    yard: { currentItems: 0 },
    cleaning: { currentItems: 0 },
    maintenance: { currentItems: 0 }
  };

  const renderGalleryItems = (category) => {
    const container = document.getElementById(`grid-${category}`);
    if (!container) return;

    const data = galleryData[category];
    if (!data) return;

    const currentCount = galleryState[category].currentItems;
    const nextCount = currentCount + ITEMS_PER_LOAD;
    const itemsToRender = data.slice(currentCount, nextCount);

    itemsToRender.forEach(item => {
      const el = document.createElement('div');
      el.className = 'gallery-item';
      el.setAttribute('data-lightbox', category);
      el.setAttribute('data-src', item.src);
      el.setAttribute('data-caption', item.caption);

      el.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" loading="lazy">
        <div class="gallery-overlay"><span>Enlarge Image</span></div>
      `;
      container.appendChild(el);
    });

    galleryState[category].currentItems = nextCount;

    // Hide load more button if all items are shown
    const btn = document.querySelector(`.btn-load-more[data-target="${category}"]`);
    if (btn) {
      if (galleryState[category].currentItems >= data.length) {
        btn.style.display = 'none';
      } else {
        btn.style.display = 'inline-block';
      }
    }
  };

  // Initial load
  ['yard', 'cleaning', 'maintenance'].forEach(renderGalleryItems);

  // Load more buttons
  document.querySelectorAll('.btn-load-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-target');
      renderGalleryItems(category);
    });
  });

  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  // Event Delegation for Lightbox on dynamic items
  document.body.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item && lightboxModal && lightboxImg) {
      const src = item.getAttribute('data-src');
      const caption = item.getAttribute('data-caption') || '';

      lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = caption;
      lightboxModal.classList.add('active');
      lightboxModal.setAttribute('aria-hidden', 'false');
    }
  });

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      lightboxModal.setAttribute('aria-hidden', 'true');
    }
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  // 5. Quote Form Validation & Submission
  const quoteForm = document.getElementById('quote-request-form');
  const nameInput = document.getElementById('quote-name');
  const emailInput = document.getElementById('quote-email');
  const messageInput = document.getElementById('quote-message');
  const successToast = document.getElementById('success-toast');
  const toastCloseBtn = document.getElementById('toast-close-btn');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      const nameGroup = nameInput ? nameInput.closest('.form-group') : null;
      if (!nameInput || !nameInput.value.trim()) {
        isValid = false;
        if (nameGroup) nameGroup.classList.add('has-error');
      } else {
        if (nameGroup) nameGroup.classList.remove('has-error');
      }

      // Validate Email
      const emailGroup = emailInput ? emailInput.closest('.form-group') : null;
      if (!emailInput || !emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        isValid = false;
        if (emailGroup) emailGroup.classList.add('has-error');
      } else {
        if (emailGroup) emailGroup.classList.remove('has-error');
      }

      // Validate Message
      const messageGroup = messageInput ? messageInput.closest('.form-group') : null;
      if (!messageInput || !messageInput.value.trim()) {
        isValid = false;
        if (messageGroup) messageGroup.classList.add('has-error');
      } else {
        if (messageGroup) messageGroup.classList.remove('has-error');
      }

      if (isValid) {
        // Show success modal/toast and reset form
        if (successToast) {
          successToast.classList.add('active');
          successToast.setAttribute('aria-hidden', 'false');
        }
        quoteForm.reset();
      }
    });
  }

  if (toastCloseBtn && successToast) {
    toastCloseBtn.addEventListener('click', () => {
      successToast.classList.remove('active');
      successToast.setAttribute('aria-hidden', 'true');
    });
  }
});
