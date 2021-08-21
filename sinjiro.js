'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子どもを全て除去する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
  while (element.firstChild) {
    // 子どもの要素があるかぎり除去
    element.removeChild(element.firstChild);
  }
}

assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;
  }

  // 診断結果表示エリアの作成
  removeAllChildren(resultDivided);
  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDivided.appendChild(header);

  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);


  // widgets.js の設定

};

const answers = [
    '{userName}は楽しく、カッコよくセクシーであるべきだ',
    '{userName}は今のままではいない、だから今のままではいけない',
    'おぼろげながら浮かんできたんです。{userName}という単語が',
    'この{userName}をいかにクールに解決できるかハッピーにセクシーに',
    '{userName} やっぱり{userName}食べたいですね。毎日でも食べたい',
    '私…{userName}大好きなんですよね',
    '{userName}があるのが{userName}党。{userName}がないのがNOT{userName}党',
    '常に心がけているのことは自分の話していることに『{userName}』と『体重』をのせることです',
    '{userName}の原料は石油なんです',
    '{userName}すること自体がセクシーじゃないよね',
    '私の中で30年後を考えたとき、30年後の私は何歳かなと{userName}直後から考えていた',
    '{userName}党に追い風はない、単純に野獣党の自爆能力が高い'

];
let num = Math.floor(Math.random()*65537);
console.log(num);
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
 function assessment(userName) {
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
      sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
  
    // 文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index =  Math.floor(Math.random() * answers.length);
    let result = answers[index];
  
    result = result.replaceAll('{userName}', userName);
    return result;
  }
  
