$('li').after('<button class="moveUp">Up</button><button class="moveDown">Down</button>')
$('#one').hide().delay(500).fadeIn(100)
$('#two').hide().delay(500).fadeIn(200)
$('#three').hide().delay(500).fadeIn(300)
$('#four').hide().delay(500).fadeIn(400)
$('#five').hide().delay(500).fadeIn(500)
$('#six').hide().delay(500).fadeIn(600)
$('#seven').hide().delay(500).fadeIn(700)
$('#eight').hide().delay(500).fadeIn(800)
$('#nine').hide().delay(500).fadeIn(900)
$('#ten').hide().delay(500).fadeIn(1000)

$('.moveUp').hover(function(){
  $(this).css('background-color', 'white')
  $(this).css('color', 'black')
}, function(){
  $(this).css('background-color', 'black')
  $(this).css('color', 'white')
})

$('.moveDown').hover(function(){
  $(this).css('background-color', 'white')
  $(this).css('color', 'black')
}, function(){
  $(this).css('background-color', 'black')
  $(this).css('color', 'white')
})
var $ul = $('ul')

$('.moveUp').click(function(){
  var $li = $(this).parent()
  if ($li.is('first-child')){
    $ul.append($li)
  }
  else {
    $li.insertBefore($li.prev())
  }

})

$('.moveDown').click(function(){
  var $li = $(this).parent()
  if ($li.is('last-child')){
    $ul.prepend($li)
  }
  else {
    $li.insertAfter($li.next())
  }

})
