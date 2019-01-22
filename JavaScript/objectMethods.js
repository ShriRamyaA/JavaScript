(function(){
    var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
// function occupationObj(myObj,occupation){
//     Object.keys(myObj)
//   .forEach(function eachKey(key) { 
//     if(key===occupation){
//     console.log(myObj[key]);
//    } // alerts value
//   });
// }
// occupationObj(myObj,'Programmer');
function occupationObj(myObj,occupation){
for(var i in myObj){
    if(myObj[i].occupation===occupation){
        console.log(myObj[i]);
    }
}
};

function sortByAge(myObj){
    myObj.sort(function(a, b){
        return a.age-b.age
    })
    console.log(myObj);
};
occupationObj(myObj,'Programmer');
sortByAge(myObj);
})();