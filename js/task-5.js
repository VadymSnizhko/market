/*const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem('settings', JSON.stringify(settings));

const savedSettings = localStorage.getItem('settings');
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object
*/
const textField = document.querySelector('.inpt');

textField.value = localStorage.getItem('textField') ?? '';

textField.addEventListener('input', event => {
  localStorage.setItem('textField', event.target.value);
});

const form = document.querySelector('.feedback-form');

const textarea = form.elements.message;

const localStorageKey = 'feedbackValue';

textarea.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', event => {
  localStorage.setItem(localStorageKey, event.target.value);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(
    'elements.message.value:\t' + event.target.elements.message.value
  );
  localStorage.removeItem(localStorageKey);
  localStorage.removeItem('textField');
  localStorage.removeItem('settings');
  form.reset();
});
