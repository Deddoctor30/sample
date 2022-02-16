const i = 'Здравствуйте';
console.log(i);

function duplicateEncode(word){
   let res;
   let good = '';
   let b = word.toLowerCase().split('');
   for (let i = 0; i < b.length; i++) {
      for (let c = 0; c < b.length; c++) {
         if (i === c) {
            continue
         }
         if (b[i] === b[c]) {
            res = 'П';
            break
         } else {
            res = 'Н';
         }
      }
      console.log(`${b[i]} = ${res}`);
      good += res;
   }
   console.log(good);
}


duplicateEncode(i);