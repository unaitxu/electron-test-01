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

  $('.action-container').on( 'click', '#add', function () {
    if (status !== ''){
      status = 'add';
      value = $('.screen').text().trim().parseInt();
      counter = value;
      $('.screen').text($('.screen').text().trim() + '+');
    } else {
      // Control the error
    }
  });

  $('.action-container').on( 'click', '#substract', function () {
    if (status !== ''){
      status = 'substract';
      value = $('.screen').text().trim().parseInt();
      counter = value;
      $('.screen').text($('.screen').text().trim() + '-');
    } else {
      // Control the error
    }
  });

  $('.action-container').on( 'click', '#reset', function () {
    status = '';
    counter = 0;
    $('.screen').text();
  });
});
