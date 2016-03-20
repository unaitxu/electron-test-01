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
    if (status === ''){
      status = 'add';
      value = parseInt($('.screen').text().trim());
      counter = value;
      $('.screen').text($('.screen').text().trim() + '+');
    } else {
      // Control the error
    }
  });

  $('body').on( 'click', '#substract', function () {
    if (status === ''){
      status = 'substract';
      value = parseInt($('.screen').text().trim());
      counter = value;
      $('.screen').text($('.screen').text().trim() + '-');
    } else {
      // Control the error
    }
  });

  $('.action').on( 'click', '#reset', function () {
    status = '';
    counter = 0;
    $('.screen').text();
  });
});
