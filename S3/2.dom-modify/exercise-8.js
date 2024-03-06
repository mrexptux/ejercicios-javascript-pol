const segundoDiv = document.querySelectorAll('div')[1];

const p = document.createElement('p');
p.textContent = 'Voy en medio!'

document.body.insertBefore(p, segundoDiv);