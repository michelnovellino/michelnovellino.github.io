<style>

.iti-flag {background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.1.0/img/flags.png");}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .iti-flag {background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.1.0/img/flags@2x.png");}
}

</style>
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

