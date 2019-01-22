(function(){
    var number=prompt('Please enter any number');
    var numCheck=[...number];
    var i;
    var display;
    
    if(number!=null){
        if(isNaN(number)){
            alert("You have not entered a number");
        }else{
            for(i=1;i<numCheck.length;i++){
                if(numCheck[i]%2==0 && numCheck[i-1]%2==0){
                    numCheck[i-1]=numCheck[i-1]+'-';
                }
            }
        }
    }else{
        alert("Enter something!");
    }
    console.log(numCheck.join(""));
})();