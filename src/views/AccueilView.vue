<template>
  <NavbarComponent/>
  Bienvenue {{ this.$store.state.utilisateur.nom +" "+this.$store.state.utilisateur.prenom }}
  <p> {{this.$store.state.utilisateur}} </p>
  <h1>ACCUEIL</h1>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
export default {
  components : {NavbarComponent}
}
</script>

