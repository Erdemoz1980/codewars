function validatePIN (pin) {
  const splitInput = pin.split('');
  const numbersOnly =/^\d+$/;
  
if(!numbersOnly.test(pin)) return false;
  
 if(splitInput.length === 4) {
  return true
  }else if(splitInput.length ===6){
  return true
} else{
  return false
}
};

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.