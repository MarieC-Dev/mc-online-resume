document.addEventListener('DOMContentLoaded', () => {

    /* ===================== */
    /*    FONCTION SCROLL    */
    /* ===================== */

    document.querySelector("#scroll").addEventListener("click", scroll)
    function scroll() {
        scrollToY(document.querySelector("#about").offsetTop-100,1200, 'easeInOutQuint')
    };

    document.querySelector("#about-nav").addEventListener("click", function() {
        scrollToY(document.querySelector("#about").offsetTop-100,1200, 'easeInOutQuint')
    });

    document.querySelector("#formations-nav").addEventListener("click", function() {
        scrollToY(document.querySelector("#formations").offsetTop-100,1200, 'easeInOutQuint')
    });

    document.querySelector("#experiences-nav").addEventListener("click", function() {
        scrollToY(document.querySelector("#experiences").offsetTop-100,1200, 'easeInOutQuint')
    });

    document.querySelector("#competences-nav").addEventListener("click", function() {
        scrollToY(document.querySelector("#competences").offsetTop-100,1200, 'easeInOutQuint')
    });

    document.querySelector("#backToTopFooter").addEventListener("click", function() {
        scrollToY(document.querySelector("#backToTop").offsetTop-100,1200, 'easeInOutQuint')
    });
    


    window.requestAnimFrame = (function() {
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                function( callback ){
                window.setTimeout(callback, 1000 / 60);
                };
    })();
  
    function scrollToY(scrollTargetY, speed, easing) {
        var scrollY = window.scrollY || document.documentElement.scrollTop,
            scrollTargetY = scrollTargetY  || 0,
            speed = speed || 20, 
            easing = easing || 'easeOutSine',
            currentTime = 0;
  
        var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8)); 
  
        var easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
            return 0.5 * (Math.pow((pos - 2), 5) + 2);
        }
    };
  
    // Ajouter une boucle d'animation
    function tick() {
        currentTime += 1 / 60;
  
        var p = currentTime / time;
        var t = easingEquations[easing](p);
  
        if (p < 1) {
            requestAnimFrame(tick);
  
            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            //console.log('scroll done');
            window.scrollTo(0, scrollTargetY);
        }
    };
        // Appelez-le une fois pour commencer
        tick();
    };
    //

    /* ================= */
    /*    MENU BURGER    */
    /* ================= */

    const burger = document.querySelector('.burger');
    const menuNav = document.querySelector('.menu');
    const aboutMenu = document.querySelector('#about-menu');
    const formationsMenu = document.querySelector('#formations-menu');
    const experiencesMenu = document.querySelector('#experiences-menu');
    const competencesMenu = document.querySelector('#competences-menu');

    // FONCTION BURGER
    burger.addEventListener('click', function burgerOpen() {
        console.log('click');

        menuNav.classList.toggle('open');
        burger.classList.toggle('active');

        aboutMenu.addEventListener('click', burgerOpen, false);
        formationsMenu.addEventListener('click', burgerOpen, false);
        experiencesMenu.addEventListener('click', burgerOpen, false);
        competencesMenu.addEventListener('click', burgerOpen, false);
    });

    // FONCTION EXPERIENCES (mobile)
    const internship = document.querySelectorAll('.internship');

    // BOUCLE et fonction
    for (let i = 0; i < internship.length; i++) {

        const item = internship[i];

        // Fonction
        item.addEventListener("click", () => {

            if (item.classList.contains('openMenu')) {
                item.classList.remove('openMenu')
            } else {
                item.classList.add('openMenu')
            }

        });

    }

});
