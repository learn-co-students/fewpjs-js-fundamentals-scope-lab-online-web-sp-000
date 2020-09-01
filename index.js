const animal = ""
// global

// "let" vars are block-scoped
// "const" vars block-scoped; cannot be reassigned
// "var" should NOT be used; error-prone

function myAnimal() {
  let animal = "dog";
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  let animal = "cat";
  return animal
}


function add2(n) {
  let two = 2;
  return n + two
}