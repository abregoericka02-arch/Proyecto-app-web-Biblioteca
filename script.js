document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');
    const btnRegistrar = document.getElementById('btn-registrar');

    // Manejo del evento de inicio de sesión
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const usuario = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value.trim();

        if (usuario && password) {
            alert(`¡Bienvenido/a, ${usuario}!`);
            // Aquí agregaremos luego la redirección al panel principal
        }
    });

    // Evento para el botón de registrar
    btnRegistrar.addEventListener('click', () => {
        alert('Función de registro próximamente...');
    });
});