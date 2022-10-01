const team = [
    {member:'john', km:3},
    {member:'Jane', km:4},
    {member:'David', km:5},
    {member:'Peter', km:2},
];
let sum = 0;

for(const {km} of team){
    sum+=km;
}
console.log(`tổng số km: ${sum}`);