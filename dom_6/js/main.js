import products from './products.js';

console.log(document.querySelector('.site-nav'));
console.log(document.querySelectorAll('.site-nav-item'));

const siteNavEl = document.querySelector(`.site-nav`);
const siteNavEl1 = document.querySelector('ul');
console.log(siteNavEl);
console.log(siteNavEl1);

const siteNavItem =  document.querySelector('.site-nav-item');
const siteNavItem1 =  document.querySelector('li');
console.log(siteNavItem);
console.log(siteNavItem1);

const siteNavLinks = document.querySelectorAll('.site-nav-link');
console.log(siteNavLinks);

const siteNavLinks1 = siteNavEl.querySelectorAll('.site-nav-link');
console.log(siteNavLinks1);

const magicBtnEl1 = document.querySelector('.magicBtn_1');
magicBtnEl1.addEventListener('click', () => {
    const imageEl = document.querySelector('img');
    console.log('imageEl', imageEl);
    console.log(imageEl.src );
    imageEl.src = './image/cat_watch.jpg';
    imageEl.alt = "This is new cat";
})

const magicBtnEl2 = document.querySelector('.magicBtn_2');
magicBtnEl2.addEventListener('click', () => {
    const imageEl = document.querySelector('img');
    console.log('imageEl', imageEl);
    console.log(imageEl.src );
    imageEl.src = './image/scot.jpg';
    imageEl.alt = "This is new cat";
})

const titleEl = document.querySelector('.title');
console.log(titleEl);
 console.log(titleEl.textContent); 


 const imgEl = document.querySelector('img');
 console.log(imgEl.getAttribute('src'));
console.log(imgEl.hasAttribute('src'));


/*-------------Add element to end of document-------------------------------- */ 
const titleElem = document.createElement('h1');
titleElem.classList.add('title');
titleElem.textContent = "This is a Title !";
console.log(titleElem);
document.body.appendChild(titleElem);


/*-------------Add element to element-------------------------------- */ 
const navItemEl = document.createElement('li')
navItemEl.classList.add('site-nav-item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav-link');
navLinkEl.textContent ='Личный кабинет';
navLinkEl.href = '/profile';

console.log(navItemEl);
console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
navEl.appendChild(navItemEl);

console.log(navEl);


navEl.insertBefore(navItemEl, null);//добавит последним
console.log(navEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);
console.log(navEl);
navEl.insertBefore(navItemEl, navEl.lastElementChild);
console.log(navEl);
navEl.insertBefore(navItemEl, navEl.children[2])
console.log(navEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);
console.log(navEl);


/*-------------HERO------------------------------- */ 
const imageElem = document.createElement('img');
imageElem.src='./image/natur.jpg';
imageElem.width=500;
const heroEl = document.querySelector('.hero');
heroEl.appendChild(titleElem);
heroEl.appendChild(imageElem);

heroEl.append(titleEl, imageElem);

/*-------------HERO------------------------------- */ 


/*-------------PICKER------------------------------- */ 
const colorPickerOptions = [
    {label:'red',color:'#F44336'},
    {label:'green',color:'4CAF50'},
    {label:'blue',color:'#2196F3'},
    {label:'gray',color:'#607D8B'},
    {label:'pink',color:'#E91E63'},
    {label:'indigo',color:'#3F51B5'},
]

const colorPickerContainerEl = document.querySelector('.js-color-picker');

const elements = colorPickerOptions.map(option=>{
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker__option')
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color

    return buttonEl;
});

console.log(elements);

colorPickerContainerEl.append(...elements);

const makeColorPickerOptions = (options)=>{
    return    options. map(option=>{
        const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.classList.add('color-picker__option')
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor = option.color
    
        return buttonEl;
    });
}

const elementes = makeColorPickerOptions(colorPickerOptions)

colorPickerContainerEl.append(elementes);
/*-------------PICKER------------------------------- */ 


/*-------------PRODUCT------------------------------- */ 
const product = {
    name:'Product',
    description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit  Vitae accusamus beatae est! Ab ducimus, quis provident   iusto nemo eveniet, corporis vitae cupiditate eligendi  natus quo, laboriosam eum libero nihil est?',

    price:2000,
    available:true,
    onSale:true,
}



console.log(products);

const makeProductCard = product =>{
    const productEl = document.createElement('article');
    productEl.classList.add('product');
    
    const titleElement = document.createElement('h2');
    titleElement.classList.add('product-title');
    titleElement.textContent = product.name;
    
    const descriptionEl = document.createElement('p')
    descriptionEl.classList.add('product_desc');
    descriptionEl.textContent = product.description;
    
    const priceEl = document.createElement('p')
    priceEl.classList.add('product_price');
    priceEl.textContent = `Price: ${product.price}`;
    
    productEl.append(titleElement, descriptionEl, priceEl)

    return productEl;
}

console.log(makeProductCard(products[1]));

const elemens = products.map(makeProductCard);
const jsProductEl = document.querySelector('.js-products');
jsProductEl.append(...elemens);
/*-------------PRODUCT------------------------------- */ 





/*-------------STRING PARSE------------------------------- */ 
const newTitleEl = document.querySelector('.new-title')
console.log(newTitleEl.textContent);
console.log(newTitleEl.innerHTML);
newTitleEl.innerHTML = "qwesyaw";
newTitleEl.innerHTML += '<a href="">This is a link</a>';//not alloed bad for brouser
// navItemEl.innerHTML = '';

newTitleEl.insertAdjacentHTML('beforebegin', '<a href="">This is a link</a>');
newTitleEl.insertAdjacentHTML('afterend', '<a href="">This is a link</a>');
newTitleEl.insertAdjacentHTML('afterbegin', '<a href="">This is a link</a>');
newTitleEl.insertAdjacentHTML('afterend', '<a href="">This is a link</a>');

/*-------------STRING PARSE------------------------------- */ 




/*-------------Event Listener------------------------------- */ 
const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener("click",()=>{
//   console.log("Click");  
// })


function handleTargetButton(){
console.log("Click");  
}

function targetButtonClickHandler() {
    console.log("Click");    
}

function onTargetButtonClick() {
    console.log("Click");  
}

// targetBtn.addEventListener('click', handleTargetButton);



addListenerBtn.addEventListener('click',() =>{
    console.log('Call EventListener on target btn');
targetBtn.addEventListener('click',() =>{
console.log('Click on target btn');
})
})

// removeEventListener.addEventListener('click',() =>{
//     console.log('Back EventListener from target btn'); 
//     targetBtn.removeEventListener('click',)
// })

// 00:20



// const form = document.querySelector('.js-form');
// form.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event) {
//   event.preventDefault();
  
// console.log('This is a form submit');
// }

// const formData = new formData(event, currentTarget);

// console.log(formData);

// formData.forEach((value, name) =>{
// console.log('onFornSubmit ->name', name);
// console.log('onFornSubmit ->value', value);
// })


const input = document.querySelector('js-input');
const nameLabel = document.querySelector('.js-button > span');
const license = document.querySelector('.js-license');
const btn = document.querySelector('.js-button');

const refs = {
    input : document.querySelector('.js-input'),
 nameLabel : document.querySelector('.js-button > span'),
 licenseCheckbox : document.querySelector('.js-license'),
 btn : document.querySelector('.js-button'),
}

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
refs.input.addEventListener('input',onInputChange)

function onInputFocus() {
    console.log('Input got focus - focus event');
}

function onInputBlur() {
    console.log('Input lost focus - brur event');
}

function onInputChange(event) {
   console.log(event.currentTarget.value); 
   refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
   console.log(event.currentTarget.checked); 
   refs.btn.disabled = !event.currentTarget.checked;
}

refs.input.addEventListener('input',onInputChange)
refs.licenseCheckbox.addEventListener('change',onLicenseChange)
/*-------------Event Listener------------------------------- */ 

const newRefs = {
    output:document.querySelector('.js-output'),
    clearBtn:document.querySelector('.js-clear'),
}

function onKeypress(event) {
//   console.log(event);  
 console.log('event.key: ', event.key); 
 console.log('event.key: ', event.code); 

//  refs.output.textContent = event.key;
}

function  onClearOutput() {
    refs.output.textContent = '';
}

// window.addEventListener('keydown', onKeypress);
window.addEventListener('keydown', onKeypress);
newRefs.clearBtn.addEventListener('click', onClearOutput);




// ---------------------Mouse--------------------------
const boxRef = document.querySelector('js-box');

// boxRef.addEventListener('mouseenter', onMouseEnter);
// boxRef.addEventListener('mouseleave', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
   const box = event.currentTarget;
   box.classList.add('box--active'); 
}

function onMouseLeave(event) {
    const box = event.currentTarget;
    box.classList.remove('box--active');    
}

function onMouseMove(event) {
  console.log(event);  
}
// ---------------------Mouse--------------------------




// ---------------------FORM--------------------------
const referens = {
    openModalBtn:document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action ="close-modal"]'),
    backdrop:document.querySelector('.js-backdrop'),
};

referens.openModalBtn.addEventListener('click', onOpenModel);
referens.closeModalBtn.addEventListener('click', onCloseModel);
referens.backdrop.addEventListener('click', onBackDrop)

function onOpenModel() {
  console.log(document.body.classList.add('show-modal'));  
}

function onCloseModel() {
  console.log(document.body.classList.remove('show-modal'));  
}

function onBackDrop(event) {
    console.log(event.currentTarget);
    console.log(event.target);

    if(event.currentTarget === event.target){
        console.log('Click in backdrop');
        onCloseModel();
    }
   
}


window.addEventListener('keypress', onEscKeyPress);

function onEscKeyPress(event) {
   console.log(event); 
}
// ---------------------FORM--------------------------

