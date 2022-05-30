<template>
  <div class="container-connexion">
    <h1 class="titre-todo"><b>TO DO</b></h1>
    <img src="img/liste.png" class="logo-todo"/><br>
    <img src="img/logo-facebook.png" class="logo-reseau"/>-<img src="img/logo-google.png" class="logo-reseau"/>-<img src="img/logo-twitter.png" class="logo-reseau"/>
    <form>
      <p class="ou">____________ OU ____________</p><br>
      <label id="nom"><b>Nom d'utilisateur</b></label><br>
      <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required><br>

      <label id="mdp"><b>Mot de passe</b></label><br>
      <input type="password" placeholder="Entrer le mot de passe" name="password" required><br>

      <router-link to="/compte"><input type="submit" id='submit' value='LOGIN' ></router-link>
    </form>
    <p>Mot de passe oublié?</p>
    <h3>Inscription</h3>
  </div>
</template>

<script>

</script>

<style scoped>
.titre-todo{
  font-size: 40px;
}
h1{
  color:white;
}
h2{
  color:white;
  font-weight: bold;
}
.container-connexion {
    background-color:#303030;
    border-radius: 20px;
    color:white;
    padding: 40px;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

label {
    margin:15px;
}

input {
    margin:10px;
    padding: 10px 30px;
    border-radius: 10px;
    border-left:white;
    font-size:14px;
}

#submit {
    background:white;
    margin: 10px;
    padding: 10px 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    transition: 0.5s;
    background-size: 200% auto;
    color: rgb(0, 0, 0);            
    border-radius: 10px;
}

#submit:hover {
    background-position: right center; 
    color: #000;
    text-decoration: none;
}

.ou{
  color:#6D6D6D;
}

.logo-todo{
  width:70px;
  height:auto;
}
.logo-reseau{
  width:50px;
  height:auto;
}
</style>
