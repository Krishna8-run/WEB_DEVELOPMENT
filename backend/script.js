const figlet = require('figlet');

figlet("KRISHNA!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
console.log("Hello krishna");