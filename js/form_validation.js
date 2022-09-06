function Validate() {
    let error = [];

    let name = document.getElementById('names').value;
    let surName = document.getElementById('lastname').value;
    let teamId = document.getElementById('team').value;
    let positionId = document.getElementById('position').value;
    let email = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phone').value;


    let phone_response = PhoneValidation();
    let mail_response = Mail_Validation();
    let name_response = NameValidation(name);
    let lastname_response = LastnameValidation(surName);

    if (lastname_response === false) {
        document.getElementById('lastname').style.borderColor = 'red';
        document.getElementById('lastname_label').style.color = 'red';
        document.getElementById('lastname_label_b').style.color = 'red';
        error.push(1);
    }
    if (teamId === '') {
        error.push(1);
        document.getElementById('team').style.borderColor = 'red';
    }
    if (positionId === '') {
        error.push(1);
        document.getElementById('position').style.borderColor = 'red';
    }
    if (email === '' || mail_response === false) {
        error.push(1);
        document.getElementById('name').style.borderColor = 'red';
        document.getElementById('mail_label_t').style.color = 'red';
        document.getElementById('mail_labels_b').style.color = 'red';
    }

    if (phoneNumber === '' || phone_response === false) {
        error.push(1);
        document.getElementById('phone').style.borderColor = 'red';
        document.getElementById('phone_label').style.color = 'red';
        document.getElementById('phone_labels_b').style.color = 'red';
    }
    if (name_response === false) {
        document.getElementById('names').style.borderColor = 'red';
        document.getElementById('name_label').style.color = 'red';
        document.getElementById('name_bottom').style.color = 'red';
        error.push(1);
    }

    if (error.length > 0) {
        document.getElementById("personal_headline_2").classList.add('event');
        return false;
    } else {
        let personalInfo = {
            name, surName, teamId, positionId, email, phoneNumber
        }
        localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
        document.getElementById("personal_headline_2").classList.remove('default_state')
        window.location.href = "../pages/laptop_info.html";
    }
}

function Mail_Validation() {
    let mail = document.getElementById('name').value;
    if (mail.includes('@redberry.ge')) {
        return true;
    } else {
        return false;
    }
}


function PhoneValidation() {
    let phone = document.getElementById('phone').value;
    let phone_regex = (/^(\+?995)?(79\d{7}|5\d{8})$/);
    if (phone.match(phone_regex)) {
        return true;
    } else {
        return false;
    }
}

function NameValidation(name) {
    let letters = (/^[ა-ჰ]+$/);
    if (name.match(letters) && name !== '' && name.length >= 2) {
        return true;
    } else {
        return false;
    }
}

function LastnameValidation(lastname) {
    console.log(lastname.length);
    let letters = (/^[ა-ჰ]+$/);
    if (lastname.match(letters) && lastname !== '' && lastname.length >= 2) {
        return true;
    } else {
        return false;
    }
}