console.log("testing");
function InputRed(event){
    let Red = document.getElementById("Red").value
    return Red;
}
function InputGreen(event){
    let Green = document.getElementById("Green").value
    return Green;
}
function InputBlue(event){
    let Blue = document.getElementById("Blue").value
    return Blue;
}
function ReplaceColor(){
   let RainbowCube = document.getElementById("RainbowCube");
   console.log(RainbowCube);
   RainbowCube.style.backgroundColor = 'rgb('+InputRed() + ", " + InputGreen() + ", " + InputBlue() + ')'; 
   console.log("RainbowCube New color: "+InputRed() + " " + InputGreen() + " " + InputBlue());
}
ReplaceColor();