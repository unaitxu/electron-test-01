$(function() {
  var counter = 0;
  $('.flex-container').on( 'click', '.flex-item', function () {
    var element = $(this).children()[0];
    $(element).text('Added!');
    setTimeout(function() { $(element).text(element.id.split('-')[1]); }, 1000);
    counter += parseInt(element.id.split('-')[1]);
    $('#title').text('Total count: ' + counter.toString());
  });

  $(document).on( 'click', '#reset', function () {
    counter = 0;
    $('#title').text('Add all the things!');
  });
});
