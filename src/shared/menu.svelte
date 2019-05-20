
<script>

  var items =  [
        {
            id:1,
            name:'juan',
            
        },
        {
             id:2,
            name:'alberto'
        },
        {
             id:3,
            name:'gonzalo'
        }
    
        ];

</script>


 
 <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        {#each items as { id, name }, i}
        <li><a href="sass.html"> {name}</a></li>
        {/each}
      </ul>
    </div>
  </nav>

