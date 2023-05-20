document.getElementById('entrar').addEventListener('click', e => {
    e.preventDefault()

    verificarLogin();
})

function verificarLogin() {
    let nomeLogin = document.getElementById('nameLogin').value;
    let emailLogin = document.getElementById('emailLogin').value;
    let senhaLogin = document.getElementById('senhaLogin').value;

    if (nomeLogin != sessionStorage.getItem('nome') || emailLogin != sessionStorage.getItem('email') || senhaLogin != sessionStorage.getItem('senha')) {
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Nome, email ou senha incorreto(s)',
                icon: 'error'
            });
    } else {
        Swal.fire(
            {
                title: 'Bem-Vindo(a)',
                text: 'Bem-Vindo(a) à Urban Flow',
                icon: 'success'
            });
        window.open('https://urban-flow.netlify.app')
    }
}