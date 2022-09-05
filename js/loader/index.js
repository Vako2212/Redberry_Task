const loaderContainer = document.querySelector('.loader-container');
const documentBody=document.querySelector('body');

function enableLoading() {
    documentBody.style.overflow = 'hidden';
    loaderContainer.style.display = 'flex';
}

function disableLoading() {
    documentBody.style.overflow = 'initial';
    loaderContainer.style.display = 'none';
}