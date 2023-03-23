const users = []; // Array para armazenar os usuários cadastrados

// Função para cadastrar um novo usuário
function signUp(name, email, password) {
    const newUser = {
        name: name,
        email: email,
        password: password
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users)); // Armazena os usuários no localStorage
}

// Função para autenticar o login
function logIn(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Bem-vindo(a), ${user.name}!`);
        window.location.href = 'loja.html'; // Redireciona para o site principal
    } else {
        alert('E-mail ou senha incorretos.');
    }
}

// Adiciona os eventos de envio dos formulários
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    signUp(name, email, password);
    alert('Cadastro realizado com sucesso!');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    logIn(email, password);
});

// Recupera os usuários cadastrados do localStorage, se existirem
if (localStorage.getItem('users')) {
    users.push(...JSON.parse(localStorage.getItem('users')));
}
