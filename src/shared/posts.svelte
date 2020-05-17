<script>
  import is_prod from "../enviroments/production";
  import service from "../http/services/rss";
  function Goto(url) {
    window.open(url);
  }
  var posts = service.Get();

  let profile_image = is_prod() + "images/profile-cv-web.jpg";
  /*   let posts = [
    {
      title: "El mejor framework de go para desarrolladores nodejs-express",
      url:
        "https://dev.to/michelnovellino/el-mejor-framework-de-go-para-desarrolladores-nodejs-express-1pck",
      date: "8 de Mayo 2020"
    },
    {
      title:
        "Implementando social login con angular 9 utilizando firebase/angularfire 6.0",
      url:
        "https://dev.to/michelnovellino/implementando-social-login-con-angular-9-utilizando-firebase-angularfire-6-0-1fck",
      date: "8 de Mayo 2020"
    },
    {
      title: "Trabajando con inputs dinamicos en angularjs",
      url: " https://link.medium.com/hHPFZq88t6",
      date: "7 de Marzo 2019"
    },
    {
      title: "Integra materializeCss framework con vuejs en 3 sencillos pasos",
      url: "https://link.medium.com/duoarv68t6",
      date: "19 de Noviembre 2018"
    }
  ]; */
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
