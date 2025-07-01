const MyNumber=process.argv.slice(2);
if (isNaN (MyNumber)){console.log('Not a number');}
else{console.log(`My Number: ${MyNumber}`)}