const menuIcon = document.getElementById('manu-icon');
        const menu = document.getElementById('manu');
    
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('active');
        });

        document.addEventListener("DOMContentLoaded", () => {
            const sliderImages = document.querySelector('.slider__images');
            const slides = document.querySelectorAll('.slider__images img');
            const totalSlides = slides.length;
            let currentIndex = 0;
    
            const autoSlide = () => {
                currentIndex = (currentIndex + 1) % totalSlides; 
                sliderImages.scrollTo({
                    left: sliderImages.offsetWidth * currentIndex,
                    behavior: 'smooth'
                });
            };
    
            setInterval(autoSlide, 3000);
        });