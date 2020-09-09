/*Solution 1 :

Time Complexity : O(N)
Space Complexity: O(1)
*/
export function repeatStr(n: number, s: string): string {
  var output = '';
  for(var i = 0; i < n ; i++){
    output += s;
  }
  return output;
}

/*
Solution 2 :
Time Complexity: O(N)
Space Complexity: O(1)*/

export function repeatStr (n:number, s:String):String {
  return s.repeat(n);
}