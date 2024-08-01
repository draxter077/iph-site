export default function aboutUs(){
    const aboutUsDiv = document.getElementsByClassName("aboutUsDiv")[0]
    if(aboutUsDiv.style.maxHeight == "200px"){
        aboutUsDiv.style.maxHeight = "0px";
    }
    else{
        aboutUsDiv.style.maxHeight = "200px";
    }
}