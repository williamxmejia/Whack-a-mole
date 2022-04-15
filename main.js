const image = `<img src="mole.jpg" alt="mole" class="elementToFadeInAndOut">`;

function selectData() {
        let mole = document.getElementById(`data-${getRandomInt()}`);

        mole.innerHTML = image;

        if(mole.innerHTML !== ""){
            mole.addEventListener("click", () =>{
                mole.innerHTML ="";
            })
        }

}



function getRandomInt() {
    return Math.floor(Math.random() * 9);
}

getRandomInt();

setInterval(selectData, 3000);
