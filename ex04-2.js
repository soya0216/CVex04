// ex04-2.js課題

function scoring(score) {
  // ここを埋める
  if (score >= 90) {
    console.log('秀')
  } else if (score >= 80) {
    console.log('優')
  } else if (score >= 60) {
    console.log('良')
  } else if (score >= 40) {
    console.log('可')
  } else {
    console.log('不可')
  }
}

// 動作確認
console.log(scoring(85)) //=> 秀
console.log(scoring(70)) //=> 良
console.log(scoring(40)) //=> 不可
