function validatePIN (pin) {
  const pin2 = Number(pin)
  if(isNaN(pin2) || pin.includes('.')){
    return false
  }
  else if( pin.length === 4 || pin.length === 6? true: false){
    return true
  }
  else{
    return false
  }
}
console.log(validatePIN('-2345'))