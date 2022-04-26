
"use strict";

// carregar un sol arxiu

const uploadPost = (req, res) => {
  try {
    if (!req.files) {
      res.status(400).json({ message: "File not uploaded !!" });// arxiu no carregat
    } else {
      // Es fa servir el nom del camp d'entrada (és a dir, "avatar") per a recuperar l'arxiu carregat
      let avatar = req.files.avatar;

      // S'utilitza el mètode mv() per a posar l'arxiu al directori de càrrega (és a dir, "uploads")
      avatar.mv("./uploads/" + avatar.name);

      //envia resposta
      res.send({
        status: (200).json({
          message: "File uploaded successfully!! Congratulations!!!" // arxiu carregat
        }),
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Error 404, page not found" });
  }
};

module.exports = uploadPost;
