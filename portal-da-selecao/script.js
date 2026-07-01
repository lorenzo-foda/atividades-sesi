const form = document.getElementById('form');
const neyma = document.getElementById('neyma');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const dados = Object.fromEntries(formData.entries());

    console.log(dados);
})

neyma.addEventListener('click', function(event) {
    neyma.src = "img/neyma.jpg";
    neyma.alt = "little neynmar";
})

