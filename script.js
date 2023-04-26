    window.onload = function(){
    const image_input = document.querySelector("#image_input");
    var uploaded_img = "";

    image_input.addEventListener("change",()=>{
        const reader = new FileReader();
        reader.addEventListener("load",()=>{
            uploaded_img = reader.result;
            document.querySelector(".display_image").style.backgroundImage = `url(${uploaded_img})`;
        })
        reader.readAsDataURL(image_input.files[0]);
    
    });

   
    }
    const image = document.querySelector(".display_image");
    var filterControls = document.querySelectorAll('input[type=range]');
    
    function applyFilter(){
        var computedValue = "";
        filterControls.forEach(function(item){
        computedValue += item.getAttribute('data-filter') + "(" + item.value + item.getAttribute('data-scale') +") " ;
        });
        image.style.filter = computedValue;
        console.log(computedValue);
        
    };