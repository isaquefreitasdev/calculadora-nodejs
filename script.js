let req= require('./cal') 

let argum = process.argv.slice(2)


let a  = argum[1];
let b = argum[2];
let c = ''




if(argum[0] === 's'){
    c = req.soma(a,b)
}else if(argum[0] === '-'){
    c = req.dim(a,b)
}else if(argum[0] === 'm'){
    c = req.mult(a,b)
}else if(argum[0] === 'd'){
    c = req.div(a,b)
}
