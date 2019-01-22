(function(){
var d=new Date();
month=d.getMonth()+1;
day=d.getDate();
year=d.getFullYear();
if (day < 10) {
    day = '0' + day;
  } 
  if (month < 10) {
    month = '0' + month;
  } 
console.log(month+'/'+day+'/'+year);
})();