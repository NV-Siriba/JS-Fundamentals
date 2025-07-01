const x=process.argv.slice(2);
const numX=Number(x[0]);
for(let i=0;i<=numX;i++){console.log("C is fun");}
if(isNaN(numX)){console.log('Missing number of occurrences');}