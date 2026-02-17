const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
let usernames = [];
gameInfo.forEach((gameI,index)=>{
        usernames[index] = gameI.username + "!";
})
console.log(usernames);

let winners = [];
let index = 0;
gameInfo.forEach((gameI)=>{
    if(gameI.score > 5)
    {
       winners[index] = gameI.username;
       index++;
    }

})
console.log(winners);

const sumscore = gameInfo.reduce((acc,cur)=>acc + cur.score,0);
console.log(sumscore)