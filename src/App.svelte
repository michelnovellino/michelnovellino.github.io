<script>
  import { spring } from "svelte/motion";
  import { onMount } from "svelte";
  import Habilities from "./home/habilities.svelte";
  import Sidebar from "./shared/sidebar.svelte";
  import About from "./home/about.svelte";
  import Contact from "./home/contact.svelte";
 import Footer from "./shared/footer.svelte";
/*  import Footer from "./shared/footer.svelte";

  import sw_config from './enviroments/sw_config'; */
  onMount(async () => {

  })

  
</script>
<svelte:head>
<title>Título de página. Máximo de 60-70 caracteres</title>
<meta name="description" content="Se que normalmente aqui debo colocar una descripción, pero prefiero que entres a ver lo que prepare." />


<meta name="twitter:card" value="summary">


<meta property="og:title" content="Michel Novellino Dev" />
<meta property="og:type" content="article" />
<meta property="og:url" content="http://www.michelnovelino.com" />
<meta property="og:image" content="http://www.michelnovelino.com/public/images/logo.jpeg" />
<meta property="og:description" content="Desarrollo movil - WebApps y más" />

</svelte:head>
<style>
  @media (min-width: 992px) {
    .sidebar-container {
      padding-right: 0 !important;
    }
  }


</style>



<div class="row">
  <div class="col s12 m4 l3 sidebar-container">
    <Sidebar />
  </div>

  <div class="col 12 m8 l9">
    <About />

  </div>
</div>
<div class="row">
  <Habilities />
</div>
<div class="row">
  <Contact />
</div>
<Footer />

<!-- <Todos /> -->
