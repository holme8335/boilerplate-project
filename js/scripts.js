

document.getElementById('cat-first').onclick = function() {
    var div = document.getElementById('drop-arrow');
        div.classList.toggle("js-rotated-180");
};

document.getElementById('sub-menu').onclick = function() {
    var div = document.getElementById('menu-arrow');
        div.classList.toggle("js-rotated-90");
};

