const indentity = <G>(arg:G): G =>{
    return arg
}

indentity<number>(7)
const x = indentity<string>("fff");
indentity<boolean>(true);
console.log(x + 7)