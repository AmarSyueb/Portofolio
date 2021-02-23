function changeColor(num){
    var main = document.getElementsByClassName("navlink")[num].id
    for(i=0; i<document.getElementsByClassName("navlink").length; i++){
        if(i==num){
            document.getElementById(main).style.backgroundColor="rgb(99,0,0)"
        }else{
            var temp = document.getElementsByClassName("navlink")[i].id
            document.getElementById(temp).style.backgroundColor="transparent"
        }
    }

}

function popUp(num){
    document.getElementById("photopop").style.display="inline"
    document.getElementById("popupimg").src="image/team"+num+".jpg"
}

function popOut(){
    document.getElementById("photopop").style.display="none"
}