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
