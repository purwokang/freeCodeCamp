function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
  // console.log(Math.floor(Math.random() * (myMax - myMin + 1)) + myMin);
  // let random = Math.random();
  // let minMax = myMax - myMin + 1;
  // let kalikan = random * minMax;
  // let hasil = kalikan + myMin;
  // let hasilAkhir = Math.floor(hasil);
  // console.log("random: ", random);
  // console.log("minMax: ", minMax);
  // console.log("kalikan: ", kalikan);
  // console.log("hasil: ", hasil);
  // console.log("hasilAkhir: ", hasilAkhir);
}

randomRange(5, 20);
