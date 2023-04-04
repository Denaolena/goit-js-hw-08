import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

// refs.form.addEventListener('input', e => {
//     console.log(e.target.name);
//     console.log(e.target.value);
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

//   const saveData = localStorage.getItem(STORAGE_KEY);
//     console.log('saveData', saveData);

//   const parseData = JSON.parse(saveData);
//     console.log('parseData', parseData);
// });

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('submit the form');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(evt) {
  const data = {
    email: refs.email.value,
    message: refs.textarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage.message;
    refs.email.value = savedMessage.email;
  }
}
