const MyNumber=process.argv.slice(2);
const number=Number(MyNumber[0]);
if (isNaN (number)){console.log('Not a number');}
else{console.log(`My number: ${MyNumber}`);}
