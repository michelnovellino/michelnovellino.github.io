<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import is_prod from "../enviroments/production";
  var visible;
  let examples = [
    {
      img: is_prod() + "images/vue-logo.svg",
      type: "Vuejs",
      title: "B1B",
      description: "Sistema de gestion bursátil de inversiones y referidos.",
      link: "https://github.com/danieljtorres/b1b"
    },
    {
      img: is_prod() + "images/nodejs-logo.svg",
      type: "Nodejs",
      title: "Diseñador de logos.",
      description:
        "Colaboración en backend, modulos de usuarios (login, registro etc..), envio de emails.",
      link: "https://github.com/BazamIdeas/disenador"
    },
    {
      img: is_prod() + "images/angular-logo.svg",
      type: "Angular",
      title: "GASE",
      description: `hecho en angularjs 1x y utilizando ionic 2 se hizo una aplicación para el registro de asistencias 
      y control de actividades escolares, es un proyecto de tesis, aunque la del repositorio se haya tenido que resubir`,
      link: "https://github.com/LDTorres/Administrador-de-asistencias"
    },
    {
      img: is_prod() + "images/ionic-logo.svg",
      type: "Ionic",
      title: "Chat con firebase",
      description:
        "Chat simple con ionic y firebase, con algunas funciones extra.",
      link: "https://github.com/michelnovellino/ionic-firebase-chat"
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

<style>
  .habilities span.card-title.activator {
    color: #fafafa !important;
    font-size: 20px !important;
  }
  .habilities .card {
    background: #444 !important;
  }
  .habilities .card img.activator {
    height: 200px;
    padding: 5%;
    object-fit: contain;
  }
  .collection-item {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-end;
  }
</style>

<div class="row">
  <div class="divider" />
</div>
<div class="row habilities">
  <h4 class="flow-text bolder darken-4-text center-align">
    Proyectos Destacados
  </h4>

  {#each examples as example}
    {#if visible}
      <div class="col s12 m6 l3" transition:fade>
        <div class="card z-depth-3">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              src="
              {example.img}
              "
              alt="
              {example.type}" />
          </div>
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
    {/if}
  {/each}
</div>
