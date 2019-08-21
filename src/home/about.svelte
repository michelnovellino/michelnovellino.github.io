<script>
  import is_prod from '../enviroments/production';
z

  let work_experience = [
    {
      title: "Colaborador Freelance en Corporativos Web c.a.",
      description: "pequeños cambios en sitios realizados en wordpress y php.",
      duration: "2015 - 2016"
    },
    {
      title: "Desarrollador web en liderlogo",
      description: `esta empresa además de estar
        conformadapor un equipo de expertos en diferentes áreas me permitió
        crecer como profesional al incursionar en tecnologías como nodejs, a
        parte de brindarme conocimientos por los cuales estoy agradecido.`,
      duration: "2016 - 2017"
    },
    {
      title: "FREELANCER",
      description:
        "Elaboracion de proyectos personales y clientes particulares",
      duration: "2017 - actualidad"
    },

    {
      title: "Desarrollador Angular en trazo",
      description: `Trazo tiene la particularidad de que trabaja con Productos Minimos
        viables o Mvp's por sus siglas en ingles, lo que signigica que se
        encargan de tomar una idea y convertirla en un producto lo
        suficientemente robusto para generar ganancias o para que sea realmente
        util, hasta los momentos entre los conocimientos que he obtenido con
        ellos destacan: Uso de scrum en entornos de trabajo en equipo,
        angularjs, angular en sus versiones 5 y 7, ionic en sus versiones 3 y 4.`,
      duration: "diciembre 2018 - hasta la fecha"
    }
  ];


</script>

<style>
  .row p,
  .row h4 {
    padding-left: 2% !important;
  }
  .align-titles {
    display: flex !important;
  }
  .align-titles img {
    margin-right: 10px;
  }
</style>

<div class="row">
  <div class="col s12 m12">
    <div class="row">
      <h4 class="flow-text darken-4-text bolder align-titles">
        <img alt="person" src="{is_prod()}images/person.png" />
        Sobre Mí
      </h4>

      <p class="darken-4-text">
        Soy un joven desarrollador web apasionado por la programación y el
        descubrimiento de nuevas tecnologías de javascript, Soy comunicativo y
        proactivo a la resolución de problemas y retos que se presenten en el
        cumplimiento de los objetivos fijados.
      </p>

    </div>
    <div class="row">
      <div class="divider" />
    </div>
    <div class="row">
      <h4 class="flow-text bolder darken-4-text align-titles">
        <img src="{is_prod()}images/gear.png"  alt="person-icon"/>
        EXPERIENCIA
      </h4>
    </div>
    {#each work_experience as experience}
      <div class="row">
        <h4 class="flow-text darken-4-text">{experience.title}</h4>
        <p class="darken-4-text bolder">{experience.duration}</p>
        <p class="darken-4-text"> {experience.description} </p>
      </div>
    {/each}
    <div class="row">
      <div class="divider" />
    </div>
    <div class="row">
      <h4 class="flow-text bolder darken-4-text align-titles">
        <img alt="education" src="{is_prod()}images/education.png" />
        Educación
      </h4>

      <h4 class="flow-text darken-4-text">Técnico superior en informática.</h4>
      <p class="darken-4-text bolder">2014 - 2017</p>
      <p class="darken-4-text">
        Instituto Universitario Del Estado Bolivar | 2014- 2017
      </p>
    </div>

  </div>
</div>
