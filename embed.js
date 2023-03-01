$(document).ready(function(){
  $('#sendUrl').click(function(){
    function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}
var videoId = $('#url').val();
var myId = getId(videoId);

$('#videoSrc').html(myId);

$('#myVideo').html('<iframe src="//www.youtube.com/embed/' + myId + '" frameborder="0" allowfullscreen></iframe>');
  })
});
