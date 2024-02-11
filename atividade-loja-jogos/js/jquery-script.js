//efeito de esconder formulário de cadastro

$(document).ready(function() {
    // Quando o botão for clicado
    $("#toggleSenha").click(function() {
      // Alterna entre os tipos de input (password e text)
      var tipo = $("#senha").attr("type");
      if (tipo === "password") {
        $("#senha").attr("type", "text");
      } else {
        $("#senha").attr("type", "password");
      }

      // Altera o ícone do olho
      var icone = $(this).find("i");
      icone.toggleClass("bi-eye bi-eye-slash");
    });
  });