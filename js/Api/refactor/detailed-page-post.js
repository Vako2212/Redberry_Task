function postDetailedPageData(data) {

    const formData = new FormData();

    let image = document.querySelector('input[type="file"]');


    formData.append('name', data.name);
    formData.append('surname', data.surName);
    formData.append('team_id', data.teamId);
    formData.append('position_id', data.positionId);
    formData.append('email', data.email);
    formData.append('phone_number', data.phoneNumber);
    formData.append('token', accessToken);
    formData.append("laptop_image", image.files[0]);
    formData.append('laptop_name', data.laptopName);
    formData.append('laptop_brand_id', data.laptopBrandId);
    formData.append('laptop_cpu', data.laptopCpu);
    formData.append('laptop_cpu_cores', data.laptopCpuCores);
    formData.append('laptop_cpu_threads', data.laptopCpuThreads);
    formData.append('laptop_ram', data.laptopRam);
    formData.append('laptop_hard_drive_type', data.laptopHardDriveType);
    formData.append('laptop_state', data.laptopState);
    formData.append('laptop_purchase_date', data.laptopPurchaseDate);
    formData.append('laptop_price', data.laptopPrice);

    const headers = new Headers();
    headers.append("accept", "application/json");


    return fetch('https://pcfy.redberryinternship.ge/api/laptop/create', {
        method: 'POST',
        headers,
        body: formData,
        redirect: 'follow'
    })
}
