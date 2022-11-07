document.addEventListener("DOMContentLoaded", function() {
    // example from: https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // return elements that require animating
    const scrollElements = document.querySelectorAll("[data-animation]");

    // add relevant classes for pre-animation (if browser animations are enabled).
    if (mediaQuery && !mediaQuery.matches)
    {
        scrollElements.forEach((el) => {
            el.classList.add("opacity-0", "transition-opacity", "duration-500");
        });
    }

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("animate-" + element.dataset.animation)
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100))
                displayScrollElement(el);
        })
    }

    let throttleTimer = false;

    const throttle = (callback, time) => {
        if (throttleTimer) return;
        
        throttleTimer = true;
        
        setTimeout(() => {
            callback();
            throttleTimer = false;
        }, time);
    }

    window.addEventListener('scroll', () => {
        if (mediaQuery && !mediaQuery.matches) {
            throttle(handleScrollAnimation, 300);
        }
    });
});