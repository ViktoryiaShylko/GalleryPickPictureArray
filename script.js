function onSelectImage (url) {
    document.getElementById("mainImage").src = url;
}

document.addEventListener("DOMContentLoaded", function () {
    let urls = ["/images/bird1.jpeg", "/images/bird2.jpeg", "/images/bird3.jpeg", "/images/bird4.jpeg", "/images/bird5.jpeg"];

    let optionsString = "";
    for (let url of urls) {
        optionsString += `<img src = '${url}' class='image' onClick='onSelectImage("${url}");'>`;
    }
    document.getElementById("container").innerHTML = optionsString;
});