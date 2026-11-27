// small helpers
['year', 'year2', 'year3'].forEach(function (id) {
  var el = document.getElementById(id);
  if (el) el.textContent = new Date().getFullYear();
});

// Project carousels: pause videos on slides you leave, play the one you land on
document.querySelectorAll('.project-carousel').forEach(function (carousel) {
  carousel.addEventListener('slide.bs.carousel', function (e) {
    var leaving = carousel.querySelectorAll('.carousel-item')[e.from];
    var v = leaving && leaving.querySelector('video');
    if (v) v.pause();
  });
  carousel.addEventListener('slid.bs.carousel', function (e) {
    var v = e.relatedTarget.querySelector('video');
    if (v) v.play().catch(function () {});
  });
});
