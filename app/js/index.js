$(function() {
  $('body').on( 'click', '.flex-item', function () {
    var element = $(this).children()[0];
    $(element).text('Clicked!');
    setTimeout(function() { $(element).text(element.id.split('-')[1]); }, 1000);
  });
});
