//Fade in when ready and tooltip
$(document).ready(function(){
  $('#sum').fadeIn(2500);
  $('[data-toggle="tooltip"]').tooltip({container:'body', trigger:'hover', placement:'bottom'});
});
