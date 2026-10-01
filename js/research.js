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
  });
});
