$(document).ready(function() {
  $("#front").click(function(){
    $("#panel_front").slideToggle("slow");
    $("#panel_back").slideUp("slow");
    $("#panel_other").slideUp("slow");
  });
  $("#back").click(function(){
    $("#panel_back").slideToggle("slow");
    $("#panel_front").slideUp("slow");
    $("#panel_other").slideUp("slow");
  });
  $("#other").click(function(){
    $("#panel_other").slideToggle("slow");
    $("#panel_back").slideUp("slow");
    $("#panel_front").slideUp("slow");
  });
});
