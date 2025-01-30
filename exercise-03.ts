// Soal 3
const cm: number = 150000;
const km : number = cm / 100000;
console.log("Hasil konversi cm ke km : " + km);
console.log(`Hasil konversi cm ke km : ${km}`);


// Soal 5
let mSentence:string = "Hello world";
let search_string:string = "ell";
console.log(mSentence.replace(search_string, ""));


// Soal 10
let mSentence1:string = "Hello world";
//let mSentence1:number = 100;

console.log(typeof mSentence1);

if (typeof(mSentence1) == "string") {
    console.log("1");
} 
else if (typeof(mSentence1) == "number") {
    console.log("2")
}
else {
    console.log("3")
}



// Soal 11
let mSentence11:string = "an apple a day keeps the doctor away";
let mStar: string = " ";

//console.log(mSentence11.substring(0,4));

let i: number;
console.log(mSentence11.length)
console.log(mSentence11.substring(0, 36));
for (i = 0; i < mSentence11.length; i++) {
    //console.log(i + mSentence11.substring(i,i+1));
    //mStar = mSentence11.substring(i,1);
    if (mSentence11.substring(i,i+1) === "a")
        { mStar = mStar + "*"; }
    else
        { mStar = mStar + mSentence11.substring(i,i+1); }
    
    console.log(mStar);
}
