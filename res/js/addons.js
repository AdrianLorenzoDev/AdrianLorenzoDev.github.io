//Fade in when ready and tooltip
$(document).ready(function(){
  $('#content').fadeIn(2200);
  $('[data-toggle="tooltip"]').tooltip({container:'body', trigger:'hover', placement:'bottom'});
});
