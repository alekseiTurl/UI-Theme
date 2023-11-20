# UI-Theme

*[Посмотреть демо ](https://alekseiturl.github.io/UI-Theme/)*

Функция смены цветовой темы. Инициализирует тему на основе значения, сохраненного в ***localStorage***, или устанавливает тему по умолчанию `'light-theme'`. Она проверяет, есть ли значение `'theme'` в ***localStorage***.
 * Если значение `'theme'` найдено в ***localStorage***, оно устанавливается вызовом функции `setTheme` со значением из хранилища.
 * Если значение `'theme'` не найдено в ***localStorage***, оно устанавливается на тему по умолчанию `'light-theme'` вызовом функции `setTheme`

```js
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  if(localStorage.getItem('theme') !== null) {
    setTheme(`${localStorage.getItem('theme')}`);
  } else {
    setTheme('light-theme')
  }
```
## Переключение темы
   
   * Эта функция вызывается при нажатии на элемент `'switch-theme-btn'`
   * Она проверяет текущую тему, хранящуюся в ***localStorage***.
   * Если значение `'dark-theme'` , она переключает тему&nbsp;на&nbsp;`'light-theme'` , вызывая функцию `setTheme` с параметром `'light-theme'`
   * Если значение `'light-theme'` , она переключает тему на `'dark-theme'` , вызывая функцию `setTheme` с параметром `'dark-theme'`

```js
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
      setTheme('light-theme');
    } else {
      setTheme('dark-theme');
    }
  }

  document.querySelector('.switch-theme-btn').addEventListener('click', (e) => {
    toggleTheme();
  })
```

## HTML - разметка 

```html
<div class="switch-theme">
    <button type="button" class="switch-theme-btn">
        <span class="switch-theme-btn__bullet"></span>
    </button>
</div>
```

## Базовые стили для кнопки

```css
.switch-theme-btn {
    position: relative;
    width: 50px;
    height: 30px;
    border-radius: 20px;
    border: 2px solid var(--btn-switch-color);
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;
}
.switch-theme-btn__bullet {
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    transform: translateY(-50%) translateX(var(--btn-switch-position));
    background-color: var(--btn-switch-color);
    transition: all 0.3s;
}
```

## Опредление CSS переменных
 
  Селектор `:root` используется для определения корневого элемента документа, который обычно является элементом `<html>`. Внутри блока `:root` определяются пользовательские CSS-переменные для различных цветов с использованием синтаксиса `--имя-переменной: значение;`.
 
  Селектор `html.dark-theme` используется для определения CSS-переменных, специфичных для темной темы. Он устанавливает значения пользовательских CSS-переменных для темной темы с использованием синтаксиса `var(--имя-переменной)`.

 Селектор `html.light-theme` используется для определения CSS-переменных, специфичных для светлой темы. Он устанавливает значения пользовательских CSS-переменных для светлой темы с использованием синтаксиса `var(--имя-переменной)`

**Примерные значения:**

```css
:root {
    --color-black: #000;
    --color-white: #fff;
    --color-grey: #808080;
    --color-green: #0f0;
}
html.dark-theme {
    --main-bg-color: var(--color-black);
    --title-color: var(--color-green);
    --text-color: var(--color-white);
    --btn-switch-color: var(--color-white);
    --btn-switch-position: -100%;

}
html.light-theme {
    --main-bg-color: var(--color-grey);
    --title-color: var(--color-black);
    --text-color: var(--color-black);
    --btn-switch-color: var(--color-black);
    --btn-switch-position: 0;
}
```
*Так-же можно использовать SCSS*
