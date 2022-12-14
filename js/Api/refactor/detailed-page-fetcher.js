window.onload = fetchAndRenderAllData();


function fetchAndRenderAllData() {
    const laptopId = getLaptopId()
    enableLoading();
    Promise.all([getLaptopDetails(laptopId), getTeams(),getPositions(),getLaptopBrands()]).then((res)=>{
        const laptopDetails=res[0];
        const teamData=res[1];
        const positionsData=res[2];
        const laptopBrands=res[3];
        disableLoading();
        renderAllData(laptopDetails,teamData,positionsData,laptopBrands);
    });
}

function renderAllData(laptopDetails,teamData,positionsData,laptopBrands) {
   
    setTeamsData(laptopDetails,teamData,positionsData);
    setUserData(laptopDetails);
    setCpuData(laptopDetails);
    setLaptopData(laptopDetails,laptopBrands);
    setRestfieldsData(laptopDetails);
    
}

function setTeamsData(laptopDetails,teamData,positionsData){

    const fields = document.querySelectorAll('.dynamicProperty');

        
    fields.forEach((field) => {
        const fieldName = field.getAttribute('name');
       
        if(fieldName==="teamName"){
            
            let teamId=laptopDetails?.user?.team_id;
            let teamName = "";
            
            teamData.forEach((team)=>{
                if(team.id===teamId){
                    teamName=team.name;
                }
            }) 
            field.innerHTML=teamName;
        }
        if(fieldName==="teamPosition"){
            let positionId=laptopDetails?.user?.position_id;
            let positionName = "";
            
            positionsData.forEach((position)=>{
                if(position.id===positionId){
                    positionName=position.name;
                }
            }) 
            field.innerHTML=positionName;
        }

    })
    
}
function setUserData(laptopDetails){
    
    const fields = document.querySelectorAll('.dynamicProperty');
    fields.forEach((field) => {
        if(field.getAttribute('name')==="userName"){
            const firstName=laptopDetails?.user?.name;
            const lastName=laptopDetails?.user?.surname;
            field.innerHTML=firstName+" "+lastName;
        }
        if(field.getAttribute('name')==="email"){
            field.innerHTML=laptopDetails?.user?.email;
        }
        if(field.getAttribute('name')==="mobilePhone"){
            const phoneNumber=laptopDetails?.user?.phone_number
            field.innerHTML=mobilePhoneFormatter(phoneNumber);
        }
    })

}


function setCpuData(laptopDetails){
    const fields = document.querySelectorAll('.dynamicProperty');
    const cpu=laptopDetails?.laptop?.cpu;
    fields.forEach((field) => {
        if(field.getAttribute('name')==="cpuName"){
            field.innerHTML=cpu?.name;
        }
        if(field.getAttribute('name')==="cpuCores"){
            field.innerHTML=cpu?.cores;
        }
        if(field.getAttribute('name')==="cpuThreads"){
            field.innerHTML=cpu?.threads;
        }
  
    })
}

function setLaptopData(laptopDetails,laptopBrands){
    const fields = document.querySelectorAll('.dynamicProperty');
    const laptop=laptopDetails?.laptop;
    fields.forEach((field) => {
        if(field.getAttribute('name')==="laptopName"){
            field.innerHTML=laptop?.name;
        }
        if(field.getAttribute('name')==="laptopBrand"){
            const brandId = laptop.brand_id;
            let brandName = "";
            laptopBrands.forEach((brand)=>{
                if(brand.id===brandId){
                    brandName=brand.name;
                }
            });
            field.innerHTML=brandName;;        }
        if(field.getAttribute('name')==="memoryAmount"){
            field.innerHTML=laptop?.ram;
        }
        if(field.getAttribute('name')==="memoryType"){
            field.innerHTML=laptop?.hard_drive_type;
        }
       
    })
}

function setRestfieldsData(laptopDetails){
    const fields = document.querySelectorAll('.dynamicProperty');
    const laptop=laptopDetails?.laptop;
    fields.forEach((field) => {
        if(field.getAttribute('name')==="laptopCondition"){
            field.innerHTML=laptop?.state;
        }
        if(field.getAttribute('name')==="laptopPrice"){
            field.innerHTML=laptop?.price;
        }
        if(field.getAttribute('name')==="fillDate"){
            field.innerHTML=laptop?.purchase_date;
        }
    })
}
function renderData(data, selector) {
    data.forEach((team) => {
        document.querySelector(selector)
            .innerHTML += (`<option value="${team.id}">
                    ${team.name}
                </option>`);
    });
}


function getTeams() {
    return fetch('https://pcfy.redberryinternship.ge/api/teams', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            // 'Authorization': `Bearer ${token}`
        }
    })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then(response => response.data)
        .catch(function (error) {
            console.warn('Something went wrong.', error);
        });
}


function getPositions() {
    return fetch('https://pcfy.redberryinternship.ge/api/positions', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',


        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
        .then(response => response.data)
        .catch(function (error) {
            console.warn('Something went wrong.', error);
        });


}


function getBrands() {
    return fetch('https://pcfy.redberryinternship.ge/api/brands', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
        .then(response => response.data)
        .catch(function (error) {
            console.warn('Something went wrong.', error);
        });
}


function getCpus() {
    return fetch('https://pcfy.redberryinternship.ge/api/cpus', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
        .then(response => response.data)
        .catch(function (error) {
            console.warn('Something went wrong.', error);
        });
}



function getLaptopDetails(id) {
    return fetch(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${accessToken}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
        .then(response => response.data)
        .catch(function (error) {
            console.warn('Something went wrong.', error);
        });
}

function getLaptopBrands(){
    return fetch('https://pcfy.redberryinternship.ge/api/brands', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
        .then(response => response.data)
        .catch(function (error) {
            console.warn('Something went wrong.', error);
        });
}

function mobilePhoneFormatter(phoneNumber){
    return phoneNumber.replace(/(\+)?(995)?(\d{3})((?:\d{2})+)/g, (match, plus, g1, g2, g3) => {
        let str = '';
        if(plus) str += plus;
        if(g1) str += `(${g1}) `;
        const g3Formated = g3.replace(/\d{2}/g, (match, index) => {
            if(index) {
               return `-${match}` 
            }
            return match
        });
        return `${str}${g2}-${g3Formated}`
    })
}

function getLaptopId(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}