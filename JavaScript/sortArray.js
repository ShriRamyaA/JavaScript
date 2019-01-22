(function(){
    var sampleArray=["apple","Gold","ant","Elephant","beetle","bees"];
    var i;
    for(i=0;i<sampleArray.length;i++){
        sampleArray[i]=sampleArray[i].toLowerCase();
    }
    console.log("Sorted array in ascending order is "+sampleArray.sort());
    console.log("Sorted array in descending order is "+sampleArray.sort().reverse());
})();