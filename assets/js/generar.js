console.log("GENERANDO...");
const talentos = [
  {
    nombre: 'Karl Heitmann',
    profesion: 'Full Stack',
    imagen: 'https://karlheitmann.github.io/assets/img/yo_terraza.jpg',
    home_page: 'https://karlheitmann.github.io',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Rogelio Chanto',
    profesion: 'Full Stack / Asesor Finaciero',
    imagen: 'assets/img/chef_armando.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
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

  // ================================================

  let ul_icons = document.createElement('ul');
  div_card_body.appendChild(ul_icons);
  ul_icons.setAttribute('class', 'icons list-style-none text-white text-decoration-none p-0')

  talento.redes_sociales.forEach(rs => {
    const li_cont = document.createElement('li');
    ul_icons.appendChild(li_cont);
    li_cont.setAttribute('class', 'd-inline');
    const a_link = document.createElement('a');
    a_link.setAttribute('href', rs.link);
    li_cont.appendChild(a_link);
    const i_icono = document.createElement('i');
    a_link.appendChild(i_icono);
    i_icono.setAttribute('class', rs.class_iconos);
  })

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

