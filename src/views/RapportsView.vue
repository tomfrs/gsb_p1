<template>
    <NavbarComponent/>
    Bienvenue {{ this.$store.state.utilisateur.nom +" "+this.$store.state.utilisateur.prenom }}
    <h1>This is a rapports page</h1>
  </template>
  
  <script>
  import NavbarComponent from '@/components/NavbarComponent.vue';
  export default {
    components : {NavbarComponent}
  }
  </script>
  
  