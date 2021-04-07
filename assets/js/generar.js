console.log("GENERANDO...");

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

