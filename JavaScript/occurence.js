(function(){
    "use strict";
    function occurence(word,letter){
        var lowerWord=word.toLowerCase();
        var arrayOfWord=[...word];
        var i;
        var count=0;
        for(i=0;i<arrayOfWord.length;i++){
            if(arrayOfWord[i]==letter){
                count+=1;
            }
        }
        return count;
    }
    console.log(occurence( 'gmail.com', 'm'));
})();