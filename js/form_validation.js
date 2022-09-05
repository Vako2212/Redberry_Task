function Validate(){
    let error=[];

    let name=document.getElementById('names').value;
    let lastname=document.getElementById('lastname').value;
    let team=document.getElementById('team').value;
    let position=document.getElementById('position').value;
    let mail=document.getElementById('name').value;
    let phone=document.getElementById('phone').value;
    let phone_response=PhoneValidation();
    let mail_response=Mail_Validation();
    let name_response=NameValidation(name);
    let lastname_response=LastnameValidation(lastname);

    if (lastname_response === false){
        document.getElementById('lastname').style.borderColor='red';
        document.getElementById('lastname_label').style.color='red';
        document.getElementById('lastname_label_b').style.color='red';
        error.push(1);
    }
    if (team === ''){
        error.push(1);
        document.getElementById('team').style.borderColor='red';
    }
    if (position === ''){
        error.push(1);
        document.getElementById('position').style.borderColor='red';
    }
    if (mail === '' || mail_response === false){
        error.push(1);
        document.getElementById('name').style.borderColor='red';
        document.getElementById('mail_label_t').style.color='red';
        document.getElementById('mail_labels_b').style.color='red';
    }

    if (phone === '' || phone_response === false){
        error.push(1);
        document.getElementById('phone').style.borderColor='red';
        document.getElementById('phone_label').style.color='red';
        document.getElementById('phone_labels_b').style.color='red';
    }
    if (name_response === false){
        document.getElementById('names').style.borderColor='red';
        document.getElementById('name_label').style.color='red';
        document.getElementById('name_bottom').style.color='red';
        error.push(1);
    }

   if (error.length > 0){
       document.getElementById("personal_headline_2").classList.add('event');
       return  false;
   }else {
       let items={
           'name':name,'lastname':lastname,'team':team,
           'position':position,'mail':mail,'phone':phone
       }
       localStorage.setItem('items', JSON.stringify(items));
       document.getElementById("personal_headline_2").classList.remove('default_state')
       window.location.href="../pages/laptop_info.html";
   }
}

function  Mail_Validation(){
    let mail=document.getElementById('name').value;
    if (mail.includes('@redberry.ge')){
        return  true;
    }else {
       return  false;
    }
}


function PhoneValidation() {
    let phone=document.getElementById('phone').value;
    let phone_regex=(/^(\+?995)?(79\d{7}|5\d{8})$/);
    if (phone.match(phone_regex)){
        return true;
    }else {
        return  false;
    }
}

function  NameValidation(name){
    let letters = (/^[ა-ჰ]+$/);
    if (name.match(letters) && name !== '' && name.length>=2){
        return true;
    }else {
        return  false;
    }
}

function  LastnameValidation(lastname){
    console.log(lastname.length);
    let letters = (/^[ა-ჰ]+$/);
    if (lastname.match(letters) && lastname !== ''  && lastname.length>=2){
        return true;
    }else {
        return false;
    }
}