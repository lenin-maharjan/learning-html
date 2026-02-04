// Theme handling
const themeToggle = document.getElementById('theme-toggle');
function applyTheme(theme){
  document.body.setAttribute('data-theme', theme);
  themeToggle.setAttribute('aria-pressed', theme === 'dark');
  localStorage.setItem('site-theme', theme);
}
const savedTheme = localStorage.getItem('site-theme') || 'light';
applyTheme(savedTheme);
themeToggle.addEventListener('click', ()=>{
  const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

// Product card interactions
const addToCartBtn = document.getElementById('add-to-cart');
const cartMessage = document.getElementById('cart-message');
addToCartBtn.addEventListener('click', ()=>{
  cartMessage.textContent = 'Product added to cart successfully!';
  setTimeout(()=> cartMessage.textContent = '', 4000);
});

// Image fallback handling
const productImage = document.getElementById('product-image');
const imageFallback = document.getElementById('image-fallback');
productImage.addEventListener('error', ()=>{
  productImage.style.display = 'none';
  imageFallback.hidden = false;
});

// Form validation
const form = document.getElementById('registration-form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const formSuccess = document.getElementById('form-success');

function showError(input, message){
  const err = document.getElementById('error-' + input.id);
  err.textContent = message;
  input.classList.add('invalid');
}
function clearError(input){
  const err = document.getElementById('error-' + input.id);
  err.textContent = '';
  input.classList.remove('invalid');
}

function validateName(){
  const value = fullName.value.trim();
  if(!value){ showError(fullName, 'Full Name must not be empty'); return false }
  clearError(fullName); return true
}

function validateEmail(){
  const value = email.value.trim();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!re.test(value)){ showError(email, 'Please enter a valid email address'); return false }
  clearError(email); return true
}

function validatePassword(){
  const value = password.value;
  if(value.length < 8){ showError(password, 'Password must be at least 8 characters long'); return false }
  clearError(password); return true
}

function validateConfirm(){
  const value = confirmPassword.value;
  if(value !== password.value){ showError(confirmPassword, 'Passwords do not match'); return false }
  clearError(confirmPassword); return true
}

[fullName, email, password, confirmPassword].forEach(input=>{
  input.addEventListener('blur', ()=>{
    if(input === fullName) validateName();
    if(input === email) validateEmail();
    if(input === password) validatePassword();
    if(input === confirmPassword) validateConfirm();
  });
  input.addEventListener('input', ()=>{
    // live remove errors as user types
    if(input.classList.contains('invalid')){
      if(input === fullName) validateName();
      if(input === email) validateEmail();
      if(input === password) validatePassword();
      if(input === confirmPassword) validateConfirm();
    }
  });
});

// Password show/hide
const toggles = document.querySelectorAll('.pw-toggle');
toggles.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = document.getElementById(btn.dataset.target);
    if(target.type === 'password'){
      target.type = 'text'; btn.textContent = 'Hide';
    } else { target.type = 'password'; btn.textContent = 'Show'; }
  });
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const ok = [validateName(), validateEmail(), validatePassword(), validateConfirm()].every(Boolean);
  if(!ok) return;
  // successful submission: clear fields, show message, no reload
  form.reset();
  formSuccess.textContent = 'Registration successful! Thank you.';
  setTimeout(()=> formSuccess.textContent = '', 5000);
});
