function hitungAngka() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

console.log(hitungAngka(1, 2, 3, 4, 5, 6, 9));
