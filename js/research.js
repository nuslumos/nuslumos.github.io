document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.research-gallery').forEach(function (gallery) {
    var main = new Splide(gallery.querySelector('.research-gallery-main'), {
      type: 'fade',
      rewind: true,
      pagination: false,
      speed: 400,
      autoplay: true,
      interval: 4000,
      pauseOnHover: true,
      pauseOnFocus: true
    });
    var thumbnails = new Splide(gallery.querySelector('.research-gallery-thumbnails'), {
      fixedWidth: 88,
      fixedHeight: 56,
      gap: 10,
      rewind: true,
      pagination: false,
      arrows: false,
      isNavigation: true,
      focus: 'center',
      breakpoints: {
        767: { fixedWidth: 68, fixedHeight: 44, gap: 8 }
      }
    });
    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

    // Fit research galleries to the displayed image to avoid empty space above thumbnails.
    // Homepage galleries retain their existing dimensions.
    if (gallery.closest('.research-page-container')) {
      var track = gallery.querySelector('.research-gallery-main .splide__track');
      var images = Array.from(track.querySelectorAll('img'));
      function fitResearchImages(index) {
        var img = images[typeof index === 'number' ? index : main.index];
        if (!img || !img.naturalWidth || !track.clientWidth) return;
        var limit = window.matchMedia('(max-width: 767px)').matches ? 240 : 300;
        var height = Math.min(limit, track.clientWidth * img.naturalHeight / img.naturalWidth);
        gallery.style.setProperty('--research-image-height', Math.round(height) + 'px');
      }
      images.forEach(function (img) { img.addEventListener('load', fitResearchImages); });
      main.on('move', fitResearchImages);
      if (window.ResizeObserver) {
        new ResizeObserver(fitResearchImages).observe(track);
      } else {
        window.addEventListener('resize', fitResearchImages);
      }
      fitResearchImages();
    }
  });
});
