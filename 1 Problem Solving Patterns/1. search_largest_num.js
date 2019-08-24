var a = [5, 24, 10, 89, 1, 222];
var max = a[0];

for(var i = 0; i< a.length; i++)
{
    if(max < a[i])
    {
        max = a[i];
    }
}
console.log(max);