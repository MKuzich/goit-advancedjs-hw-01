const formData = { email: '', message: '' };

const dataFromLocalStorage = localStorage.getItem('feedback-form-state');
const form = document.querySelector('.feedback-form');

if (dataFromLocalStorage) {
  const savedData = JSON.parse(dataFromLocalStorage);
  Object.assign(formData, savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

const inputHandler = e => {
  formData[e.target.name] = e.target.value.trim();
  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (error) {
    console.error('Error saving to localStorage: ', error);
  }
};

form.addEventListener('input', inputHandler);

const submitHandler = e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  Object.assign(formData, { email: '', message: '' });
};

form.addEventListener('submit', submitHandler);
