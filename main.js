
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `<strong> Agora são ${hora} horas e ${minuto} minutos. </strong>` 
    if (hora >=5 && hora <= 12){
        img.innerHTML = '<img src="manha.png">'
        document.body.style.backgroundColor = '#bddce7'
    }else if(hora > 12 && hora < 18){
        img.innerHTML = '<img src="tarde.png">'
        document.body.style.backgroundColor = '#f96501'
    }else{
        img.innerHTML = '<img src="noite.png">'
        document.body.style.backgroundColor = '#203940'
    }
}

