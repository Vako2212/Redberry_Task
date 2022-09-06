const image_input = document.querySelector("#upload_btn");
const accessToken="ae4dc40709e6cb18b63810a1dfe5a8eb";

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#image_src").setAttribute('src',uploaded_image);
        document.querySelector("#again").classList.remove('d-none');
        $("#upload_btn").hide();
        $("#img_text_div").hide();
        $("#warning").hide();
    });
    reader.readAsDataURL(this.files[0]);
});


const image_inputs = document.querySelector("#again_upload_btn");

image_inputs.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#image_src").setAttribute('src',uploaded_image);

        $("#upload_btn").hide();
        $("#img_text_div").hide();

    });
    reader.readAsDataURL(this.files[0]);
});


const fileInput = document.getElementById('upload_sm_file');

const images =  document.querySelectorAll('.image_src_mb');

fileInput.addEventListener('change', (e) =>{
    const file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function (){
        images[0].setAttribute('src', fileReader.result);

    }
})