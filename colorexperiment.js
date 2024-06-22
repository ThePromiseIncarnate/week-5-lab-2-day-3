function favoriteColour() {
    let colourName = prompt("What is your favorite color?");
    colourTitle.style.color = colourName;
    colourText.style.color = colourName;
    colourText.innerHTML = `Now this text is ${colourName}!`;
}

function randomColour() {
    //let debug = prompt("Test")
    let colourHue = Math.floor(Math.random() * 360);
    let colourHuePage = (colourHue + 180) % 360;
    let colourSaturation = Math.floor(Math.random() * 100) + "%"; 
    let colourSaturationPage = (Math.floor(Math.random() * 100)) + "%"; 
    let colourLight = Math.floor(Math.random() * 100) + "%";
    let colourLightPage = (Math.floor(Math.random() * 100)) + "%";
    //colourTitle.style.color = `rgb(100, 100, 100)`
    colourTitle.style.color = `hsl(${colourHue}, ${colourSaturation}, ${colourLight})`;
    colourText.style.color = `hsl(${colourHue}, ${colourSaturation}, ${colourLight})`;
    colourPage.style.backgroundColor = `hsl(${colourHuePage}, ${colourSaturationPage}, ${colourLightPage})`;
}

favoriteColourButton.onclick = favoriteColour
randomColourButton.onclick = randomColour