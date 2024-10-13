document.getElementById('loginButton').addEventListener('click', function() {
    var password = document.getElementById('password').value;
    if (password === 'admin123') {
        window.location.href = 'https://ronaldoreemias.github.io/sistema/'; // Substitua pelo link desejado
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.getElementById('loginButton');
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Evita qualquer ação padrão
                loginButton.click(); // Aciona o clique do botão
            }
        });
    });
});
