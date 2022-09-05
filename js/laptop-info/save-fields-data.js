window.onload = function () {
    const ssdRadioId = 'flexRadioDefault1';
    const hddRadioId = 'flexRadioDefault2';

    const newRadioId = "flexRadioDefault3";
    const usedRadioId = "flexRadioDefault4";
    setDefaultRadioValues(ssdRadioId, hddRadioId,newRadioId,usedRadioId);
    // save field
    document.querySelectorAll("input").forEach(input => {
        if (input.type === "file") return;
        input.addEventListener("change", () => {
            if(input.type === "radio") {
                if(input.name==="condition") {
                    localStorage.setItem(newRadioId, input.id === newRadioId);
                    localStorage.setItem(usedRadioId, input.id === usedRadioId);

                }
                if(input.name==="flexRadioDefault") {
                localStorage.setItem(ssdRadioId, input.id === ssdRadioId);
                localStorage.setItem(hddRadioId, input.id === hddRadioId);
                }
                
                return;
            }
            localStorage.setItem(input.id, input.value);
        })
    });

    // recovery field
    document.querySelectorAll("input").forEach(input => {
        if (input.type === "file") return;
       

        if(input.type === "radio") {
            input.checked = localStorage.getItem(input.id) === "true";
            return;
        }
        const value = localStorage.getItem(input.id);
        if (value != null) input.value = value;
    });
};


function setDefaultRadioValues(ssdRadioId, hddRadioId,newRadioId,usedRadioId) {
    if(localStorage.getItem(ssdRadioId) == null && localStorage.getItem(hddRadioId) == null) {
        localStorage.setItem(ssdRadioId, false);
        localStorage.setItem(hddRadioId, true);    
    }

    if(localStorage.getItem(newRadioId) == null && localStorage.getItem(usedRadioId) == null) {
        localStorage.setItem(newRadioId, false);      
        localStorage.setItem(newRadioId, true);
    }
}

function onFormSubmit() {


    // on success from backend
    showModal()


}



function showModal() {
    const bodyElement = document.querySelector('body');
    const modalBackdrop = document.querySelector('.backdrop');
    bodyElement.classList.add('hidden_overflow');
    modalBackdrop.classList.add('set_visible');

    addButtonEvents();
}

function addButtonEvents() {
    const goToList = document.querySelector('#go_to_list');
    const mainPage = document.querySelector('#main_page');
    goToList.addEventListener('click', () => window.location.href = "./laptops.html");
    mainPage.addEventListener('click', () => window.location.href = "../index.html");
}