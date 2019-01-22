(function(){
    var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
    var myObj=JSON.parse(jsonStr);
    var keys = Object.keys(myObj);  
    console.log(keys);
})();
