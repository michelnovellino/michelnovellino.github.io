<script>
  import { onMount, onDestroy} from "svelte";

	import { fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

  import is_prod from "../enviroments/production";
  let habilities = [
    { title: "HTML5" },
    { title: "Javascript" },
    { title: "CSS3" },
    { title: "PHP" },
    { title: "Nodejs" },
    { title: "Vuejs" },
    { title: "Angular" },
    { title: "MaterializeCss" },
    { title: "Wordpress" },
    { title: "Mysql" },
    { title: "MongoDb" }
  ];
  let visible;
  onMount(() => {visible = true});
  onDestroy(() => (visible = false));

	function some(node, { params}) {
		const existingTransform = getComputedStyle(node).transform.replace('none', '');
		return {
			delay: params.delay || 1,
			duration: params.duration || 5000,
			easing: params.easing || elasticOut,
			css: (t, u) => `transform: ${existingTransform} scale(${t})`
		};
	}
  
</script>

<style>
  .sidebar .card-content {
    background: #444;
  }
  .sidebar .collection {
    border: none !important;
  }
  .collection-item {
    background: transparent !important;
    border: none !important;
  }
  .projects .collection-item {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  .projects .collection-item i {
    font-size: 12px;
    margin-left: 2%;
  }
</style>

<div class="card z-depth-3 s12 sidebar">
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src="{is_prod()}images/logo-min.jpeg " alt="profile" />
  </div>
  <div class="card-content">
    <span class="card-title yellow-general-text">Michel Novellino</span>
    <div class="row">
      <div class="divider white" />
    </div>
    <span class="card-tittle yellow-general-text ">HABILIDADES</span>
    <ul class="collection">
    {#each habilities as hability}
      {#if visible}
            <li class="collection-item white-text " transition:some={{params:{}}}>{hability.title}</li>
      {/if}
    {/each }
    </ul>

    <span class="card-tittle yellow-general-text">Proyectos</span>
    <ul class="collection projects">
      <a
        class="collection-item white-text"
        target="_blank"
        href="https://github.com/michelnovellino/">
        github
        <i class="material-icons">send</i>
      </a>
      <a
        class="collection-item white-text"
        target="_blank"
        href="https://gitlab.com/michelnovellino">
        gitlab
        <i class="material-icons">send</i>
      </a>
      <a
        class="collection-item white-text"
        target="_blank"
        href="https://www.linkedin.com/in/michel-novellino/">
        linkedin
        <i class="material-icons">send</i>
      </a>
    </ul>
  </div>

</div>
