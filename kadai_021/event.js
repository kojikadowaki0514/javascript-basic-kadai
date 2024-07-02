//ボタンのidを取得
const btn = document.getElementById('btn');

// h2のidを取得
const headerText = document.getElementById('text');

// ボタンをクリックされた場合のイベント処理
btn.addEventListener('click', () => {
  // 非同期処理の関数
  setTimeout(() => {
    // 文字の内容を置き換える
    headerText.textContent = 'ボタンをクリックしました'
  }, 2000);
});