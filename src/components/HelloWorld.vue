<template>
  <v-card width="400">
    <v-card-text> login </v-card-text>
    <v-text-field 
      v-model="login" 
      label="">
    </v-text-field>
    <v-card-text> mdp </v-card-text>
    <v-text-field 
      v-model="mdp"
      type="password" 
      label=""></v-text-field>
    <v-btn @click="loginfun">CONTINUER</v-btn>
    <v-alert v-show="visibleError" color="error" icon="$error" text="Les identifiants saisies sont invalides"></v-alert>
    <v-alert v-show="visibleSuccess" color="success" icon="$success" text="Connexion réussie"></v-alert>
  </v-card>

</template>
<script>
  import DataService from '@/services/DataService'

  var dataService = new DataService(); //Instanciation de l'objet de type DataService
  export default {
    name: "PageDeConnexion",
    data() {
      return {
        login: "",
        mdp: "",
        visibleError: false,
        visibleSuccess: false
      }
    },
    methods: {
      loginfun() {
        this.visibleError = false; 
        this.visibleSuccess = false; 

        // Appel au dataservice pour interroger l'API
        dataService.getVisiteur(this.login,this.mdp)
        // Si succès, on stocke les données de l'utilisateur
        // dans le store, puis on redirige vers la page d'accueil
        .then(
          (data)=>{
            // Enregistrement dans le store, dans la variable utilisateur
            this.$store.state.utilisateur = data;
            //Log retour dans la console
            console.log(data);
            this.$router.push({ path: '/accueil' })
        })
        //Sinon, on affiche la banière d'erreur
        .catch(
          (error)=>{
            // Log erreur dans la console
            console.log(error);
            this.visibleError = true;
          })
      }
    }
  }
</script>