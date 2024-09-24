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