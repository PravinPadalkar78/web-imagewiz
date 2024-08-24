
//function for file loading
window.onload = function () {
    const image_input = document.querySelector("#image_input");
    var uploaded_img = "";

    image_input.addEventListener("change", () => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploaded_img = reader.result;
            document.querySelector(".display_image").src = `${uploaded_img}`;
        })
        reader.readAsDataURL(image_input.files[0]);

    });


}
const image = document.querySelector(".display_image");
var filterControls = document.querySelectorAll('input[type=range]');
let computedValue = "";

//function for applying filters
function applyFilter() {

    filterControls.forEach(function (item) {
        computedValue += item.getAttribute('data-filter') + "(" + item.value + item.getAttribute('data-scale') + ") ";
    });
    image.style.filter = computedValue;
}
//functions for coping text
function CopyButton() {

    navigator.clipboard.writeText(computedValue).then(() => {
        if (computedValue == "") {
            alert("Please change the values first!!");
        }
        else {
            alert("text copied sucessfully");
        }

    }).catch(err => {
        alert("Could not copy text: ", err);
        console.log(image)
    });
}
//function for downloading filtered image 
function downloadBtn() {
    let img = document.querySelector(".display_image");
    let canvas = document.getElementById("myCanva");
    let ctx = canvas.getContext("2d");
    ctx.filter = computedValue;
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw the image onto the canvas with the applied filters
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute with a filename
    link.download = 'filtered-image.png';

    // Convert canvas to Data URL and set as href attribute
    link.href = canvas.toDataURL('image/avif');

    // Trigger the download
    link.click();
    alert("Download succesfull!!!")
}        