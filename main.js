// ===== ++++ owlCarousel
$(".owl-hero").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});
$(".owl-hero .owl-next").html('<i class="bi bi-arrow-right"></i>');
$(".owl-hero .owl-prev").html('<i class="bi bi-arrow-left"></i>');

//*counter*//
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;

                obj.textContent = current;

                if (current == end) {
                    clearInterval(timer);
                }
            }, step * 2);
    }
    counter("counter1", 48, 100, 1200);
    counter("counter2", 26, 120, 1200);
    counter("counter3", 47, 100, 1200);
    counter("counter4", 579, 700, 1200);
});

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 500,
        disableOnInteraction: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});

