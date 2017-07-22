$(document).ready(function() {
    $('.mdb-select').material_select();
  });

$('.datepicker').pickadate({
	monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	formatSubmit: 'yyyy/mm/dd',
	editable: false
})

$('.timepicker').pickatime({
    twelvehour: false
});