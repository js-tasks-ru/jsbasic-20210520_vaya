function factorial(n) {
  // ваш код...
  let result = 1;
  while(n > 0){ 
  result *= n--;
  }
  return result;
}

