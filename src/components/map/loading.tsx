// ローディングインジケーターのスタイル
const loadingStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // ビューポートの高さに合わせる
};

const spinnerStyle = {
  border: '5px solid rgba(195, 195, 195, 0.6)', // より薄い灰色のボーダー
  borderTop: '5px solid #3498db', // より太い青色のボーダートップ
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  animation: 'spin 1s ease-in-out infinite', // より滑らかなアニメーション
};

// アニメーションのキーフレーム
const keyframesStyle = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
    100% { transform: rotate(360deg); }
  }
`;

// ローディングコンポーネント
const Loading = () => (
  <div style={loadingStyle}>
    <style>{keyframesStyle}</style>
    <div style={spinnerStyle}></div>
  </div>
);

export default Loading;
