function SaveData(){
    //./laptops.html
    let error=[];
   let  upload_btn = document.getElementById("upload_btn").value;
   let  laptop_name = document.getElementById("laptop_name").value;
   let  brand = document.getElementById("brand").value;
   let  cpu = document.getElementById("cpu").value;
   let  cpu_core = document.getElementById("cpu_core").value;
   let  cpu_thread = document.getElementById("cpu_thread").value;
   let  ram = document.getElementById("ram").value;
   let  price = document.getElementById("price").value;
   let laptop_validation=LaptopnameValidation(laptop_name);
    validateRadio();
    validateRadio1();

   if (upload_btn === ''){
       error.push(1);
       document.getElementById("img_upload_div").style.borderColor='red';
       document.getElementById("img_upload_div").style.backgroundColor='#FFF1F1';
       document.getElementById("warning").classList.remove('d-none');
   }

    if (brand === ''){
        error.push(1);
        document.getElementById("brand").style.borderColor='red';
    }

    if (cpu === ''){
        error.push(1);
        document.getElementById("cpu").style.borderColor='red';
    }

    if (cpu_core === ''){
        error.push(1);
        document.getElementById("cpu_core").style.borderColor='red';
    }
    if (cpu_thread === ''){
        error.push(1);
        document.getElementById("cpu_thread").style.borderColor='red';
    }
    if (ram === ''){
        error.push(1);
        document.getElementById("ram").style.borderColor='red';
    }
    if (price === ''){
        error.push(1);
        document.getElementById("price").style.borderColor='red';
    }

   if (laptop_validation === false){
       error.push(1);
   }

    console.log(error)
}

function LaptopnameValidation(name){
    if (name === ''){
        document.getElementById("laptop_name").style.borderColor='red';
        return  false;
    }
    let regex=/^[A-Za-z0-9\!\@\#\$\%\^\&\*\)\(+\=\._-]+$/g;
    if (name.match(regex)){
        return true;
    }else {
        document.getElementById("laptop_name").style.borderColor='red';
        return  false;
    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function validateRadio() {
    var radios = document.getElementById("flexRadioDefault2");
    var radioValid = false;

    var i = 0;
    while (!radioValid && i < radios.length) {
        if (radios[i].checked) radioValid = true;
        i++;
    }

    if (!radioValid) document.getElementById('radio').classList.add('radio_div');
    return radioValid;
}

function validateRadio1() {
    var radios = document.getElementById("second_radio");
    var radioValid = false;

    var i = 0;
    while (!radioValid && i < radios.length) {
        if (radios[i].checked) radioValid = true;
        i++;
    }

    if (!radioValid) document.getElementById('radios').classList.add('radio1_div');
    return radioValid;
}
