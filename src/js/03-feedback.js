import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  //   email: document.querySelector('input'),

  textarea: document.querySelector('textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

  const saveData = localStorage.getItem(STORAGE_KEY);
  //   console.log('saveData', saveData);

  const parseData = JSON.parse(saveData);
  //   console.log('parseData', parseData);
});

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('submit the form');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
    refs.form.value = savedMessage;
  }
}
