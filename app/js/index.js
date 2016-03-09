$(function() {
  $('body').on( 'click', '.flex-item', function (e) {
    console.log('e');
    var element = $(this).children()[0];
    $(element).text('Clicked!');
    setTimeout(function() { $(element).text(element.id.split('-')[1]); }, 2000);
  });
});
