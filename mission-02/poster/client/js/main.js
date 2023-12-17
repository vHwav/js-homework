
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/


const nav = document.querySelector('.nav');
const visualImg = document.querySelector('.visual img')
const body = document.querySelector('body')
const nickName = document.querySelector('.nickName')

const audio = document.querySelector('audio');


//1. 클릭 이벤트 활성화
function handleClick(e){
    let li = e.target.closest('li');
    let index = li.dataset.index;
    let ul = document.querySelector('nav>ul')
    
    if(!li) return;
    //2. nav 클릭시 배경 색상 변경
    body.style.background = `linear-gradient(to bottom, ${data[index-1].color})`
    //3. 이미지 변경
    const list = Array.from(ul.children);
    list.forEach((data)=>{data.classList.remove('is-active')});
    
    visualImg.src = `./assets/${data[index-1].name}.jpeg`;
    visualImg.alt = data[index-1].alt;
    
    //4. 텍스트 변경
    nickName.textContent = data[index-1].name

    //5. 목소리 재생
    audio.src = `./assets/audio/${data[index-1].audio}.m4a`
    audio.load();
    audio.play()
    

    li.classList.add('is-active');


}



nav.addEventListener('click', handleClick)


// const clickEventLi = function click(e){
//     let li = e.target.closest('li');
//     let index = li.dataset.index;
//     let ul = document.querySelector('nav>ul')
    
//     if(!li) return;
// }






// //5. 함수 분리

// function setBgColor(e){
//     clickEventLi;
//     body.style.background = `linear-gradient(to bottom, ${data[index-1].color})`
// }

// function setImage(){
//     const list = Array.from(ul.children);
//     list.forEach((data)=>{data.classList.remove('is-active')});

//     visualImg.src = `./assets/${data[index-1].name}.jpeg`;
//     visualImg.alt = data[index-1].alt;

//     li.classList.add('is-active');
// }

// function setNameText(){
//     nickName.textContent = data[index-1].name
// }

// nav.addEventListener('click', setBgColor)











