var x;
var x=prompt("ededi daxil edin")
var k=0;
for(var i=1;i<=x;i++){
  if(x%i==0)
  k++
}
if(k>2)
alert("murekkebdir")
else if(k==1)
alert("ne sade ne murekkebdir")
else
alert("sadedir")