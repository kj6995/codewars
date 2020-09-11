function dutyFree(normPrice, discount, hol){
  let save = (normPrice * discount)/100;
  let ans = Math.floor(hol/save);
  return ans;
}