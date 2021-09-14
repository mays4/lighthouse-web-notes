const rev = function(reve) {
  let str = "";
  for (let i = reve.length - 1; i  >= 0; i--) {
    //console.log(reve[i]);
    str += reve[i];
   
  }
  return str;
};

// console.log(rev("hello"));
// console.log(rev("goodbye"));
// console.log(rev("fish"));