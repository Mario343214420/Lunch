$i = 0;
$('#start').click(function(){
  $i++;
  if($i >=6 ){
    $('#start').hide();
    $('#stop').show();
  }
})
$('#stop').click(function(){
  alert('这不吃，那不吃，吃屁吧！')
  $(this).hide();
})
