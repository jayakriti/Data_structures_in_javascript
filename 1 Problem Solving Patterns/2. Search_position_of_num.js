function search(array1, find)
{
var temp = false;

    for(var i = 0; i < array1.length; i++)
    {
        if (array1[i] == find)
        {
            console.log(i);
            temp = true;
        }
    }

    if (temp != true)
    {
        console.log(-1);
    }
}
//below calling function with 3 different search value
search([1,2,3,4,5,6],4)
search([1,2,3,4,5,6],6)
search([1,2,3,4,5,6],11)