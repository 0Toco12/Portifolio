const s1 = document.getElementById("s1");
const s3 = document.getElementById("s3");
const intro = document.getElementById("intro");

document.addEventListener("DOMContentLoaded", function() {
    function showMainContent() {
        intro.classList.add('hidden');
        setTimeout(function() {
            intro.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            s1.style.display = "flex";
            s3.style.display = "grid";
        }, 2000);
    }

    setTimeout(showMainContent, 6000);
});


    // Obter o modal
    var modal = document.getElementById("myModal");

    // Obter o botão que abre o modal
    var btn = document.getElementById("certificados");

    // Obter o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];

    // Quando o usuário clicar no botão, abre o modal 
    btn.onclick = function() {
        modal.style.display = "block";
        s1.style.backdropFilter = 'blur(10px)';
        s1.style.webkitBackdropFilter = 'blur(10px)';
        s3.style.backdropFilter = 'blur(10px)';
        s3.style.webkitBackdropFilter = 'blur(10px)';
    }

    // Quando o usuário clicar no <span> (x), fecha o modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }