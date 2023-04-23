const worms = document.querySelectorAll('.header__worm');
console.log(1234);
if(worms.length > 0) {
    worms.forEach((worm) => {
        worm.addEventListener('mouseover', (event) => {
            worm.classList.add('header__worm_hover');
        })

        worm.addEventListener('mouseout', (event) => {
            worm.classList.remove('header__worm_hover');
        })

        worm.addEventListener('mousedown', (event) => {
            worm.classList.add('header__worm_mousedown');
        })
    })

    document.addEventListener('mouseup', (event) => {
        worms.forEach((worm) => {
            worm.classList.remove('header__worm_mousedown');
        })
    })
}

const videoOpenButton = document.querySelector('.header__open-video-wrapper');
const videoCloseButton = document.querySelector('.header__video-wrapper svg');
const headerIndo = document.querySelectorAll('.header__container, .header__worm, .header__bobi');

if(videoOpenButton) {
    videoOpenButton.addEventListener('click', (event) => {
        headerIndo.forEach((elem) => {
            elem.style.transition = '.3s';
            elem.classList.add('hidden');
            videoCloseButton.classList.add('visible');
        })
    })
    videoCloseButton.addEventListener('click', (event) => {
        headerIndo.forEach((elem) => {
            elem.classList.remove('hidden');
            videoCloseButton.classList.remove('visible');
        })
    })
}

const languageButton = document.querySelector('.header__language');
const languageButtonElems = languageButton.querySelectorAll('.header__language-elem');

if(languageButton) {
    languageButton.addEventListener('click', (event) => {
        languageButton.classList.add('header__language_active')
        languageButtonElems.forEach((elem) => {
            elem.classList.add('header__language-elem_active')
        })
    })

    document.addEventListener('click', (event) => {
        if(!event.target.classList.contains('header__language') && !event.target.classList.contains('header__language-elem')) {
            languageButton.classList.remove('header__language_active')
            languageButtonElems.forEach((elem, index) => {
                if(index == 0) {
                    return;
                }
                elem.classList.remove('header__language-elem_active')
            })
        }
    })
}