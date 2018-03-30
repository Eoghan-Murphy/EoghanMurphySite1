$(document).ready(function(){
  var donescroll = 1;
  var curr_section = 0;
  var sections = ["#about","#skills","#grades","#workex" ];
  var section_heights = [$("#about").offset().top, $("#skills").offset().top, $("#grades").offset().top, $("#workex").offset().top]
  function easeInOutQuad(t)
  {
    return t<.5 ? 2*t*t : -1+(4-2*t)*t
  }
  function setdonescroll()
  {
    donescroll = -donescroll
  }
  function get_offset(div_name)
  {
    return $(div_name).offset().top - (0.08 * $( window ).height())
  }
  function scroll_to_section(div_name)
  {
    $.scrollTo(get_offset(div_name) , 800 , {easing : 'swing', onAfter : function(){donescroll = 1}})
  }
  var curr_section = 0;
  var sections = ["#about","#skills","#grades","#workex" ];



  $("#AboutButton").click(function(){
    curr_section = 0
    scroll_to_section("#about");
  });
  $("#SkillsButton").click(function(){
    curr_section = 1
    scroll_to_section("#skills");
  });
  $("#GradesButton").click(function(){
    curr_section = 2
    scroll_to_section("#grades");
  });
  $("#WorkButton").click(function(){
    curr_section = 3
    scroll_to_section("#workex");
  });

  $("body").on("mousewheel", function(event) {
       if (event.deltaY == -1 && curr_section != sections.length - 1 && donescroll == 1){
         donescroll = -1;

         curr_section++
         scroll_to_section(sections[curr_section])
       };
       if(event.deltaY == 1 && curr_section != 0 && donescroll == 1){
         donescroll = -1;
         curr_section--;
         scroll_to_section(sections[curr_section]);
       };

  });


})
