const form = document.querySelector('#lead-form');
const message = document.querySelector('#form-message');

const showMessage = (text, isError = false) => {
  message.textContent = text;
  message.classList.toggle('error', isError);
  message.style.display = 'block';
};

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    showMessage('Заполните обязательные поля и подтвердите согласие.', true);
    return;
  }

  showMessage('Анкета заполнена корректно. После согласования трафика здесь будет подключена отправка в официальную систему заявок.');
});

document.querySelectorAll('details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('details[open]').forEach((opened) => {
      if (opened !== item) opened.removeAttribute('open');
    });
  });
});

