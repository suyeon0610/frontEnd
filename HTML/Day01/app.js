
const $btn = document.querySelector('#change');
const $pet = document.querySelector('#my-pet');

$btn.addEventListener('cliker', e => {
    $pet.textContent = '귀여운 거북이'
});