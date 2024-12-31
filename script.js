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
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'none';
    document.getElementById('create-account').style.display = 'flex';
    document.getElementById('error').style.display = 'none';
}

function goBack() {
    document.getElementById('create-account').style.display = 'none';
    document.getElementById('popup').style.display = 'flex';
}

function error() {

    const name = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!name || !password) {
        alert("Please fill in all of the fields!");
        return;
    }

    document.getElementById('error').style.display = 'block';
}