//ボタンのidを取得
const btn = document.getElementById('btn');

// ボタンをクリックされた場合のイベント処理
btn.addEventListener('click', () => {
  // 非同期処理の関数
  setTimeout(() => {
    // 文字の内容を置き換える
    text.textContent = 'ボタンをクリックしました'
  }, 2000);
});