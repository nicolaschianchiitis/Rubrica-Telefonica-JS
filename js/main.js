contatto = {
    nome: "",
    cognome: "",
    numero: ""
};

let rubrica = [];

function preparaInput(){
    let campoInput = document.getElementById("input");

    let inputNome = document.createElement("input");
    inputNome.type = "text";
    inputNome.id = "inputNome";
    inputNome.placeholder = "Nome";
    campoInput.appendChild(inputNome);
    campoInput.innerHTML += " ";

    let inputCognome = document.createElement("input");
    inputCognome.type = "text";
    inputCognome.id = "inputCognome";
    inputCognome.placeholder = "Cognome";
    campoInput.appendChild(inputCognome);
    campoInput.innerHTML += " ";

    let inputNumero = document.createElement("input");
    inputNumero.type = "text";
    inputNumero.id = "inputNumero";
    inputNumero.style.width = "20%";
    inputNumero.placeholder = "Numero di telefono (senza prefisso e senza spazi)";
    campoInput.appendChild(inputNumero);
    campoInput.innerHTML += " ";

    let conferma = document.createElement("button");
    conferma.id = "conferma";
    conferma.innerHTML = "Conferma";
    campoInput.appendChild(conferma);
}

function checkIns(){
    const nome = document.getElementById("inputNome").value;
    const cognome = document.getElementById("inputCognome").value;
    const numero = document.getElementById("inputNumero").value;
    let flag;
    if (nome.length > 0 && cognome.length > 0 &&
        numero.length > 0 && numero.length == 10){
            flag = true;
        }
    else{
        flag = false;
    }

    if (!flag){
        document.getElementById("msg").innerHTML = "<i style=\"color:red\">Input non valido</i>";
    } else{
        rubrica.push(
            {nome, cognome, numero}
        );
        document.getElementById("msg").innerHTML = "<i>Contatto aggiunto correttamente!</i>";
    }
}

function checkRim(){
    const nome = document.getElementById("inputNome").value;
    const cognome = document.getElementById("inputCognome").value;
    let flag;
    if (nome.length > 0 && cognome.length > 0){
        flag = true;
    }
    else{
        flag = false;
    }

    if (!flag){
        document.getElementById("msg").innerHTML = "<i style=\"color:red\">Input non valido</i>";
    } else{
        let rimosso = undefined;
        for (let i = 0; i < rubrica.length && flag; i++){
            if (rubrica[i]["nome"] == nome && rubrica[i]["cognome"] == cognome){
                rimosso = rubrica.splice(i, 1);
                document.getElementById("msg").innerHTML = "<i>Contatto rimosso correttamente!</i>";
                flag = false;
            }
        }
        if (rimosso == undefined)
            document.getElementById("msg").innerHTML = "<i style=\"color:red\">Contatto non presente</i>";
    }
}

function checkMod(){
    const nomeMod = document.getElementById("nomeMod").value;
    const cognomeMod = document.getElementById("cognomeMod").value;
    const nome = document.getElementById("inputNome").value;
    const cognome = document.getElementById("inputCognome").value;
    const numero = document.getElementById("inputNumero").value;
    let flag;
    if (nomeMod.length > 0 && cognomeMod.length > 0 &&
        nome.length > 0 && cognome.length > 0 &&
        numero.length > 0 && numero.length == 10){
            flag = true;
        }
    else{
        flag = false;
    }

    if (!flag){
        document.getElementById("msg").innerHTML = "<i style=\"color:red\">Input non valido</i>";
    } else{
        let modificato = undefined;
        for (let i = 0; i < rubrica.length && flag; i++){
            if (rubrica[i]["nome"] == nomeMod && rubrica[i]["cognome"] == cognomeMod){
                rubrica[i]["nome"] = nome;
                rubrica[i]["cognome"] = cognome;
                rubrica[i]["numero"] = numero;
                modificato = rubrica[i];
                document.getElementById("msg").innerHTML = "<i>Contatto modificato correttamente!</i>";
                flag = false;
            }
        }
        if (modificato == undefined)
            document.getElementById("msg").innerHTML = "<i style=\"color:red\">Contatto non presente</i>";
    }
}

function inserisciContatto(){
    document.getElementById("msg").innerHTML = "";
    let campoInput = document.getElementById("input");
    campoInput.innerHTML = "";
    preparaInput();
    document.getElementById("conferma").setAttribute("onClick", "checkIns()");
    const nome = document.getElementById("inputNome").value;
    const cognome = document.getElementById("inputCognome").value;
    const numero = document.getElementById("inputNumero").value;
    contatto.nome = nome;
    contatto.cognome = cognome;
    contatto.numero = numero;
}

function eliminaContatto(){
    document.getElementById("msg").innerHTML = "";
    let campoInput = document.getElementById("input");
    campoInput.innerHTML = "";
    preparaInput();
    document.getElementById("conferma").setAttribute("onClick", "checkRim()");
    document.getElementById("inputNumero").remove();
    const nome = document.getElementById("inputNome").value;
    const cognome = document.getElementById("inputCognome").value;
    contatto.nome = nome;
    contatto.cognome = cognome;
}

function modificaContatto(){
    document.getElementById("msg").innerHTML = "";
    let campoInput = document.getElementById("input");
    campoInput.innerHTML = "------ Contatto da modificare ------<br>";
    preparaInput();
    document.getElementById("inputNome").id = "nomeMod";
    document.getElementById("inputCognome").id = "cognomeMod";
    document.getElementById("inputNumero").remove();
    document.getElementById("conferma").remove();
    campoInput.innerHTML += "<br><br>------ Nuove propriet&agrave; del contatto ------<br>";
    preparaInput();
    document.getElementById("conferma").setAttribute("onClick", "checkMod()");
}

function visualizzaContatti(){
    document.getElementById("msg").innerHTML = "";
    let contatti = document.getElementById("contatti");

    contatti.innerHTML = "--------- Elenco contatti ---------<br><br>";
    if (rubrica.length > 0){
        for (let i = 0; i < rubrica.length; i++){
            contatti.innerHTML += rubrica[i]["nome"] + " " + rubrica[i]["cognome"] + ": " + rubrica[i]["numero"] + "<br>";
        }
        contatti.innerHTML += "<br>";
    } else{
        contatti.innerHTML += "[vuoto]<br><br>";
    }
}