$(document).ready(function() {
  $("#ageForm").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("#ageEntry").val());

    if (age >= 18) {
      $("#ofAge").show();
      $("#underAge").hide();
      $("#noEntry").hide();
    } else if (age < 18) {
      $("#ofAge").hide();
      $("#underAge").show();
      $("#noEntry").hide();
    } else {
      $("#ofAge").hide();
      $("#underAge").hide();
      $("#noEntry").show();
    }
  });
});