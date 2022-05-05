
"use strict";

const timeController = ((req,res)=>{
try {
           
    let date = new Date;
    let usuari = req.body.nom;// aquest nom es la key del json que li passo
    res.status(200).json({
      hora: `${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`,
      data: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    });
} catch (error) {
    res.status(401).json({
        success: false,
        message: 'wrong username and password'
      });
    }
})
     
module.exports = timeController
