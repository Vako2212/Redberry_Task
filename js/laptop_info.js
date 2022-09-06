function saveData() {
    let error = [];
    let upload_btn = document.getElementById("upload_btn").value;
    let laptop_name = document.getElementById("laptop_name").value;
    let brand = document.getElementById("brand").value;
    let cpu = document.getElementById("cpu").value;
    let cpu_core = document.getElementById("cpu_core").value;
    let cpu_thread = document.getElementById("cpu_thread").value;
    let ram = document.getElementById("ram").value;
    let price = document.getElementById("price").value;
    let laptop_validation = laptopNameValidation(laptop_name);
    let hardDriveType = getHardDriveType();


    if (upload_btn === '') {
        error.push(1);
        document.getElementById("img_upload_div").style.borderColor = 'red';
        document.getElementById("img_upload_div").style.backgroundColor = '#FFF1F1';
        document.getElementById("warning").classList.remove('d-none');
    }

    if (brand === '') {
        error.push(1);
        document.getElementById("brand").style.borderColor = 'red';
    }

    if (cpu === '') {
        error.push(1);
        document.getElementById("cpu").style.borderColor = 'red';
    }

    if (cpu_core === '') {
        error.push(1);
        document.getElementById("cpu_core").style.borderColor = 'red';
    }
    if (cpu_thread === '') {
        error.push(1);
        document.getElementById("cpu_thread").style.borderColor = 'red';
    }
    if (ram === '') {
        error.push(1);
        document.getElementById("ram").style.borderColor = 'red';
    }
    if (price === '') {
        error.push(1);
        document.getElementById("price").style.borderColor = 'red';
    }

    if (laptop_validation === false) {
        error.push(1);
    }

    console.log(error)

    if (error.length > 0) return;

    const personalInfo = getPersonalInfoFromLocalStorage();

    postDetailedPageData({
        laptopName: laptop_name,
        laptopImage: upload_btn,
        laptopBrandId: brand,
        laptopCpu: cpu,
        laptopCpuCores: cpu_core,
        laptopCpuThreads: cpu_thread,
        laptopRam: ram,
        laptopHardDriveType: hardDriveType,
        laptopState: 'new',
        laptopPurchaseDate: '2021-05-05',
        laptopPrice: price,
        email: personalInfo.email,
        phoneNumber: personalInfo.phoneNumber,
        name: personalInfo.name,
        surName: personalInfo.surName,
        teamId: personalInfo.teamId,
        positionId: personalInfo.positionId,

    }).then((res) => {
        if (res.status >= 400) {
            alert("Error while sending create request")
            return;
        }
        showModal();
    }).catch(() => {
        alert("Error while sending create request");
    });


}

function laptopNameValidation(name) {
    if (name === '') {
        document.getElementById("laptop_name").style.borderColor = 'red';
        return false;
    }
    let regex = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\)\(+\=\.\_\- ]+$/g;
    if (name.match(regex)) {
        return true;
    } else {
        document.getElementById("laptop_name").style.borderColor = 'red';
        return false;
    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function getPersonalInfoFromLocalStorage() {
    return JSON.parse(localStorage.getItem('personalInfo'));
}

function getHardDriveType() {
    let hardDriveType = document.getElementsByName('flexRadioDefault');
    const isSsd = hardDriveType[0].checked;
    const isHdd = hardDriveType[1].checked;

    return isSsd ? 'SSD' : 'HDD';
}