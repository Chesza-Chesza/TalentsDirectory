console.log("GENERANDO...");
const talents = [
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
  {
    nombre: 'Jacqueline Picado',
    profesion: 'Full Stack',
    imagen: 'assets/img/jaqueline.png',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Erick Rojas',
    profesion: 'Full Stack',
    imagen: 'assets/img/erick-rojas.png',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Shirley Alvarado',
    profesion: 'Full Stack / Designer',
    imagen: 'assets/img/shirley.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Henry Artavia',
    profesion: 'Full Stack',
    imagen: 'assets/img/henry.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Oscar Vega',
    profesion: 'Full Stack',
    imagen: 'assets/img/oscar.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Elian Rojas',
    profesion: 'Full Stack',
    imagen: 'assets/img/foto.png',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Alonso Viales',
    profesion: 'Full Stack',
    imagen: 'assets/img/alonso.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Mauricio Badilla',
    profesion: 'Full Stack',
    imagen: 'assets/img/foto.png',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Azalea Acuña',
    profesion: 'Senior Designer',
    imagen: 'assets/img/azalea.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Cynthia Salazar',
    profesion: 'Full Stack',
    imagen: 'assets/img/cynthia',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Erick Ramos',
    profesion: 'Full Stack',
    imagen: 'assets/img/erick_ramos.png',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Fabián Conejo',
    profesion: 'Full Stack',
    imagen: 'assets/img/fabian',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Gabriela Solís',
    profesion: 'Full Stack',
    imagen: 'assets/img/gaby.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Jordan Sandoval',
    profesion: 'Full Stack',
    imagen: 'assets/img/jordan.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Joseph Murillo',
    profesion: 'Full Stack',
    imagen: 'assets/img/joseph.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Lidya Arce',
    profesion: 'Full Stack',
    imagen: 'assets/img/lydia.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Marcela Brenes',
    profesion: 'Full Stack / Criminóloga',
    imagen: 'assets/img/marcela.png',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Alejandra Serrano',
    profesion: 'Full Stack / Relacionista Pública',
    imagen: 'assets/img/alejandra.png',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Pablo',
    profesion: 'Full Stack',
    imagen: 'assets/img/foto.png',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Randall Quesada',
    profesion: 'Full Stack / Músico',
    imagen: 'assets/img/randall.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Roxana Chinchilla',
    profesion: 'Full Stack',
    imagen: 'assets/img/roxi.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Steyler Ayala',
    profesion: 'Full Stack',
    imagen: 'assets/img/styler.jpg',
    home_page: '#',
    redes_sociales: [
      {link: '#', class_iconos: 'fab fa-github-square fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-linkedin fa-2x pl-1'},
      {link: '#', class_iconos: 'fab fa-facebook-square fa-2x pl-1'},
    ]
  },
  {
    nombre: 'Yirlania Torres',
    profesion: 'Full Stack',
    imagen: 'assets/img/yirlania.jpg',
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

talents.forEach(talent => {
  console.log("Talento", talent);
  generateCardForTalent(talent);
})

function generateCardForTalent(talent) {
  // Contenedor col
  let div_col = document.createElement('div');
  div_col.setAttribute('class', 'col-lg-3 pb-4');

  // Contenedor card, este contiene un <img> y un <div class="card-body">
  let div_card = document.createElement('div');
  div_col.appendChild(div_card)
  div_card.setAttribute('class', 'card text-center font-weight-light border-white');

  let img_perfil = document.createElement('img');
  img_perfil.setAttribute('src', talent.imagen);
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
  h4_name.innerText = talent.nombre;

  // p_profesion pertenece a div_card_info
  let p_profesion = document.createElement('p');
  div_card_info.appendChild(p_profesion);
  p_profesion.setAttribute('class', 'profesion');
  p_profesion.innerText = talent.profesion;

  // ================================================

  let ul_icons = document.createElement('ul');
  div_card_body.appendChild(ul_icons);
  ul_icons.setAttribute('class', 'icons list-style-none text-white text-decoration-none p-0')

  talent.redes_sociales.forEach(rs => {
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

  const a_homepage = document.createElement('a');
  div_card_body.appendChild(a_homepage);
  a_homepage.setAttribute('class', 'btn btn-info my-3');
  a_homepage.setAttribute('href', talent.home_page);
  a_homepage.innerText = 'Ver perfil';
  // let a_link = document.createElement('a');
  // a_link.setAttribute("href", talent.link);
  // // a_link.setAttribute("href", repo.html_url);

  // a_link.innerText = talent.nombre;
  // a_link.setAttribute('target', '_blank');
  // a_link.setAttribute('class', 'galeria-proyecto__link');


  // div_card.appendChild(a_link);
  // div_card.appendChild(p_descripcion);

  // div_col.appendChild(div_card);

  galeria.appendChild(div_col);

}

