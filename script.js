const sCap = 1200;
const poCap = 1250;
const piCap = 1260;

var gear = {
  weapons: [
    1060,
    1060,
    1060
  ],
  armor: {
    titan: [
      1056, 1050, 1056, 1050, 1058
    ],
    hunter: [
      1060, 1060, 1060, 1060, 1060
    ],
    warlock: [
      1059, 1059, 1054, 1060, 1060
    ]
  }
}

function runCalculations(character) {
  if(!gear.armor[character]) {return;}
  var total = 0;
  for (i=0; i < gear.weapons.length; i++) {
    total += gear.weapons[i];
  }
  for (i=0; i < gear.armor[character].length; i++) {
    total += gear.armor[character][i];
  }
  var avg = total / 8;
  var prgsToNxtLvl = avg % 1 * 8;
  var lvlsNeeded = 8 - prgsToNxtLvl;
  if(avg <= sCap) {
    console.log("all increases")
  } else if(avg <= poCap) {
    var engrams = {
      clEngram: 1,
      prime: 3,
      t1: 3,
      t2: 4,
      t3: 5,
      wPinnacle: 4,
      pinnacle: 5
    }else if(avg <= piCap) {
      var engrams = {
        clEngram: 0,
        prime: 0,
        t1: 0,
        t2: 0,
        t3: 0,
        wPinnacle: 1,
        pinnacle: 2
    }
  }
  return lvlsNeeded;
}
