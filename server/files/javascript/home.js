semantic.home = {};

// ready event
semantic.home.ready = function() {

  var
    $header        = $('.masthead'),
    handler
  ;

  handler = {
    endAnimation: function() {
      $header
        .addClass('stopped')
      ;
    }
  };

  $('.email.stripe form')
    .form({
      email: {
        identifier : 'email',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter an e-mail'
          },
          {
            type   : 'email',
            prompt : 'Please enter a valid e-mail address'
          }
        ]
      }
    })
  ;

  if(window.Transifex !== undefined) {
    window.Transifex.live.onTranslatePage(function(countryCode){
      var fullName = $('.language.dropdown .item[data-value=' + countryCode + ']').eq(0).text();
      $('.language.dropdown > .text').html(fullName);
    });
  }
};


// attach ready event
$(document)
  .ready(semantic.home.ready)
;