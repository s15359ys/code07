const N10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function squareSum(n){
if(n>1){
 var a = 1;
 var sum = 0;
 while(a<n+1){
 sum = sum + a*a;
 a = a+1;
}
 return sum;
}else{
    alert(" １以上の数を入れてください");
}
}