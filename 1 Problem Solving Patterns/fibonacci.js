function fibonacci(num)
{
    var a = [0,1];
    for(var i = 0; a[a.length-1] < num; i++)
    {
        a.push(a[i] + a[i+1])
    }
    console.log(a);
}
//calling function with different num value
fibonacci(8);
fibonacci(13);