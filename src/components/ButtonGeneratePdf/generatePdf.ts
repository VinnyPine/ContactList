import { Client, Contact } from "../../types";
import { getDate } from "../../utils";

export const generatePdf = (user: Client, contacts: Contact[]) => {
  const pdf = window.open("", "", "width=720,height=900");

  pdf?.document.write(`
    <html>
      <head>
        <title>Relatório contatos</title>
        <style>
          body > div {
            display: flex;
            gap: 20px;
            height: 0;
            display: flex;
            gap: 10px;
            font-size: 15px;
            align-items: center;
          }

          body ul {
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 0 2px;
          }

          body ul li {
            padding: 12px 0;
            display: flex;
            align-items: center;
            gap: 4px;
            height: 0;
          }

          h2 {
            font-size: 15px;
          }

        </style>
      </head>
      <body>
        <h3>Perfil</h3>
        <div>
          <h4>Nome: ${user.firstName} ${user.lastName}</h4>
          <p>Email: ${user.email}</p>
          <p>Telefone: ${user.phone}</p>
          <p>Criado em: ${getDate(user.createdAt)}</p>
        </div>
        <hr>
        <h3>Contatos</h3>
        <ul>
  `);

  contacts.forEach((contact) => {
    pdf?.document.write(`
        <li>
          <h4>Nome: ${contact.firstName} ${contact.lastName}</h4>
          <p>Email: ${contact.email}</p>
          <p>Telefone: ${contact.phone}</p>
          <p>Criado em: ${getDate(contact.createdAt)}</p>
        </li>
    `);
  });

  pdf?.document.write(`
          </ul>
    </body>
    </html>
  `);
  pdf?.document.close();

  pdf?.print();
};
