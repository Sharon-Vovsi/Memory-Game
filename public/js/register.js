/*open game board*/
function openBoardGame() {
    const url = '/index';
    window.open(url);
}
/*-------------------------------------------------------------------*/
const password_input = document.getElementById('password_input')

let changeIcon = function(icon) {
    icon.classList.toggle('fa-eye')

    if (password_input.type === 'password') {
        password_input.type = 'text';
    }
    else {
        password_input.type = 'password';
    }
}