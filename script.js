// serhc

const media = window.matchMedia('(max-width: 416px)')
const input = document.querySelector('.menu__input')
const placeholder = document.querySelector('.menu__placeholder')

let inp = document.getElementsByTagName('input');
for (let i = 0; i < inp.length; i++) {
    inp[i].setAttribute('autocomplete', 'off');
}

input.addEventListener('focus', function (event) {
    placeholder.classList.add('placeholder_active')
})

input.addEventListener('blur', function (event) {
    let value = this.value
    if (!value) placeholder.classList.remove('placeholder_active')
})


const inputPhone = document.querySelector('.menu__input_phone')
const serchText = document.querySelector('.serch__text')
const placeholderPhone = document.querySelector('.menu__placeholder_phone')
inputPhone.addEventListener('focus', function (event) {
    placeholderPhone.classList.add('placeholder_active')
})

window.onload = function () {
    inputPhone.onkeyup = keyUp
}
function keyUp(e) {
    let value = this.value
    value.toLowerCase().includes('рад') ? serchText.classList.add('text_active') : serchText.classList.remove('text_active')
}
inputPhone.addEventListener('blur', function (event) {
    let value = this.value
    if (!value) placeholderPhone.classList.remove('placeholder_active')
})
// arrow

const arrow = document.querySelector('.arrow')
const list = document.querySelector('.list')
const listPhone = document.querySelector('.filters_2__items')
const filtres = document.querySelector('.section__filters')
const burger = document.querySelector('.burger')
const serch = document.querySelector('.serch')
const wrapper = document.querySelector('.wrapper')

document.addEventListener('click', event => {
    if (event.target.closest('.sorting__sort')) {
        arrow.classList.toggle('img_active')
        list.classList.toggle('sort_active')
    }
    if (event.target.closest('.filters_2') || event.target.closest('.filters_2__item')) {
        arrow.classList.toggle('img_active')
        listPhone.classList.toggle('filters_2_active')
    }
    // arrow of filtres
    if (event.target.closest('.arr')) {
        event.target.classList.toggle('img_active')
        event.target.parentNode.nextElementSibling.classList.toggle('check__active')
    } else if (event.target.closest('.check__title')) {
        event.target.lastElementChild.classList.toggle('img_active')
        event.target.nextElementSibling.classList.toggle('check__active')
    }
    else if (event.target.closest('.title_1')) {
        event.target.lastElementChild.classList.toggle('img_active')
        event.target.nextElementSibling.classList.toggle('check__active')
    }
    if (event.target.closest('.check__lab')) {
        event.target.previousElementSibling.checked = false
    }
    // open filtres
    if (event.target.closest('.filters_1')) {
        filtres.classList.add('filters_active')
        wrapper.style.overflow = 'hidden'
    }
    if (event.target.closest('.filters__button')) {
        filtres.classList.remove('filters_active')
        wrapper.style.overflow = 'visible'
    }
    // open burger
    if (event.target.closest('.menu__burger') && media.matches) {
        burger.classList.add('burger_active')
        wrapper.style.overflow = 'hidden'
    }
    if (event.target.closest('.burger__cross') && media.matches) {
        burger.classList.remove('burger_active')
        wrapper.style.overflow = 'visible'
    }
    // open serch
    if (event.target.closest('.menu__input') && media.matches) {
        serch.classList.add('serch_active')
        wrapper.style.overflow = 'hidden'
    }
    if (event.target.closest('.serch__cross') && media.matches) {
        serch.classList.remove('serch_active')
        wrapper.style.overflow = 'visible'
    }
})

// slider

document.documentElement.classList.add('js');

addEventListener('input', e => {
    let _t = e.target;

    _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value)
}, false);