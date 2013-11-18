function render(captionText) {
	var $template = $('.template');
	var $caption = $('.text-captioning');

	$caption.empty();

	var idx;

	for(idx = 0; idx < captionText.length; ++idx){
		var $clone = $template.clone();
		var capText = captionText[idx];
		$clone.find('.top').html(capText.topText);
		$clone.find('.top-line').html(capText.text[0]);
		$clone.find('.bottom-line').html(capText.text[1]);
	}
	

	$clone.removeClass('template');
	$caption.append($clone);
}

$(function(){
	var captionText = Caption.captionText;
	render(captionText);
});