$(document).ready(function() {
    $('#zbadaj-dzien').click(function(e) {
		if ($(e.target).parents("#zbadaj-dzien").length === 0) {
			$(this).toggle();
		}
    });
	$('.today').click(function(e) {
        $('#zbadaj-dzien').toggle();
    });
});

var wrapper = document.getElementByClassName('myform');
var content = document.getElementByClassName('panel');
var cw = content.clientWidth;
content.innerHTML="x"
wrapper.style.width = cw + 'px';