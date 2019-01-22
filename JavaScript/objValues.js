(function(){
    var obj = {
        "One":"1",
        "Two":"2",
        "Three":"3",
        "Four":"4"
        };
        var dataArray = Object.keys(obj).map(val => obj[val]);
        console.log(dataArray); 
})();