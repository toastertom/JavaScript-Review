$('#change-text').on('click',function(){
  $('#rock').html('Bam! Magic!')
})

window.setTimeout(function(){
$('#rock').css('color', 'red');
}, 1000);
