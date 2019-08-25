<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import is_prod from "../enviroments/production";
  var visible;
  let examples = [
        {
      img: is_prod() + "images/niccolo-min.jpeg",
      type: "wordpress",
      title: "Niccolo",
      description:
        "Landing page para empresa de transporte en argentina.",
      link: "http://rossisrl.com.ar/"
    },
    {
      img: is_prod() + "images/evita-min.jpeg",
      type: "wordpress",
      title: "Grupo Evita",
      description:
        "Ecommerce de materiales de contruccion, hecho en wordpress.",
      link: "http://grupoevita.com/"
    },
    {
      img: is_prod() + "images/ultimoo-min.jpeg",
      type: "wordpress",
      title: "Ultimoo",
      description:
        "Sitio web corporativo, ajustes en estructura, cambios visuales a sitio existente.",
      link: "https://ultimoo.com/"
    },
    {
      img: is_prod() + "images/logo-editor-min.jpeg",
      type: "Nodejs",
      title: "Diseñador de logos.",
      description:
        "Colaboración en backend, modulos de usuarios (login, registro etc..), envio de emails.",
      link: "https://github.com/BazamIdeas/disenador"
    },
    {
      img: is_prod() + "images/gase-min.jpeg",
      type: "Angular",
      title: "GASE",
      description: `hecho en angularjs 1x y utilizando ionic 2 se hizo una aplicación para el registro de asistencias 
      y control de actividades escolares, es un proyecto de tesis, aunque la del repositorio se haya tenido que resubir`,
      link: "https://github.com/LDTorres/Administrador-de-asistencias"
    },
    {
      img: is_prod() + "images/school-control-min.jpeg",
      type: "ionic",
      title: "School Control",
      description:
        "Sistema de seguridad recoleccion de niños en las escuelas, frontend en ionic 3.",
      link: "#"
    },
    {
      img: is_prod() + "images/no-image.jpeg",
      type: "Ionic",
      title: "Chat con firebase",
      description:
        "Chat simple con ionic y firebase, con algunas funciones extra.",
      link: "https://github.com/michelnovellino/ionic-firebase-chat"
    },
    {
      img: is_prod() + "images/no-image.jpeg",
      type: "Vuejs",
      title: "B1B",
      description: "Sistema de gestion bursátil de inversiones y referidos.",
      link: "https://github.com/danieljtorres/b1b"
    }
  ];
  var loader, loader_status;
  setTimeout(function() {
    visible = true;
  }, 1200);
  onMount(async () => {});

  loader = document.getElementById("loader-container");
  loader_status = getComputedStyle(loader);
  console.log(loader_status.display);
</script>


<div class="row">
  <div class="divider" />
</div>
<div class="row habilities">
  <h4 class="flow-text bolder darken-4-text center-align">
    Proyectos Destacados
  </h4>
  <div class="main-carousel">

    {#each examples as example}
      <div class="carousel-cell">
        <div class="card z-depth-3">
          <div
            class="card-image custom-card-image waves-effect waves-block
            waves-light"
            style="background:url({example.img})" />
          <div class="card-content">
            <span class="card-title activator darken-4-text">
              {example.title}
              <i class="material-icons right">remove_red_eye</i>
            </span>

          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">

              <i class="material-icons right">close</i>
            </span>
            <p>{example.description}</p>
            <a
              class="collection-item right-align brown-text"
              target="_blank"
              href={example.link}>
              ver más
              <i class="material-icons">link</i>
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
