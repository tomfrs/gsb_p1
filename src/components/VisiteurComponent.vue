<template>
    <v-text-field label="Nom" v-model="nomVisiteur"></v-text-field>
    <v-text-field label="Prenom" v-model="prenomVisiteur"></v-text-field>
    <v-text-field label="Adresse" v-model="adresseVisiteur"></v-text-field>
    <v-text-field label="CP" v-model="CPVisiteur"></v-text-field>
    <v-text-field label="Ville" v-model="villeVisiteur"></v-text-field> 
    <v-btn size="large" color="green" @click="majVisiteur" >Modifier</v-btn>
    <v-alert v-show="visibleError" color="error" icon="$error" text="Erreur"></v-alert>
    <v-alert v-show="visibleSuccess" color="success" icon="$success" text="Enregistrement effectué"></v-alert>
</template>
  
  <script>
  export default {
    name: 'FicheMedecinComponent',
    data() {
    return {
      id: this.$store.state.utilisateur.id,
      nomVisiteur: this.$store.state.utilisateur.nom,
      prenomVisiteur: this.$store.state.utilisateur.prenom,
      adresseVisiteur: this.$store.state.utilisateur.adresse,
      CPVisiteur: this.$store.state.utilisateur.cp,
      villeVisiteur: this.$store.state.utilisateur.ville,
      visibleError: false,
      visibleSuccess: false
    };
    },
    methods: {
      majVisiteur() {
      let visiteurModifier = {
    id: this.id,
    nom: this.nomVisiteur,
    prenom: this.prenomVisiteur,
    adresse: this.adresseVisiteur,
    cp: this.CPVisiteur,
    ville : this.villeVisiteur,
  };
      
     this.$store.state.dataService.majVisiteur(visiteurModifier)
    .then((data) => {
      console.log(data);
      this.visibleError = false; 
      this.visibleSuccess = true; 
    })
    .catch((error) => {
      console.log(error);
      this.visibleError = true; 
      this.visibleSuccess = false; 
    })
  
  
  },
},

};
</script>
