'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const circleGreen = document.querySelector('.circle-green'),
          circleYellow = document.querySelector('.circle-yellow'),
          cardItems = document.querySelectorAll('.test__card-item');

    circleGreen.classList.add('circle-green--active');
    circleYellow.classList.add('circle-yellow--active');

    /* При добавлении элементов списка в список html '+' и класс на который подвязан псевдоэлемент будет добавляться на предпоследний элемент */
    cardItems.forEach((item, i) => {
        if(i === (cardItems.length - 2)) {
            item.classList.add('test__card-item--plus');
            const plus = document.createElement('a');
            plus.textContent = "+"
            plus.classList.add('test__card-item-plus');
            item.append(plus); 
        }
    });
});