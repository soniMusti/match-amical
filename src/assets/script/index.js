document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;
    let form = event.target;

    // Reset les messages d'erreur
    form.querySelectorAll('.error-message').forEach(function(error) {
      error.remove();
    });

    // verif NOM
    let nom = form.querySelector('input[placeholder="NOM"]');
    if (nom.value.trim() === '') {
      isValid = false;
      showError(nom, 'Veuillez entrer votre nom.');
    }

    // verif PRENOM
    let prenom = form.querySelector('input[placeholder="PRENOM"]');
    if (prenom.value.trim() === '') {
      isValid = false;
      showError(prenom, 'Veuillez entrer votre prénom.');
    }

    // verif EMAIL
    let email = form.querySelector('input[placeholder="EMAIL"]');
    if (email.value.trim() === '') {
      isValid = false;
      showError(email, 'Veuillez entrer votre adresse e-mail.');
    } else if (!validateEmail(email.value.trim())) {
      isValid = false;
      showError(email, 'Veuillez entrer une adresse e-mail valide.');
    }

    // verif Message
    let message = form.querySelector('textarea[placeholder="Message"]');
    if (message.value.trim() === '') {
      isValid = false;
      showError(message, 'Veuillez entrer votre message.');
    }

    
    if (isValid) {

        // local storage
        localStorage.setItem('contactForm', JSON.stringify({
          nom: nom.value.trim(),
          prenom: prenom.value.trim(),
          email: email.value.trim(),
          message: message.value.trim()
      }));
        
        alert('Votre message a bien été envoyé.');

        // window.location.href = 'confirmation.html';

        // Reset formulaire
        form.reset();
        
      }
  });

  function showError(element, message) {
    let error = document.createElement('div');
    error.className = 'error-message';
    error.style.color = 'green';
    error.innerText = message;
    element.parentNode.appendChild(error);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  
    