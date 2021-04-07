function changeColour(colour) {
    document.body.style.background = colour;
    document.getElementById("colourCode").innerText = colour;
}

function selectColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

function pressHeading() {
    let colour = selectColour();
    console.log(colour);
    changeColour(colour);
}