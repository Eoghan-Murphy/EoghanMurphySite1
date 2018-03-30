$(document).ready(function(){

function easeInOutQuad(t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t }

  $("#AboutButton").click(function(){
    $.scrollTo($("#about").offset().top - (0.08 * $( window ).height()) , 1000, easeInOutQuad);
  });
  $("#SkillsButton").click(function(){
    $.scrollTo($("#skills").offset().top - (0.08 * $( window ).height()) , 1000, easeInOutQuad);
  });
  $("#GradesButton").click(function(){
    $.scrollTo($("#grades").offset().top - (0.08 * $( window ).height()) , 1000, easeInOutQuad);
  });
  $("#WorkButton").click(function(){
    $.scrollTo($("#workex").offset().top - (0.08 * $( window ).height()) , 1000, easeInOutQuad);
  });
})
