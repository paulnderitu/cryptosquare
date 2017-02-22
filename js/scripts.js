var encrypt = function(message) {
  var cleanedMessage = message.match(/[A-Za-z0-9]/g);
  var messageLength  = cleanedMessage.length;
  var output = '';
  var outputArray = [];
  var root = parseInt(Math.ceil(Math.sqrt(messageLength)));
  var rectangle = [];
  var row = '';

  for (var i = 0; i < messageLength + 1; i++) {
    if (i % root == 0 && i !== 0) {
      rectangle.push(row);
      row = cleanedMessage[i];
    } else {
      if (i !== messageLength) {
        row += cleanedMessage[i];
      }
    }
  }
  rectangle.push(row);

  for(var i = 0; i < rectangle[0].length; i++) {
    rectangle.forEach(function(row) {
      if (row !== undefined) {
        if (row[i] !== undefined) {
          output += row[i]
        }
      }
    });
  }

  var strLength = output.split('').length;

  for (var i = 0; i < strLength; i += 5) {
    outputArray.push(output.slice(i, i + 5));
  }

  return outputArray.join(' ');
}

$(document).ready(function() {

  $(document).foundation();

  $(document).on('open.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    console.log(modal);
  });


  $("form#message_form").submit(function(event) {
    var encryptedMessage = encrypt($('input#message').val());

    $('#encrypted-message').text(encryptedMessage);
    $('#myModal').foundation('reveal', 'open');
    event.preventDefault();
  });
});
