(function(){
    var mailform = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email='$rammiu96@SpeechGrammarList.com.';
    console.log(mailform.test(String(email).toLowerCase()));
})();