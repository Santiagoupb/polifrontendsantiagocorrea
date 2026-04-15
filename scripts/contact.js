const form = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');

const fieldRules = {
  name: {
    validate: (value) => value.trim().length >= 3,
    message: 'El nombre debe tener al menos 3 caracteres.'
  },
  email: {
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    message: 'Ingresa un correo valido.'
  },
  subject: {
    validate: (value) => value.trim().length >= 4,
    message: 'El asunto debe tener al menos 4 caracteres.'
  },
  message: {
    validate: (value) => value.trim().length >= 10,
    message: 'El mensaje debe tener al menos 10 caracteres.'
  }
};

form?.querySelectorAll('input, textarea').forEach((field) => {
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('input', () => clearFieldState(field));
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const fields = Array.from(form.querySelectorAll('input, textarea'));
  const isValid = fields.every((field) => validateField(field));

  if (!isValid) {
    showFeedback('Corrige los campos marcados antes de enviar.', false);
    return;
  }

  form.reset();
  fields.forEach(clearFieldState);
  showFeedback('Mensaje enviado correctamente. Pronto nos pondremos en contacto contigo.', true);
});

function validateField(field) {
  const rule = fieldRules[field.name];

  if (!rule) {
    return true;
  }

  const valid = rule.validate(field.value);
  const errorNode = document.querySelector(`[data-error-for="${field.name}"]`);

  field.classList.toggle('is-invalid', !valid);

  if (errorNode) {
    errorNode.textContent = valid ? '' : rule.message;
  }

  return valid;
}

function clearFieldState(field) {
  const errorNode = document.querySelector(`[data-error-for="${field.name}"]`);
  field.classList.remove('is-invalid');

  if (errorNode) {
    errorNode.textContent = '';
  }

  if (feedback) {
    feedback.textContent = '';
    feedback.className = 'form-feedback';
  }
}

function showFeedback(message, isSuccess) {
  if (!feedback) {
    return;
  }

  feedback.textContent = message;
  feedback.className = `form-feedback ${isSuccess ? 'success' : 'error'}`;
}
