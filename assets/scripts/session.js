$(document).ready(function() {
  $('.answer button').on('click', function(event) {
    var holder = $(this).parent();
    holder.toggleClass('answer-visible');
  });
});
