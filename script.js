var video = document.getElementById('video');
var content = document.getElementById('content');

// Quando o vídeo terminar, mostra o conteúdo do site
video.addEventListener('ended', function() {
    document.getElementById('video-container').style.display = 'none';
    content.style.display = 'block';
});


