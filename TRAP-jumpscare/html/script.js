let videoUrl = 'https://www.youtube.com/embed/EASzLB3RNPA?autoplay=1&rel=0'; // Your provided YouTube video URL

window.addEventListener('message', function(event) {
    if (event.data.type === 'showJumpscare') {
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById('video').src = videoUrl;
        
        // Close the overlay when the video ends
        setTimeout(function() {
            document.getElementById('overlay').classList.add('hidden');
            document.getElementById('video').src = ''; // Stop the video
        }, 10000); // Duration of the video
    }
});
