const telefone = document.getElementById('telefone');
const apartamento = document.getElementById('apartamento');
const bloco = document.getElementById('bloco');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const nome = document.getElementById('nome');
const form = document.getElementById('form');

VMasker(telefone).maskPattern('(99)99999-9999');

form.addEventListener('submit', () => {
  VMasker(telefone).unMask();
  return true;
});
