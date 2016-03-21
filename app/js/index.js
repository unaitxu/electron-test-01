$(function() {
  var counter = 0;
  var status = '';
  Notification.requestPermission();

  $('.flex-container').on( 'click', '.number', function () {
    var element = $(this).children()[0];
    $('.screen').text($('.screen').text().trim() + $(element).text().toString());
  });

  $('.action-container').on( 'click', '#notify', function () {
    var options = {
        body: 'Notify all the things!',
        icon: 'img/att_small.png'
    };
    var notification = new Notification(counter.toString(), options);
    setTimeout(notification.close.bind(notification), 5000);
  });

  $('body').on( 'click', '#add', function () {
    var screen = $('.screen').text().trim();
    if (status === ''){
      status = 'add';
      value = parseInt(screen);
      counter = value;
      $('.screen').text(screen + '+');
    } else {
      var vArray = screen.split('+');
      if (vArray.length > 1) {
        counter = parseInt(vArray[0]) + parseInt(vArray[1]);
      } else {
        vArray = screen.split('-');
        counter = parseInt(vArray[0]) - parseInt(vArray[1]);
      }
      $('.screen').text(counter.toString() + '+');
    }
  });

  $('body').on( 'click', '#substract', function () {
    var screen = $('.screen').text().trim();
    if (status === ''){
      status = 'substract';
      value = parseInt(screen);
      counter = value;
      $('.screen').text(screen + '-');
    } else {
      var vArray = screen.split('-');
      if (vArray.length > 1) {
        counter = parseInt(vArray[0]) - parseInt(vArray[1]);
      } else {
        vArray = screen.split('+');
        counter = parseInt(vArray[0]) + parseInt(vArray[1]);
      }
      $('.screen').text(counter.toString() + '-');
    }
  });

  $('body').on( 'click', '#reset', function () {
    status = '';
    counter = 0;
    $('.screen').text('');
  });
});
