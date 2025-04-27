$(document).ready(function(){
  function showWindow() {
    $('#pop-up').show(3000);
    //stop scroll
    $('html body').css('overflow', 'hidden');
    //setTimeout(hiddenWindow, 5000);
    $('#pop-up').css('left', '50%');
  }
  //showWindow()

  function hiddenWindow() {
    $('#pop-up').hide();
    //stop scroll
    $('html body').css('overflow', 'hidden');
  }
  hiddenWindow()
  // now call function automatically after some time:
  setTimeout(showWindow, 3000);

  //close btnClose
  $("#closebtn").click(function(){
    $('#pop-up').hide();
  });
})
