
window.onload = function () {

    fetch('https://pcfy.redberryinternship.ge/api/laptops?token=a9b1896d9172a304fc5c48f91cb4d4ca', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        let response = JSON.parse(JSON.stringify(data["data"]));
        response.forEach((name) => {
            document.querySelector('#pc_info').innerHTML += (`
            <div class="col ms-3 d-flex justify-content-start" id="second_laptop_div">
                       <div id="patops_img">
                           <img src="../img/pc.png">
                       </div>
                       <div class="d-block ms-4 mt-4">
                           <div class="mt-4 ms-2">
                               <span id="leptop_author_name">${name.user.name}</span>
                           </div>
                           <div class="mt-4 ms-2">
                               <span id="leptop_author_pc">${name.laptop.name}</span>
                           </div>
                           <div class="mt-4 ms-2">
                               <a href="./leptops_detail.html" id="read_more">მეტის ნახვა</a>
                           </div>
                       </div>

                   </div>
            `);
        });

    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
}