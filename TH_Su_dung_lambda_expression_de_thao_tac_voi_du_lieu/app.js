import kids from "./main.js";

const mau_giao = [];
kids.forEach(kid => {
    if (kid.age < 6) {
        mau_giao.push({
            id: kid.id,
            name: kid.name
        })
    }
});
console.log(mau_giao);

const kids2 = kids
    .filter(kid => kid.age < 11 && kid.age > 5)
    .map(kid => ({
        id: kid.id,
        name: kid.name
    }));
console.log(kids2);