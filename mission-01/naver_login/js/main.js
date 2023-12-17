
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

//1.email 정규표현식을 사용한 validation
const inputEmail = document.querySelector('#userEmail');
const inputpw = document.querySelector('#userPassword');





function emailReg(test){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(test).toLowerCase());
}

function emailValid(){
  if(emailReg(inputEmail.value) === false){
    return inputEmail.classList.add('is--invalid');
  }else if(inputEmail.value === ""){
    return inputEmail.classList.remove('is--invalid');
  }else{
   return inputEmail.classList.remove('is--invalid');
  }
}


// 2. pw 정규표현식을 사용한 validation
function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function pwValid(){
  if(pwReg(inputpw.value) === false){
    return inputpw.classList.add('is--invalid');
  }else{
   return inputpw.classList.remove('is--invalid');
  }
}

// 3. 상태 변수 관리
const userId = 'asd@naver.com';
const userPw = 'spdlqj123!@';
// 4. 로그인 버튼을 클릭시 조건처리

function signIn(){
  
  if(userId === inputEmail.value && userPw === inputpw){
    window.location.href = 'welcome.html'
  }else if(userId !== inputEmail.value || userPw !== inputpw){
    alert('아이디 또는 비밀번호를 확인해주세요')
  }
}



