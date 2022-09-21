document.addEventListener('click', function(event) {
  let target = event.target;
  let tagName = target.tagName;

  if (tagName && 'BUTTON' && target.classList.contains('revealable-button')) {
    return event
      .target
      .closest('.revealable-block')
      .classList
      .toggle('revealable-visible');
  }

  if (tagName == 'A' && target.classList.contains('toggle-hint')) {
    event.preventDefault();
    return document.getElementById(target.getAttribute('href').slice(1))
      .classList
      .toggle('hint-visible');
  }
});

document.addEventListener('click', function(event) {
});
