

function dice_game() {
  let dice1 = Math.floor(6 * Math.random()) + 1;
  let dice2 = Math.floor(6 * Math.random()) + 1;
  let result_S = dice1 + dice2 === 7 ? 'win' : 'lose'
    
  
  return { dice1, dice2, result1: dice1 + dice2, result_S };
}

let date_now = () =>{
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let date_time = date+' '+time;
    return date_time;
};

module.exports = {
  dice_game, date_now 
 }