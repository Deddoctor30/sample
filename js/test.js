function findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
}

let arr = [22, -2, 11, 135, -257];

console.log(findSmallestInt(arr)); 