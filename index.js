
function superbowlWin(arr)
{
    let result=undefined;
   const res=arr.find(function(element)
    {
        if( element.result=="W")
           {result=element.year;
             return result}
    })
  return result;
}