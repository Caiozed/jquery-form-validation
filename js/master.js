$(document).ready(function() {
  $("#signup").submit(function(e) {
    e.preventDefault();
    fieldConfirmation($("#email"), $("#email_confirmation"));
    fieldConfirmation($("#password"), $("#password_confirmation"));
  });

  hints("email", "eg: name@domain.com");
  hints("email_confirmation", "Repeat your email above");
  hints("phone", "eg: \(55\)-5555-5555");
  hints("password", "Add your password");
  hints("password_confirmation", "Repeat your password");
});


function fieldConfirmation(field, filed_confirmation) {
  $(".error_message").remove();
  if (field.val() != filed_confirmation.val()) {
    field.addClass("field_with_errors");
    filed_confirmation.addClass("field_with_errors");
    filed_confirmation.after("<p class='error_message'>Fields don't match!</p>")
    field.focus();
  }
}

function hints(id, message) {
  $("#signup").on("focus", "#" + id, function(e) {
    $(".hint").remove();
    $(this).after("<span class='hint'>" + message + "<span>");
  });
  $("#signup").on("focusout", "#" + id, function(e) {
    $(".hint").fadeOut(500);
  });
}
