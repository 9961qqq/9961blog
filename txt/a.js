document.addEventListener('DOMContentLoaded', function() {
    var aboutSection = document.getElementById('about');
    var aboutLink = document.querySelector('a[href="#about"]');
    var postSection = document.getElementById('blog-posts');
    var postLink = document.querySelector('a[href="#blog-posts"]');

    aboutSection.style.display = 'none';
    postSection.style.display = 'none';

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.style.display = aboutSection.style.display === 'none' ? 'block' : 'none';
    });

    postLink.addEventListener('click', function(event) {
        event.preventDefault();
        postSection.style.display = postSection.style.display === 'none' ? 'block' : 'none';
    });
});
