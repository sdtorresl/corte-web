$("#to-select").on('click', 'option', function() {
  var value = $(this).val();
  var text = $(this).text();
  $("#selected").append('<option value="' + value + '">' + text + '</option>');
  $("#to-select option[value=" + value + "]").remove();
  sortSelect('#to-select');
  sortSelect('#selected');
});

$("#selected").on('click', 'option',  function() {
  var value = $(this).val();
  var text = $(this).text();
  $("#selected option[value=" + value + "]").remove();
  $("#to-select").append('<option value="' + value + '">' + text + '</option>');
  sortSelect('#to-select');
  sortSelect('#selected');
});

function sortSelect(selector) {
  var select = $(selector);
  select.html(select.find('option').sort(function(x, y) {
    x = x.value;
    y = y.value;
    
    return x - y;
  }));
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function() {
  $('.dropdown').on('show.bs.dropdown', function () {
    $("#focus").css("display", "block");
  })

  $('.dropdown').on('hide.bs.dropdown', function () {
    $("#focus").css("display", "none");
  })
});