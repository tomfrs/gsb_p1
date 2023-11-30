<template>
    <NavbarComponent/>

    <v-toolbar v-show="isNavMedVisible" density="comfortable">
        <v-col class="d-flex justify-space-around">
            <v-btn>CONSULTER LES RAPPORTS</v-btn>
        </v-col>
        <v-col class="d-flex justify-space-around">
            <v-btn>GERER LE MEDECIN</v-btn>
        </v-col>
    </v-toolbar>
    
    <RechercheMedecinComponent/>



    Bienvenue {{ this.$store.state.utilisateur.nom +" "+this.$store.state.utilisateur.prenom }}
    <h1>This is a medecin page</h1>



  </template>
  
  <script>
  import NavbarComponent from '@/components/NavbarComponent.vue';
  import RechercheMedecinComponent from '@/components/RechercheMedecinComponent.vue';
  export default {
    isNavMedVisible : false,
    components : {NavbarComponent,RechercheMedecinComponent}
  }

  </script>
  
  