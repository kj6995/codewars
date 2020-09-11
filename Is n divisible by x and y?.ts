/*Time Complexity: O(1)
Space Complexity : O(1)*/

export function isDivisible(n:number, x:number, y:number):boolean {
  if(n% x === 0 && n % y === 0){
    return true;
  }
  return false;
}