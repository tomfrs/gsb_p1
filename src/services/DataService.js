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

    async getLesRapports(unId){
        var response = await fetch ('http://localhost/restGSB/rapports/'+unId);
        var items = await response.json();
        return items;
    }

    // Fonction qui va mettre à jour le médecin, via la méthode PUT
    // Lien appel API : http://localhost:8080/restGSB/majMedecin
    async majMedecin(props) {
        var requestOptions = {
            method : "PUT", // On définit la méthode d'envoi
            headers : {
                'Content-type': 'application/json', // On définit le type des données transmises
            },
            body: JSON.stringify(props) // Dans le corps, on ajoute les propriétés sous format JSON
        };
        var item = await fetch('http://localhost/restGSB/majMedecin', requestOptions);
        return item;
    }                                                                                
    
    //Fonction qui va retourner la liste des rapports du visiteur
    //connecté à une date donnée
    //Lien appel API : http://localhost:8080/restGSB/rapports_a_date?
    async getLesRapportsADate(unID,uneDate) {
        var params = new URLSearchParams({
            date: uneDate,
            idVisiteur : unID
        });
        var response = await fetch ('http://localhost/restGSB/rapports_a_date?'+params);
        var items = await response.json();
        return items;
    }

    async majRapport(props){
        console.log(props)
        var requestOptions= {
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(props)
        };
        var item = await fetch('http://localhost/restGSB/majRapports',requestOptions);
        return item;
    }

    async majVisiteur(props){
        var requestOptions = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(props)
        };
        var item = await fetch('http://localhost/restGSB/majVisiteur',requestOptions);
        return item;
    }
}