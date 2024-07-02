// ボタンのidを取得
const btn = document.getElementById('btn');

// h2のidを取得
const headerText = document.getElementById('text');

// ボタンがクリックされた時のイベント処理
btn.addEventListener('click', () => {
  // 文字を置き換える
  headerText.textContent = 'ボタンをクリックしました';
});
