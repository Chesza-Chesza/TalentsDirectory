console.log("GENERANDO...");

let galeria = document.getElementById('los-talentos');

// let div_proyecto = document.createElement('div');
// div_proyecto.setAttribute('class', 'col-lg-3 pb-4');

let div_col = document.createElement('div');
div_col.setAttribute('class', 'col-lg-3 pb-4');

let div_card = document.createElement('div');
div_card.setAttribute('class', 'card text-center font-weight-light border-white');



let p_descripcion = document.createElement('p');
p_descripcion.innerText = `Hola`;

let a_link = document.createElement('a');
a_link.setAttribute("href", 'https://karlheitmann.github.io');
// a_link.setAttribute("href", repo.html_url);

a_link.innerText = 'Karl Heitmann';
a_link.setAttribute('target', '_blank');
a_link.setAttribute('class', 'galeria-proyecto__link');

let img_perfil = document.createElement('img');
// img_perfil.setAttribute('src', 'https://karlheitmann.github.io/assets/img/yo_terraza.jpg')
img_perfil.setAttribute('src', 'assets/img/chef_armando.jpg')
img_perfil.setAttribute('class', 'shadow-lg rounded')

div_card.appendChild(a_link);
div_card.appendChild(p_descripcion);
div_card.appendChild(img_perfil);

div_col.appendChild(div_card)

galeria.appendChild(div_col);

