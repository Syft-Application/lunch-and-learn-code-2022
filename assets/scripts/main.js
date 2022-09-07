// inspired by
// https://github.com/fniessen/org-html-themes
function tabifySections() {
  const $tabs = $('<ul>', { id: 'tabs' });
  document.querySelectorAll('.outline-2 > h2')
      .forEach((el) => {
        $el = $(el);
        $tabs.append(
          $('<li>')
            .prepend($('<a>', {
              href: '#' + $el.parent().attr('id'),
              text: $el.text()
            })));
        $el.remove();
      });

  // $('h1.title').after($tabs);
  $('#content > header').after($tabs);
}

$(document).ready(function() {
  // tabifySections();
  // $('#content').tabs();
});
