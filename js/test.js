





String.prototype.toJadenCase = function () {
   return this.split(" ").map(item => {
       return `${item[0].toUpperCase()}${item.slice(1)}`
   }).join(' ');
};

String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real");