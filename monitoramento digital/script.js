// Função para mostrar a mensagem de boas-vindas
function mostrarMensagem() {
    alert("Bem-vindo ao Monitoramento Digital!");
}

// Função para mostrar/esconder o menu dropdown
function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
}

// Função para fechar o dropdown ao clicar fora dele
function closeDropdown(event) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (!dropdownMenu.contains(event.target) && dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
    }
}

// Adiciona os eventos ao carregar o documento
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', toggleDropdown);
    document.addEventListener('click', closeDropdown);
});
