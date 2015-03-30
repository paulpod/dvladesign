
if (!Array.prototype.pushArray){
  Array.prototype.pushArray = function() {
    var toPush = this.concat.apply([], arguments);
    for (var i = 0, len = toPush.length; i < len; ++i) {
      this.push(toPush[i]);
    }
  };
}

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}

$(function(){

  // $(window).on('beforeunload', function(){
  //  if(document.location.pathname === "/choose-company" || "") {
  //    history.pushState({}, "", "/idp-back-error"+location.search);
  //  }
  // });


  var $fakeInput = $('<span class="fake-input"><span class="fake-input-inner"></span></span>');

  $('.selectable').each(function(){

    var $this = $(this);

    var $input = $this.find('input');

    $input.hide();

    var $fakeInputClone = $fakeInput.clone();

    if ($input.is(":radio")){

      $fakeInputClone.addClass('fake-input-radio');

    }

    $input.after($fakeInputClone);

  });


  $('body').on('click', '.toggle-link', function(e){

    e.preventDefault();

    var target = $(this).attr('data-target');

    $('#'+target).toggle();

  });

  $('input:checked').closest('.selectable').addClass('selected');

  $('body').on('change', 'input[type="checkbox"]', function(e){

    var $this = $(this);

    $this.closest('label').toggleClass('selected', $this.is(':checked'));

  });


  $('body').on('change', 'input[type="radio"]', function(e){

    var $this = $(this);

    $('input[type="radio"][name="' + $this.attr('name') + '"]').closest('label').removeClass('selected');

    $this.closest('label').toggleClass('selected', $this.is(':checked'));

  });

  $('body').on('change', 'input', function(){

    var $this = $(this);

    // toggle optional sections

    if ($this.is(':checkbox')){

      var $toggleTarget = $('.optional-section-'+$this.attr('name') + '[data-toggle-value="'+$this.val() + '"]');

      console.log('.optional-section-'+$this.attr('name') + '[data-toggle-value="'+$this.val() + '"]');

      if ($toggleTarget.length){

        $toggleTarget.toggle($this.is(':checked') && $this.val() == $toggleTarget.attr('data-toggle-value'));

      }

    } else if ($this.is(':radio')){

      var $toggleTarget = $('.optional-section-'+$this.attr('name'));

      console.log('.optional-section-'+$this.attr('name') + '[data-toggle-value="'+$this.val() + '"]');

      $toggleTarget.each(function(){

        $(this).toggle($this.val() == $(this).attr('data-toggle-value'));

      });
    }

  });


  $('input:checked').each(function(){
    console.log(this);
    $(this).change();
  });

});

