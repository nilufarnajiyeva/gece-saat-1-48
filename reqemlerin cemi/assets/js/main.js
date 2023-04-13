var y,cem=0 ;
var x=prompt("eded yaz ");
while(x>0)
{
    y=x%10;
    cem+=y;
    x=(x-y)/10;

}
console.log(cem);