export default class DataService {

    // Fonction qui va permettre d'authentifier un visiteur
    async getVisiteur(unLogin,unMdp){
        // Je passe ici les paramètres de mon appel à l'API
        var params = new URLSearchParams({
            login: unLogin,
            mdp: unMdp
        });
        // Appel de l'API
        var response = await fetch('http://localhost/restGSB/connexion?'+params);
        // Récupération de la réponse, et retour
        var items= await response.json();
        return items;
    }


    // Fonction qui va retourner une liste de médecins selon le nom passé
    // en paramètre. Lien appel API: http://localhost:8080/restGSB/medecins?
    async getMedecins(unMedecin){
        var params = new URLSearchParams({
            nom: unMedecin,
        });
        var response = await fetch ('http://localhost/restGSB/medecins?'+params);
        var items = await response.json();
        return items;
    }
}