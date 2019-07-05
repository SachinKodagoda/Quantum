$(function () {

  $(".txtBox_01").change(function () {
    $(".tbutton_01").css("background-color", $(".txtBox_01").val());
  });
  $('.form_slider').on('input', function () {
    $('.form_slider_popup_val').html($(".form_slider").val());
    $('.form_slider_popup').css({ "width": "0", 'height': "0" }).css({ "width": "30px", 'height': "30px", "left": ($(".form_slider").val() + '%') }).css("left", "-=12px");
  })
  $('.form_slider').change(function () {
    $('.form_slider_popup').css({ "width": "0", 'height': "0" });
  })

  $('.form_slider').focusout(function () {
    $('.form_slider_popup').css({ "width": "0", 'height': "0" });
  })
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}