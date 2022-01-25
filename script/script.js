// document.querySelector('.header-menu__logo').style.border = '1px solid red';
/*https://www.npmjs.com/package/seamless-scroll-polyfill*/

import { elementScrollIntoView } from "seamless-scroll-polyfill";

import { polyfill } from "seamless-scroll-polyfill";

polyfill();
const links = document.querySelectorAll('.header-menu__item a');
const characteristic = document.querySelector('.card-details__link-characteristics');

const newArray = [...links, characteristic];
newArray.forEach((element) => {
    console.log(element)
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const id = element.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        console.log(section)

        if (section) {
            elementScrollIntoView(
                section, {
                behavior: 'smooth',
                block: 'start'
            }
            )
        } else {
            elementScrollIntoView(document.querySelector('#characteristics'), {
                behavior: 'smooth',
                block: 'start',
                inline: 'center',
            })
        }
    })
})