document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle')
    // console.log('header-area-toggle =====>',toggleBtn);

    const mobileMenuItems = document.querySelector('.mobile-menu-items') 
    // console.log('mobile-menu-items====>', mobileMenuItems );
    
    toggleBtn.addEventListener('click', function() {
        // console.log('saumya');
        
        mobileMenuItems.classList.toggle('active-btn')
    })

})

// Navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header')
    // console.log('header ===>',header);
    // console.log('window.scrollY', window.scrollY,window.scrollY > 0);
    
    if(window.scrollY > 0) {

        header.classList.add('header-scroll');
        // console.log('sonaa');
        
    }
     else {
        header.classList.remove('header-scroll');
    }
})
