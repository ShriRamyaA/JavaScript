(function(){
    var numArray=[-1005,18,2,-9,0];
    var largestNum=numArray[0];
    var i;
    for(i=1;i<numArray.length;i++){
        if(numArray[i]>largestNum){
            largestNum=numArray[i];
        }
    }
    console.log('Largest of five numbers is '+largestNum);
}
)();