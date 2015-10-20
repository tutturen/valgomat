/**
* From Dagbladet.no
* http://styleguide.dagbladet.no/front-end.html#html
*/
var insertCss = function(href, head, useSSL, isLocal) {
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = (useSSL ? 'https:' : 'http:') + href;
  if (isLocal) {
    l.href = href;
  }
  head.parentNode.insertBefore(l, head);
}

var cb = function() {
  var h = document.getElementsByTagName('head')[0];
  var useSSL = 'https:' === document.location.protocol;
  insertCss('//styleguide.dagbladet.no/stylesheets/app.css', h, useSSL, false);
  insertCss('css/valgorama.css', h, useSSL, true);
};

var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) {
  raf(cb);
} else {
  window.addEventListener('domContentLoaded', cb);
};