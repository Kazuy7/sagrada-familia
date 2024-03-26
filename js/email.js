// function enviarEmail() {
//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('senha').value;
//     const mensagem = document.getElementById('mensagem').value;

//     if (!nome || !email || !senha) {
//       alert("Todos os campos são obrigatórios.");
//       return;
//     }

//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: email,
//       Password: senha,
//       To: "lucas.goliveirass@gmail.com",
//       From: email,
//       Subject: "Contato através do formulário",
//       Body: "Nome: " + nome + "<br>"
//             + "E-mail: " + email + "<br>"
//             + "Mensagem: " + mensagem
//     }).then(function(message) {
//       alert("Mensagem enviada com sucesso!");
//     });
//   }


function enviarEmail() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (!nome || !email || !senha) {
        alert("Todos os campos são obrigatórios.");
        return;
    }
    
    Email.send({
        Host: "smtp.gmail.com",
        Username: email,
        Password: senha,
        To: "lucas.goliveirass@gmail.com",
        From: email,
        Subject: "Contato através do formulário",
        Body: "Nome: " + nome + "<br>"
            + "E-mail: " + email + "<br>"
            + "Mensagem: " + mensagem
    }).then(function (message) {
        alert("Mensagem enviada com sucesso!");
    });
}