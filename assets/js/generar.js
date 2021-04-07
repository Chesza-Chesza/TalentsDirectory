console.log("GENERANDO...");
const talentos = [
  {
    nombre: 'Karl Heitmann',
    profesion: 'Full Stack',
    imagen: 'https://karlheitmann.github.io/assets/img/yo_terraza.jpg',
    link: 'https://karlheitmann.github.io'
  },
  {
    nombre: 'Rogelio Chanto',
    profesion: 'Full Stack / Asesor Finaciero',
    imagen: 'assets/img/chef_armando.jpg',
    link: '#'
  },
]

let galeria = document.getElementById('los-talentos');

// let div_proyecto = document.createElement('div');
// div_proyecto.setAttribute('class', 'col-lg-3 pb-4');

talentos.forEach(talento => {
  console.log("Talento", talento)

  // Contenedor col
  let div_col = document.createElement('div');
  div_col.setAttribute('class', 'col-lg-3 pb-4');

  // Contenedor card, este contiene un <img> y un <div class="card-body">
  let div_card = document.createElement('div');
  div_col.appendChild(div_card)
  div_card.setAttribute('class', 'card text-center font-weight-light border-white');

  let img_perfil = document.createElement('img');
  img_perfil.setAttribute('src', talento.imagen);
  // img_perfil.setAttribute('src', 'assets/img/chef_armando.jpg')
  img_perfil.setAttribute('class', 'shadow-lg rounded');
  div_card.appendChild(img_perfil);

  let div_card_body = document.createElement('div');
  div_card_body.setAttribute('class', 'card-body bg-white shadow p-3 mb-5 rounded text-dark')
  div_card.appendChild(div_card_body);

  // Contenedor info: nombre y profesion
  let div_card_info = document.createElement('div');
  div_card_body.appendChild(div_card_info);
  div_card_info.setAttribute('class', 'info text-left');

  // h4 pertenece a div_card_info
  let h4_name = document.createElement('h4');
  div_card_info.appendChild(h4_name);
  h4_name.setAttribute('class', 'name');
  h4_name.innerText = talento.nombre;

  // p_profesion pertenece a div_card_info
  let p_profesion = document.createElement('p');
  div_card_info.appendChild(p_profesion);
  p_profesion.setAttribute('class', 'profesion');
  p_profesion.innerText = talento.profesion;

  // let a_link = document.createElement('a');
  // a_link.setAttribute("href", talento.link);
  // // a_link.setAttribute("href", repo.html_url);

  // a_link.innerText = talento.nombre;
  // a_link.setAttribute('target', '_blank');
  // a_link.setAttribute('class', 'galeria-proyecto__link');


  // div_card.appendChild(a_link);
  // div_card.appendChild(p_descripcion);

  // div_col.appendChild(div_card);

  galeria.appendChild(div_col);

});

