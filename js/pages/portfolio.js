// Функционал фильтрации и модальных окон для портфолио
document.addEventListener('DOMContentLoaded', function() {
    // Фильтрация проектов
    const filterButtons = document.querySelectorAll('.portfolio__filter button');
    const portfolioItems = document.querySelectorAll('.portfolio__item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Обработка видео
    const videoItems = document.querySelectorAll('[data-video]');
    const videoPlayer = document.querySelector('.video-player');
    const videoFrame = document.getElementById('drive-player');
    const videoClose = document.querySelector('.video-player__close');

    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            videoFrame.src = `https://drive.google.com/file/d/${videoId}/preview`;
            videoPlayer.classList.add('active');
        });
    });

    videoClose.addEventListener('click', function() {
        videoPlayer.classList.remove('active');
        videoFrame.src = '';
    });

    // Обработка изображений
    const imageItems = document.querySelectorAll('.portfolio__image:not([data-video])');
    const imageModal = document.querySelector('.image-modal');
    const modalImage = document.getElementById('modal-image');
    const imageClose = document.querySelector('.image-modal__close');

    imageItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            imageModal.classList.add('active');
        });
    });

    imageClose.addEventListener('click', function() {
        imageModal.classList.remove('active');
    });
});