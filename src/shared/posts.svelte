<script>
  import is_prod from "../enviroments/production";
  import service from "../http/services/rss";
  function Goto(url) {
    window.open(url);
  }
  var posts = service.Get();
  let profile_image = is_prod() + "images/logo-min.jpeg";
</script>

<style>
  .feed li {
    cursor: pointer;
  }
</style>

<ul class="collection feed">
  {#await posts}
    <p>...Cargando</p>
  {:then posts}
    {#each posts as post}
      <li class="collection-item avatar pt-4" on:click={() => Goto(post.url)}>
        <img src={profile_image} alt="Profile " class="circle" />
        <span class="title ">{post.title}</span>
        <p>{post.date}</p>
        <!-- <a href={post.url} class="secondary-content">
        <i class="material-icons">grade</i>
      </a> -->
      </li>
    {/each}
  {:catch error}
    <p style="text-white">No se pudo obtener las entradas.</p>
  {/await}
</ul>
