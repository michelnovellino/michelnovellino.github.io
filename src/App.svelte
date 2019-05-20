<script>
  import { spring } from "svelte/motion";
  /*   import Menu from "./shared/menu.svelte";
  import Todos from "./tasks/todos.svelte"; */
  import Habilities from "./home/habilities.svelte";
  import Sidebar from "./shared/sidebar.svelte";
  import About from "./home/about.svelte";
    import Contact from "./home/contact.svelte";

  import Footer from "./shared/footer.svelte";
</script>

<style>
  @media (min-width: 992px) {
    .sidebar-container {
      padding-right: 0 !important;
    }
  }
</style>

<!-- <Menu />
 -->
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
  <Contact/>
</div>
<Footer />

<!-- <Todos /> -->
