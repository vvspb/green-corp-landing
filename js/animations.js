const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let element = document.querySelector('.features__clients-count')
function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + "+";
        } else {
            element.innerText = i;
          }  
      i= i +50;
    }
    function call (){
      increaseNumberAnimationStep(i, element, endNumber)
    }
setTimeout (call, 
  INCREASE_NUMBER_ANIMATION_SPEED);    
};

function initIncreaseNumberAnimation() {
  increaseNumberAnimationStep(0, element, 5000)
}
initIncreaseNumberAnimation();
// удаляем initIncreaseNumberAnimation();
let animationInited = false;


// функция анимирующая хэдер при скролле (бесцветный -> белый). 
// Задаем условие - Если позиция скролла больше 0, добавьте класс header__scrolled, иначе — удалите
// а так же функция запускает анимацию счетчика счастливых клиентов при сроле нужной области
function updateScroll() {
  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('header__scrolled');
  } else {
    document.querySelector('header').classList.remove('header__scrolled');
  }
     // Запуск анимации увеличения числа, при попадании на нужную часть слайда:
    //    1.Получаем позицию элемента с цифрами
    //    Свойство offsetTop возвращает расстояние от верхней части страницы до элемента. 
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    //    2.Получаем аналогичное значение для позиции скролла.
  let windowBottomPosition = window.scrollY + window.innerHeight;
    /*    3. Создаем if - Если текущая нижняя позиция окна (windowBottomPosition) 
             больше или равна позиции элемента с цифрами (countElementPosition), 
             запустите анимацию вызовом функции initIncreaseNumberAnimation.
    */
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}
// обработчик события - начинае скролить и запускается функция updateScroll
window.addEventListener('scroll', updateScroll);

// при выборе нового варианта должно появляться дополнительное текстовое поле для ввода. 

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  if (event.target.value === 'other') {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form__group');
    formContainer.classList.add('form__other-input');
 
    const input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";
    input.type = "text";
 
    formContainer.appendChild(input);
    document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit')); 
  }
  const otherInput = document.querySelector('.form__other-input');
  if (event.target.value !== 'other' && otherInput) {
    
    document.querySelector('#form form').removeChild(otherInput)
    // ...
  }
});

// делаем плавное перемещение по сттанице после нажатия на кнопки "контакты", "узнать подробнее"
function addSmoothScroll(anchor) {
  anchor.addEventListener('click', onLinkClick);
}
function onLinkClick(event) {
  event.preventDefault();
  document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});

addSmoothScroll(document.querySelector('.more-button'));
