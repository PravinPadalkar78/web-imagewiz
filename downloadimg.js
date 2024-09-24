//function for downloading filtered image 
function downloadBtn() {
    let img = document.querySelector(".display_image");
    let canvas = document.getElementById("myCanva");
    let ctx = canvas.getContext("2d");


    canvas.width = img.width;
    canvas.height = img.height;

    ctx.filter = computedValue;
    // Draw the image onto the canvas with the applied filters
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute with a filename
    link.download = 'filtered-image.png';

    // Convert canvas to Data URL and set as href attribute
    link.href = canvas.toDataURL('image/*');

    // Trigger the download
    link.click();
    alert("Download succesfull!!!")
}