function displayRandomResto(e) {
    randResto = resto[Math.floor(Math.random() * restoArray.length)];
}

// let bread_crumbs=

var roulette = document.getElementById("roulette")
console.log(roulette)
roulette.addEventListener("click", trigerRoulette)

function trigerRoulette(e){
roulette.classList.add("element-animation")
}
