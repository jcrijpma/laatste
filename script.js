// Functie om het formulier te valideren
function validateForm() {
    // Selecteer alle invoervelden die vereist zijn
    const projectName = document.getElementById('project-name').value;
    const projectType = document.getElementById('project-type').value;
    const projectPhase = document.getElementById('project-phase').value;
    const keyLesson = document.getElementById('key-lesson').value;
    
    // Controleren of de belangrijkste velden niet leeg zijn
    if (projectName === "" || projectType === "" || projectPhase === "" || keyLesson === "") {
        alert("Vul alle verplichte velden in voordat u het document verzendt.");
        return false; // voorkomt dat het formulier wordt verzonden
    }
    return true; // het formulier wordt verzonden als alle velden zijn ingevuld
}

// Functie om een melding te tonen bij succesvolle verzending
function submitForm(event) {
    // Voorkom dat het formulier op de normale manier wordt ingediend
    event.preventDefault();
    
    // Controleer of de validatie is geslaagd
    if (validateForm()) {
        // Als de validatie is geslaagd, stuur het formulier in
        alert("Document succesvol verzonden!");
        // Hier kun je de werkelijke verzendactie uitvoeren, bijvoorbeeld door een POST-verzoek naar de server te sturen
        document.querySelector("form").submit();
    }
}

// Selecteer het formulier en koppel de submitForm functie aan het verzenden
document.querySelector("form").addEventListener("submit", submitForm);