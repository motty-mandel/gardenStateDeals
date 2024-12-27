function getForm() {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
}

function hideForm() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('create-account').style.display = 'none';
    document.getElementById('error').style.display = 'none';
}

function createAccount() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('create-account').style.display = 'flex';
    document.getElementById('error').style.display = 'none';
}

function goBack() {
    document.getElementById('create-account').style.display = 'none';
    document.getElementById('popup').style.display = 'flex';
}

function error() {
    document.getElementById('error').style.display = 'block';
}