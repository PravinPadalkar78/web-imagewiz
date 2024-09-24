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