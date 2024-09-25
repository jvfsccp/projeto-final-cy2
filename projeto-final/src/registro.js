document
  .getElementById("registroForm") // Mudei aqui para se referir ao formulário
  .addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("name").value; // Corrigido para pegar o nome do campo correto
    const usuario = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;
    const senhaConfirmacao =
      document.getElementById("confirmation-senha").value;
    const email = document.getElementById("email").value;

    // Verificação de senhas
    if (senha !== senhaConfirmacao) {
      alert("Senhas diferentes, tente novamente");
      return; // Retorna se as senhas não forem iguais
    }

    const usuarioObj = { nome, usuario, email, senha };

    // Armazenando no localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(usuarioObj);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuário registrado com sucesso!");
    document.getElementById("registroForm").reset(); // Reseta o formulário corretamente
  });