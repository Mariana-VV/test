
// const containerEl = document.querySelector('.js-container');
// containerEl.addEventListener('click', onClick);

// function onClick(event) {
// if(event.target.nodeName !== 'BUTTON'){
//     return;
// }
//   console.log(event.target);  
//   console.log(event.target.textContent);  
//   console.log(event.target.nodeName);  
// }


const tagsEl = document.querySelector('.js-tags');
let selectedTag = null;

tagsEl.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(event) {
//    if(event.target.nodeName !== 'BUTTON'){
//     return;
//    }

//    const activeBtnEl = document.querySelector('.tags__btn--active')

//    if(activeBtnEl){
//     activeBtnEl.classList.remove('tags__btn--active');
//    }

// //    activeBtnEl?.classList.remove('tags__btn--active');

//    const nextActiveBtnEl = event.target;
//    nextActiveBtnEl.classList.add('tags__btn--active');
// selectedTag = nextActiveBtnEl.dataset.value;
// console.log(selectedTag);
// }

const selectedTags = new Set();

function onTagsContainerClick(event) {
       if(event.target.nodeName !== 'BUTTON'){
        return;
       }
      
       const btnEl = event.target;
       const tag = btnEl.dataset.value;
       const isBtnActive = btnEl.classList.contains('.tags__btn--active');
       if(isBtnActive){
        selectedTags.delete(tag);
       }
       else{
        selectedTags.add(tag);
       }

       event.target.classList.toggle('.tags__btn--active');

    //    selectedTags.add(event.target.dataset.value);
       console.log(selectedTags);
}