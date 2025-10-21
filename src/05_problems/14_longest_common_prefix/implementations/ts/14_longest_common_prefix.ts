export function letterCombinations(digits: string): string[] {
  const charsSet = [];
  const combinations = [];

  for (let i = 0; i < digits.length; i++) {
    switch (parseInt(digits[i])) {
      case 2:
        charsSet.push(['a', 'b', 'c']);
        break;
      case 3:
        charsSet.push(['d', 'e', 'f']);
        break;
      case 4:
        charsSet.push(['g', 'h', 'i']);
        break;
      case 5:
        charsSet.push(['j', 'k', 'l']);
        break;
      case 6:
        charsSet.push(['m', 'n', 'o']);
        break;
      case 7:
        charsSet.push(['p', 'q', 'r', 's']);
        break;
      case 8:
        charsSet.push(['t', 'u', 'v']);
        break;
      case 9:
      default:
        charsSet.push(['w', 'x', 'y', 'z']);
    }
  }

  for (let i = 0; i < charsSet.length; i++) {
    for (let j = 0; j < charsSet.length; j++) {
      for (let k = 0; k < charsSet.length; k++) {
        if (i === j) continue;
        // console.log('---------------');
        console.log('i: ', i);
        console.log('j: ', j);
        console.log('k: ', k);
        // console.log('charsSet[i]: ', charsSet[i]);
        // console.log('charsSet[j]: ', charsSet[j]);
        // console.log('charsSet[i][k]: ', charsSet[i][k]);
        // console.log('charsSet[j][k]: ', charsSet[j][k]);
        console.log('charsSet[i][k] + charsSet[j][k]: ', charsSet[i][k] + charsSet[j][k]);
        combinations.push(charsSet[i][k] + charsSet[j][k]);
      }
    }
  }

  return combinations;
}
