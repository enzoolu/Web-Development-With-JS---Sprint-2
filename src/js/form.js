document.getElementById('confirmar').addEventListener('click', e => {
    e.preventDefault();

    form();
});

function form() {
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    sessionStorage.setItem('nome', nome);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('senha', senha);

    if (nome.length < 3 || nome == '') {
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Preencha o nome corretamente',
                icon: 'error'
            });
    } else if (email == '' || email.indexOf('@')==-1 || email.indexOf('.')==-1 ) {
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Preencha o email corretamente',
                icon: 'error'
            });
    } else if (senha == '') {
        Swal.fire(
            {
                title: 'Erro:',
                text: 'Preencha a senha corretamente',
                icon: 'error'
            });
    } else {
        Swal.fire(
            {
                title: 'Dados Salvos',
                icon: 'success'
            });

            setTimeout(function() {
                window.open('./src/assets/pages/login.html');
            }, 1750);
    };
};