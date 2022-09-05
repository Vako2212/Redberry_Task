function postDetailedPageData(data) {
    const token = 'a9b1896d9172a304fc5c48f91cb4d4ca';
    fetch('https://pcfy.redberryinternship.ge/api/laptop/create', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
}