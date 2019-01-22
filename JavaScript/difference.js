(function(){
    var arr1=['a','b','c','d','e'];
    var arr2=['a','d','e'];
    let difference1 = arr1.filter(x => !arr2.includes(x));
    let difference2 = arr2.filter(x => !arr1.includes(x));
    if(difference1[0]!=null){
    console.log('Difference between array1 and array2 is '+difference1);
    }
    if(difference2[0]!=null)
{    console.log('Difference between array2 and array1 is '+difference2);
}
})();