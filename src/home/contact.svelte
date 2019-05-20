<style>
  .form {
    background: white !important;
    padding:4%;
  }
</style>

<div class="row">
  <div class="divider " />
</div>
<h4 class="flow-text bolder darken-4-text center-align">Contacto</h4>

<div class="col s12 m6 l6 ">
  
    <form
      class="col form  offset-m6 offset-s0 s12 center-align"
      method="POST"
      action="https://formspree.io/michelnovellino.programador@gmail.com">
      <div class="row">
        <div class="input-field col s12 m12">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" name="name" type="text" class="validate" />
          <label for="icon_prefix">Nombre</label>
        </div>
        <div class="input-field col s12 m12">
          <i class="material-icons prefix">phone</i>
          <input id="phone" name="phone" type="tel" class="validate" />
          <label for="phone">Telefóno</label>
        </div>

          <div class="input-field col s12">
          <i class="material-icons prefix">alternate_email</i>
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            class="validate" />
          <label for="icon_prefix"></label>
        </div>
        <div class="input-field col s12">
        <i class="material-icons prefix">mode_edit</i>
          <textarea
            id="textarea1"
            name="message"
            placeholder="Mensaje"
            class="materialize-textarea" />
            
          <label for="textarea1"></label>
      </div>

      </div>

      <input
        type="hidden"
        name="_subject"
        value="Nueva propuesta para proyecto" />
      <input type="text" name="_gotcha" style="display:none" />
      <button class="waves-effect waves-light btn white" type="submit"> Enviar <i class="material-icons right">cloud</i></button>
    </form>
  </div>


