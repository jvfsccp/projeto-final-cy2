  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const user = document.getElementById("loginUser").value;
    const senha = document.getElementById("loginSenha").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log("Usuários registrados:", usuarios); // Depuração
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.usuario === user && usuario.senha === senha
    );


    if (usuarioEncontrado) {
        alert("Login realizado com sucesso!");
        window.location.href = "home.html"; // Redireciona para home.html
      } else {
        alert("Falha no login. Verifique suas credenciais.");
      }

    document.getElementById("loginForm").reset();
  });
