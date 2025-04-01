function mudarNome(){
    let changeName = document.querySelectorAll("h4");
    for(let i=0; i < changeName.length; i++){
        changeName[i].innerHTML = "CURSO";
    }
}
mudarNome();