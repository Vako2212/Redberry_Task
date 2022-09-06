window.onload = function () {

    fetch('https://pcfy.redberryinternship.ge/api/laptops?token=' + accessToken, {
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
        response.forEach((laptopData) => {
            document.querySelector('#pc_info').innerHTML += (`
            <div class="col ms-3 d-flex justify-content-start" id="second_laptop_div">
                       <div ">
                           <img class="patops_img" src="https://pcfy.redberryinternship.ge/${laptopData.laptop.image}">
                       </div>
                       <div class="d-block ms-4 mt-4">
                           <div class="mt-4 ms-2">
                               <span id="leptop_author_name">${laptopData.user.name}</span>
                           </div>
                           <div class="mt-4 ms-2">
                               <span id="leptop_author_pc">${laptopData.laptop.name}</span>
                           </div>
                           <div class="mt-4 ms-2">
                               <span  id="${laptopData.laptop.id}" class="read_more" e>მეტის ნახვა</span>
                           </div>
                       </div>

                   </div>
            `);
        });

        document.querySelectorAll(".read_more").forEach((el) => {
            el.addEventListener("click", openLaptopDetails);
        }
    )

    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });


}

function openLaptopDetails(event) {
    window.location.href = "laptop_details.html?id=" + event.target.id;
}