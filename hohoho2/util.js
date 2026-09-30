



function prand(seed){
	
	return modExp(2,seed+globalSeed,1992805613);
}



/**
 * Fast modular exponentiation for a ^ b mod n
 * @returns {number}
 */
function modExp(a, b, n) {
  a = a % n;
  var result = 1;
  var x = a;

  while(b > 0){
    var leastSignificantBit = b % 2;
    b = Math.floor(b / 2);

    if (leastSignificantBit == 1) {
      result = result * x;
      result = result % n;
    }

    x = x * x;
    x = x % n;
  }
  return result;
}






