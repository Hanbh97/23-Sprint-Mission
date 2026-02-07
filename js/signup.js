const emailInput = document.querySelector('#signup-email');
const nicknameInput = document.querySelector('#signup-nickname');

function checkEmail(e) {
  const REQUIRED_MESSAGE = "이메일을 입력해주세요.";
  const WRONG_MESSAGE = "잘못된 이메일 형식입니다.";
  
  const inputValue = e.target.value.trim();

  const inputWrapper = e.target.closest('.input');
  const errorInput = inputWrapper.querySelector('.input-main');
  const errorText = inputWrapper.querySelector('.error-message');

  if(inputValue === ""){
    errorText.classList.add('wrong-input');
    errorInput.classList.add('wrong-input');
    errorText.textContent = REQUIRED_MESSAGE;
    return;
  }

  if(!inputValue.includes('@')){
    errorText.classList.add('wrong-input');
    errorInput.classList.add('wrong-input');
    errorText.textContent = WRONG_MESSAGE;
    return;
  }

  errorText.classList.remove('wrong-input');
  errorInput.classList.remove('wrong-input');
  errorText.textContent = '';
}

function checkNickname(e) {
  const REQUIRED_MESSAGE = "닉네임을 입력해주세요.";

  const inputValue = e.target.value.trim();

  const inputWrapper = e.target.closest('.input');
  const errorInput = inputWrapper.querySelector('.input-main');
  const errorText = inputWrapper.querySelector('.error-message');

  if (inputValue === ""){
    errorText.classList.add('wrong-input');
    errorInput.classList.add('wrong-input');
    errorText.textContent = REQUIRED_MESSAGE;
    return;
  }

  errorText.classList.remove('wrong-input');
  errorInput.classList.remove('wrong-input');
  errorText.textContent = '';
}

emailInput.addEventListener('focusout', checkEmail);
nicknameInput.addEventListener('focusout', checkNickname);