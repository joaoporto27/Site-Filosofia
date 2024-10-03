function animar(){
    const btn = document.getElementById('btn-menu');
    btn.classList.toggle('ativo');
}
function animarMenu(){
    const menu = document.getElementById('menu-materias');
    menu.classList.toggle('abrir');
    menu.addEventListener('click', animarMenu);
}

function animar2(){
    const btn = document.getElementById('btn-menu2');
    btn.classList.toggle('ativado');
}
function animarMenu2(){
    const menu = document.getElementById('menu-menu');
    menu.classList.toggle('abrir2');
    menu.addEventListener('click', animarMenu);
}