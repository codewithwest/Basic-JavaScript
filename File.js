var fs = require("fs");


fs.writeFile('Winner.txt', 'UniWise, Best Campus Cup Solution, Tshwane University of Technology. ', function(err) {
   if (err) {
      return console.error(err);
   }
 

   fs.readFile('Winner.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log(data.toString());
   });
});