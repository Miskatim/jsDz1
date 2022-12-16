function kurQ   ()  {
    document.getElementById("burgerA").style.transform = "translate(-10px, 0)";
    document.getElementById("burgerA").style.display = "none";
    document.getElementById("menyFillingLorem").style.transform = "translate(0, 0)";
    document.getElementById("crossIMG").style.display = "block";
}

function kurW   ()  {
    document.getElementById("burgerA").style.display = "block";
    document.getElementById("menyFillingLorem").style.transform = "translate(-120%, 0)";
    document.getElementById("crossIMG").style.display = "none";
    document.getElementById("burgerA").style.position = "absolute";
    document.getElementById("burgerA").style.top = "3%";
    document.getElementById("burgerA").style.left = "3%";
}