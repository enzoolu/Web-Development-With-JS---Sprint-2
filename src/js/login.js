document.getElementById('entrar').addEventListener('click', e => {
    e.preventDefault()

    verificarLogin();
});

function verificarLogin() {
    let nomeLogin = document.getElementById('nameLogin').value;
    let emailLogin = document.getElementById('emailLogin').value;
    let senhaLogin = document.getElementById('senhaLogin').value;

    let nomeCadastrado = sessionStorage.getItem('nome');
    let emailCadastrado = sessionStorage.getItem('email');
    let senhaCadastrado = sessionStorage.getItem('senha');

    if (nomeLogin != nomeCadastrado || emailLogin != emailCadastrado || senhaLogin != senhaCadastrado) {
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
            setTimeout(function() {
                indow.open('https://urban-flow.netlify.app');
            }, 1700)
    };
};