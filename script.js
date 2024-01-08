document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".multiple-text", {
        strings: ["editor", "student", "aviation geek"],
        typeSpeed: 75,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryLink = document.querySelector('a[href="#gallery"]');
    galleryLink.addEventListener('click', function(event) {
      event.preventDefault();
      const gallerySection = document.getElementById('gallery');
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  

window.addEventListener('scroll', function () {
    console.log('Scroll event detected!');

    const imagesRow1 = document.getElementById('images-row-1');
    const imagesRow2 = document.getElementById('images-row-2');

    if (imagesRow1 && imagesRow2) {
        const rect1 = imagesRow1.getBoundingClientRect();
        const rect2 = imagesRow2.getBoundingClientRect();

        if (rect1.top < window.innerHeight / 2 && rect1.bottom > window.innerHeight / 2) {
            const initialGap = imagesRow1.dataset.gapInitial;
            imagesRow1.style.gap = `${initialGap}px`;
        } else {
            const finalGap = imagesRow1.dataset.gapFinal;
            imagesRow1.style.gap = `${finalGap}px`;
        }

        if (rect2.top < window.innerHeight / 2 && rect2.bottom > window.innerHeight / 2) {
            const initialGap = imagesRow2.dataset.gapInitial;
            imagesRow2.style.gap = `${initialGap}px`;
        } else {
            const finalGap = imagesRow2.dataset.gapFinal;
            imagesRow2.style.gap = `${finalGap}px`;
        }
    } else {
        console.log('Element not found.');
    }
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.navbar a');

    // Change font color when scrolled
    if (window.scrollY > 700) {
        header.style.backgroundColor = 'black'; // Change header background color
        logo.style.color = '#fff'; // Change logo color
        navLinks.forEach(link => {
            link.style.color = '#fff'; // Change nav links color
        });
    } else {
        header.style.backgroundColor = 'transparent'; // Reset header background color
        logo.style.color = '#000'; // Reset logo color
        navLinks.forEach(link => {
            link.style.color = '#000'; // Reset nav links color
        });
    }
});








