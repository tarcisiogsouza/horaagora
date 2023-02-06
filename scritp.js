
function carregar(){
var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 12
msg.innerHTML = `Agora são ${hora} horas!`

if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'Imagens/fotomanha.jpg'
        document.body.style.background = '#FFFACD'
        
    
    } else if( hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'Imagens/fototarde.jpg'
        document.body.style.background = '#00BFFF'   
}else {
       //BOA NOITE
        img.src = 'Imagens/fotonoite.jpg'   
        document.body.style.background = '#191970'  
}
}