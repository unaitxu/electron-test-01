$(function() {
  var counter = 0;
  var status = 'add';
  Notification.requestPermission();

  $('.flex-container').on( 'click', '.flex-item', function () {
    var element = $(this).children()[0];
    $(element).text('Added!');
    setTimeout(function() { $(element).text(element.id.split('-')[1]); }, 1000);
    if (status == 'add') {
      counter += parseInt(element.id.split('-')[1]);
    } else {
      counter -= parseInt(element.id.split('-')[1]);
    }
    $('#title').text('Total count: ' + counter.toString());
  });

  $('.action-container').on( 'click', '#reset', function () {
    counter = 0;
    var options = {
        body: 'Reset all the things!',
        icon: 'http://lorempixel.com/50/50/'
    };
    var notification = new Notification('Calc reset', options);
    setTimeout(notification.close.bind(notification), 2000);
    $('#title').text('Add all the things!');
  });

  $('.action-container').on( 'click', '#add', function () {
    status = 'add';
    $('#title').text('Add all the things!');
  });

  $('.action-container').on( 'click', '#substract', function () {
    status = 'substract';
    $('#title').text('Substract all the things!');
  });
});
