var fs = require('fs');

const content = 'This is the content which will write to text file!'

fs.writeFileSync('test.txt', content, function (result, err) {
   if (err) return console.error(err);
   console.log(result.toString());
});