let manu_gfs = ["jyothika","varsha","nirupama","swarna"];
let joyal_gfs = ["jyothika","varsha","nirupama","swarna"];

let manu_gfs_detailed_info = [{name:"jyothika",age:17},{name:"varsha",age:17},{name:"nirupama",age:22},{name:"swarna",age:25}];
// high order functions
// array
// map✅ reduce filter✅ foreach ✅
function greet(name){
    console.log(name)
}
greet("swarna")


function icecream(make_icecream,flavour){
    make_icecream(flavour)
}

icecream(function (flavour){
    console.log(`${flavour} flavoured ice cream`);
},"strawberry")

// function foreach(func){
// let joyal_gfs = ["jyothika","varsha","nirupama","swarna"];
// func(joyal_gfs)
// }
// joyal_gfs.forEach(function (item){
//     console.log(item)
// })

let modified_gfs = joyal_gfs.map(function (item){
    return item + " madam"
})
// console.log(modified_gfs)


let manu_mod_gfs = manu_gfs.map(function (gf){
    return gf +" madam (manu)"
})

// console.log(manu_mod_gfs)
let young_gfs = manu_gfs_detailed_info.filter(function (gf){
    return gf.age <= 20;
})

console.log(young_gfs)