var form = $("form#test-form"),
  url =
    "https://script.google.com/macros/s/AKfycbwFC6TIcPRTqOVInU_hy-7TDsCRQ5kGW7M5L0GUEp8Tc-H6w0lC/exec";

var $form = (form.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  })
$("#submit-form").on("click", function (e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form,
  });
});
