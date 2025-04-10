
function imageDimension(imageURL, percentage) {
    let img = new Image();
    img.src = imageURL;

    img.onload = function () {
        let newWidth = img.width * (percentage / 100);
        let newHeight = img.height * (percentage /100);

        let imageResized  = document.createElement("img");
        imageResized.src = imageURL;
        imageResized.width = newWidth;
        imageResized.height = newHeight;



        document.body.appendChild(imageResized)

        imageResized.scrollIntoView({behavior: "smooth"})

    };

    img.onerror = function () {
        console.log("Error while trying to load te image")
    };
}