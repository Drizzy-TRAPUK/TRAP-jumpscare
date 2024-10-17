let videoUrl = 'https://www.youtube.com/embed/EASzLB3RNPA?autoplay=1&rel=0';

window.addEventListener('message', function(event) {
    if (event.data.type === 'showJumpscare') {
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById('video').src = videoUrl;
    } else if (event.data.type === 'hideJumpscare') {
        document.getElementById('overlay').classList.add('hidden');
        document.getElementById('video').src = ''; 
    }
});
--IGNORE THIS ONE USE THE ONE IN THE HTML
