function throwFunc() {
  const dice1 = Math.floor(6*Math.random())+1;
  const dice2 = Math.floor(6*Math.random())+1;
  const result_S = dice1 + dice2 === 7 ? 'win' : 'lose'
  return {
    dice1,
    dice2,
    result: dice1 + dice2,
    result_S
  }
}


module.exports = throwFunc