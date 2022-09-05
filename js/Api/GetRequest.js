


// $(document).ready(function () {
//     // let token ='a9b1896d9172a304fc5c48f91cb4d4ca';
//     fetch('https://pcfy.redberryinternship.ge/api/teams', {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//             // 'Authorization': `Bearer ${token}`
//         }
//     }).then(function (response) {
//         if (response.ok) {
//             return response.json();
//         }
//         return Promise.reject(response);
//     }).then(function (data) {
//         let response = JSON.parse(JSON.stringify(data["data"]));
//         response.forEach((name) => {
//             $('.teams-list').append(`<option value="${name.id}">${name.name}</option>`);
//         });

//     }).catch(function (error) {
//         console.warn('Something went wrong.', error);
//     });
// });

// $(document).ready(function () {

//     fetch('https://pcfy.redberryinternship.ge/api/positions', {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',

//         }
//     }).then(function (response) {
//         if (response.ok) {
//             return response.json();
//         }
//         return Promise.reject(response);
//     }).then(function (data) {
//         let response = JSON.parse(JSON.stringify(data["data"]));
//         response.forEach((name) => {
//             $('.positions-list').append(`<option value="${name.id}">${name.name} </option>`);
//         });
//         localStorageFormHandler();

//     }).catch(function (error) {
//         console.warn('Something went wrong.', error);
//     });
// });

// $(document).ready(function () {

//     fetch('https://pcfy.redberryinternship.ge/api/brands', {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     }).then(function (response) {
//         if (response.ok) {
//             return response.json();
//         }
//         return Promise.reject(response);
//     }).then(function (data) {
//         let response = JSON.parse(JSON.stringify(data["data"]));
//         response.forEach((name) => {
//             $('.brands-list').append(`<option value="${name.id}">${name.name} </option>`);
//         });

//     }).catch(function (error) {
//         console.warn('Something went wrong.', error);
//     });
// });

// $(document).ready(function () {

//     fetch('https://pcfy.redberryinternship.ge/api/cpus', {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     }).then(function (response) {
//         if (response.ok) {
//             return response.json();
//         }
//         return Promise.reject(response);
//     }).then(function (data) {
//         let response = JSON.parse(JSON.stringify(data["data"]));
       
//         response.forEach((name) => {
//             $('.cpus-list').append(`<option value="${name.name}">${name.name} </option>`);

//         });


//     }).catch(function (error) {
//         console.warn('Something went wrong.', error);
//     });
// });


// function localStorageFormHandler() {
//     //save
//     document.querySelectorAll(".form-select").forEach((form, idx) => {
//         if (idx > 1) return;

//         form.addEventListener("change", function () {
//             localStorage.setItem(form.id, form.value);
//         });
//     })

//     //restore
//     document.querySelectorAll(".form-select").forEach((form, idx) => {
//         if (idx > 1) return;
//         const indexOfOption = localStorage.getItem(form.id);
        
//         // debugger;
//         if (indexOfOption != null) {
//             form.value = indexOfOption;

//         }

//     });

// }