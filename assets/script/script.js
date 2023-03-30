function liter(x){
    return parseFloat(x) / 1000;
}
function gallon(y){
    return parseFloat(y) / 3785.41;
}

function display(){
    let ml = document.getElementById("mLiter").value;

    document.getElementById("liter").value = liter(ml);
    document.getElementById("gallon").value = gallon(ml);
}
