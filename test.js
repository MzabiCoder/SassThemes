tab = ["SS", "SS", "SS", "Ss"]

let res = 0

for (let i = 1; i < tab.length; i++) {

    tab[i] !== tab[0] && res++
}

console.log(res > 0 ? false : true)