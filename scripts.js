function ex_01(){
    var nome = document.getElementById("nome").value;
    document.getElementById("info").innerText=nome;
}

function ex_02(){
    var valor=document.getElementById("volume").value;
    document.getElementById("info").innerText=valor;
}
function ex_03(){
     var text=document.getElementById("comentarios").value;
     var resto =150-text.length;

        document.getElementById("info").innerText= `Restam ${resto} caracteres.`
}

function bu_01(){
    var nome = document.getElementById("nome").value;
    document.getElementById("info").innerText=nome;
}

function bu_02(){
    
}