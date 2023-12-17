
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

//1. 클릭 이벤트 활성화

const nav = document.querySelector('.nav');
const visualImg = document.querySelector('.visual img')

function handleClick(e){
    let li = e.target.closest('li');
    let index = li.dataset.index;
    let ul = document.querySelector('nav>ul')
    
    if(!li) return;
    
    const list = Array.from(ul.children);
    list.forEach((data)=>{data.classList.remove('is-active')});

    visualImg.src = `./assets/${data[index-1].name}.jpeg`;
    visualImg.alt = data[index-1].alt;


    li.classList.add('is-active');


}



nav.addEventListener('click',handleClick)













