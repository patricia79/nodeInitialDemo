
"use strict";

const timeController = ((req,res)=>{
try {
   
    const username=req.headers.username;
    const password=req.headers.password;
  
    const mockUsername="Freia";
    const mockPassword="Apple";
        
    let date = new Date;
    let usuari = req.body.username;
    res.set('Cache-control: ','no cache').json({
      success: true,
      message: 'correct username and password!',
      usuari: usuari,
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
