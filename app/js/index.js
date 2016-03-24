$(function() {
  var counter = 0;
  var status = '';
  Notification.requestPermission();

  function withoutStatus() {
    var vArray = ''
    var screen = $('.screen').text().trim();
    switch (status) {
      case 'add':
      vArray = screen.split('+');
      counter = parseInt(vArray[0]) + parseInt(vArray[1]);
        break;
      case 'substract':
      vArray = screen.split('-');
      counter = parseInt(vArray[0]) - parseInt(vArray[1]);
        break;
      case 'mult':
      vArray = screen.split('x');
      counter = parseInt(vArray[0]) * parseInt(vArray[1]);
        break;
      default:
      vArray = screen.split('/');
      counter = parseInt(vArray[0]) / parseInt(vArray[1]);
    }
  }

  $('.flex-container').on( 'click', '.number', function () {
    var element = $(this).children()[0];
    $('.screen').text($('.screen').text().trim() + $(element).text().toString());
  });

  $('.flex-container').on( 'click', '#notify', function () {
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
      withoutStatus();
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
      withoutStatus();
      $('.screen').text(counter.toString() + '-');
    }
  });

  $('body').on( 'click', '#mult', function () {
    var screen = $('.screen').text().trim();
    if (status === ''){
      status = 'mult';
      value = parseInt(screen);
      counter = value;
      $('.screen').text(screen + 'x');
    } else {
      withoutStatus();
      $('.screen').text(counter.toString() + 'x');
    }
  });

  $('body').on( 'click', '#reset', function () {
    status = '';
    counter = 0;
    $('.screen').text('');
  });

  $('body').on( 'click', '#equal', function () {
    var screen = $('.screen').text().trim();
    if (status === ''){
      counter = parseInt(screen);
    } else if (status == 'add') {
      counter = counter + parseInt(screen.split('-')[1]);
    } else if (status == 'substract') {
      counter = counter - parseInt(screen.split('-')[1]);
    }
    var options = {
        body: 'Result: ' + counter.toString(),
        icon: 'img/att_small.png'
    };
    var notification = new Notification('Result', options);
    setTimeout(notification.close.bind(notification), 5000);
    status = '';
    counter = 0;
    $('.screen').text('');
  });
});
