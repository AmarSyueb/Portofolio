function changeColor(a){
    var banyak = document.getElementsByClassName("navlink").length
    var text = document.getElementsByClassName("navlink")[a].id
    console.log(window.pageYOffset)
    for(i=0; i<banyak; i++){
        if(document.getElementsByClassName("navlink")[i].id == text){
            document.getElementById(text).style.backgroundColor="rgb(99, 0, 0)"
        }else{
            var temp = document.getElementsByClassName("navlink")[i].id
            document.getElementById(temp).style.backgroundColor="transparent"
        }
    }
}

function popUp(num){
    document.getElementById("photopop").style.display="inline"
    if(num == 0){
        document.getElementById("imgprop").src="image/foto.jpg"
    }else{
        document.getElementById("imgprop").src="image/team"+num+".jpg"
    }
    
}

function popOut(){
    document.getElementById("photopop").style.display="none"
}

window.onscroll = function(){
    var nav1 = document.getElementById("linkhome")
    var nav2 = document.getElementById("linkabout")
    var nav3 = document.getElementById("linkproduct")
    var nav4 = document.getElementById("linkteam")
    var nav5 = document.getElementById("linkblog")
    var nav6 = document.getElementById("linkcontact")

    if(window.pageYOffset >= 0 && window.pageYOffset<500){
        nav1.style.backgroundColor="rgb(99, 0, 0)"
        nav2.style.backgroundColor="transparent"        
        nav3.style.backgroundColor="transparent"
        nav4.style.backgroundColor="transparent"
        nav5.style.backgroundColor="transparent"
        nav6.style.backgroundColor="transparent"
    }else if(window.pageYOffset >= 500 && window.pageYOffset<1000){
        nav1.style.backgroundColor="transparent"
        nav2.style.backgroundColor="rgb(99, 0, 0)"
        nav3.style.backgroundColor="transparent"
        nav4.style.backgroundColor="transparent"
        nav5.style.backgroundColor="transparent"
        nav6.style.backgroundColor="transparent"
    }else if(window.pageYOffset >= 1000 && window.pageYOffset<1500){
        nav1.style.backgroundColor="transparent"
        nav2.style.backgroundColor="transparent"
        nav3.style.backgroundColor="rgb(99, 0, 0)"
        nav4.style.backgroundColor="transparent"
        nav5.style.backgroundColor="transparent"
        nav6.style.backgroundColor="transparent"
    }else if(window.pageYOffset >= 1500 && window.pageYOffset<2000){
        nav1.style.backgroundColor="transparent"
        nav2.style.backgroundColor="transparent"
        nav3.style.backgroundColor="transparent"
        nav4.style.backgroundColor="rgb(99, 0, 0)"
        nav5.style.backgroundColor="transparent"
        nav6.style.backgroundColor="transparent"
    }else if(window.pageYOffset > 2000 ){
        nav1.style.backgroundColor="transparent"
        nav2.style.backgroundColor="transparent"
        nav3.style.backgroundColor="transparent"
        nav4.style.backgroundColor="transparent"
        nav6.style.backgroundColor="transparent"
        nav5.style.backgroundColor="rgb(99, 0, 0)"
    }
}