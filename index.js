let animal = ""
let mine = "dog";
let yours = "cat";

function myAnimal() {
  let animal = mine;
  return animal
}

function yourAnimal() {
  let animal = yours;
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

let two = 2;
function add2(n) {
  let two = 2;
  return n + two

  // Feel free to move things around!
  
}