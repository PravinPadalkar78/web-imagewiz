
//function for file loading
window.onload = async function () {
    const image_input = document.querySelector("#image_input");
    let uploaded_img = "";
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


//function for cropping image
async function cropBtn() {
   
    // let cropImg = document.querySelector('.Image_cropped');
    // let cropper;

    // if (cropper) {
    //     cropper.destroy(); // Destroy the previous cropper instance
    // }

    // cropper =await new Cropper(cropImg, {
    //     viewMode: 1,
    //     responsive: true,
    //     autoCropArea: 1, // Ensure the crop area covers the entire image
    //     movable: true,
    //     zoomable: true,
    //     scalable: true,
    //     cropBoxResizable: true,
    //     cropBoxMovable: true,
    //     // Set initial crop box data to match the entire image
    //     data: {
    //         x: 0,
    //         y: 0,
    //         width: cropImg.width,
    //         height: cropImg.height
    //     }
    // });
    // const canvas = cropper.getCroppedCanvas();
    // console.log(cropper)
    // cropImg.src = canvas.toDataURL();
    alert("Currantly Working On it");
}

