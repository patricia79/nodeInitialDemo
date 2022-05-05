
"use strict";

const timeController = ((req,res)=>{
try {
           
    let date = new Date;
    res.status(200).json({
      hora: `${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`,
      data: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    });
} catch (error) {
    res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }
})
     
module.exports = timeController
