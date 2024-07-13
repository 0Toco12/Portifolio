const letters = document.querySelectorAll('.letter');
const svg = document.getElementById("svg");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const opening = document.getElementById("opening-page");

letters.forEach((letter, index) => {
    letter.style.strokeDasharray = `${letter.getTotalLength()} 1000`;
    letter.style.strokeDashoffset = '1000';
});

setTimeout(() => {
    letters.forEach((letter) => {
        letter.classList.remove('hidden');
        letter.classList.add('animated');
    });
    setTimeout(() => {
        letters.forEach((letter) => {
            letter.style.fill = "#F7F1BA"
        });
        setTimeout(() => {
            opening.classList.add('fade-out'); // adiciona a classe de fade-out
            s1.classList.add('aparecendo');
            s2.classList.add('aparecendo');
            setTimeout(() => {
                opening.style.display = "none";
                s1.style.display = "flex";
                s2.style.display = "grid";
            }, 1000); // espera 1 segundo para esconder o elemento
        }, 9000); // espera 9 segundos para iniciar a transição
    }, 7000);
}, 1000);
