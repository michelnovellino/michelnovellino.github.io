<script>
  import { spring } from "svelte/motion";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import is_prod from "./enviroments/production";

  import Habilities from "./home/habilities.svelte";
  import Sidebar from "./shared/sidebar.svelte";
  import About from "./home/about.svelte";
  import Contact from "./home/contact.svelte";
  import Footer from "./shared/footer.svelte";
  /*  import Footer from "./shared/footer.svelte";

  import sw_config from './enviroments/sw_config'; */
  onMount(async () => {
    console.log(is_prod());
  });
  function download() {
    fetch(`/downloads/michelnovellino-cv.pdf`)
      .then(resp => resp.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "michelnovellino-cv.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert("oh no!"));
  }
</script>

<style>
  @media (min-width: 992px) {
    .sidebar-container {
      padding-right: 0 !important;
    }
  }
</style>

<svelte:head>
  <meta
    name="description"
    content="Se que normalmente aqui debo colocar una descripción, pero prefiero
    que entres a ver lo que prepare." />

  <meta name="twitter:card" value="summary" />

  <meta property="og:title" content="Michel Novellino Dev" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="http://www.michelnovelino.com" />
  <meta
    property="og:image"
    content="http://www.michelnovellino.com/public/images/logo.jpeg" />
  <meta property="og:description" content="Desarrollo movil - WebApps y más" />

</svelte:head>

<div class="fixed-action-btn">
  <button href="#" class="btn-floating btn-large darkness-general">
    <i class="large material-icons">cloud_download</i>
  </button>
  <ul>
    <li>
      <button on:click={download} class="btn-floating darkness-general">
        <i class="material-icons">file_download</i>
      </button>
    </li>

  </ul>
</div>
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
