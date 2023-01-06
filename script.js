let req= require('./cal') 

let argum = process.argv.slice(2)


let a  = argum[1];
let b = argum[2];
let c = ''




if(argum[0] === 's'){
    c = cal.soma(a,b)
}else if(argum[0] === '-'){
    c = cal.dim(a,b)
}else if(argum[0] === 'm'){
    c = cal.mult(a,b)
}else if(argum[0] === 'd'){
    c = cal.div(a,b)
}
