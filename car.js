let engineonoff = false;
function engine() {
  engineonoff = !engineonoff;
}
function drive(km) {
  if (!engineonoff) return console.log("시동꺼짐");
  while (true && km) {
    console.log(`${km--}km`);
  }
  console.log(`주행완료`);
}

engine();
drive(10);
