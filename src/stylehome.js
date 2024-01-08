import $ from 'jquery';
$(document).ready(function() {
  $(document).on('focus', '#search', function() {
    $(".search-box").addClass("border-searching");
    $(".search-icon").addClass("si-rotate");
  });

  $(document).on('blur', '#search', function() {
    $(".search-box").removeClass("border-searching");
    $(".search-icon").removeClass("si-rotate");
  });

  $(document).on('keyup', '#search', function() {
    if ($(this).val().length > 0) {
      $(".go-icon").addClass("go-in");
    } else {
      $(".go-icon").removeClass("go-in");
    }
  });
});
