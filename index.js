const menuIcon = document.getElementById('manu-icon');
        const menu = document.getElementById('manu');
    
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('active');
        });