このアプリケーションはほっかほっか亭さんのウェブサイトの一部のページを担うものです（STUDIO では対応できない、検索等の機能を備える）。

# 最初に
開発環境のセットアップを行なってください。
1. VS Code をインストール
2. github アカウントを作成
3. https://v0.dev/ に登録

# プロジェクトの開始

開発を始めるための最初のステップとして、以下を実行してください。:

```bash
git clone https://github.com/sciemo/hokatei.git
```

次に .env.local ファイル、firebaseServiceAccount.json を作成してください。
各内容については開発者（Yoshi）に問い合わせてください。

.env.local ファイル、firebaseServiceAccount.json を作成できたら、

```bash
npm install
npm run dev
```

を実行してください。
ローカルマシンが立ち上がるので、ブラウザChromeで[http://localhost:3000]にアクセスしてください。

## その他 - UI要素の分類と命名
### 一般的な用語
1. **UI要素（UI Element）**: 最も広義の用語で、ユーザーインターフェースを構成する任意の要素を指します。

2. **インタラクティブ要素（Interactive Element）**: ユーザーの操作を受け付ける要素を指します。

3. **アクション要素（Action Element）**: ユーザーが特定のアクションを起こすためのトリガーとなる要素です。

4. **ナビゲーション要素（Navigation Element）**: ユーザーを別のページや画面に誘導する要素です。

## 特定のユースケースに応じた名称

1. **サービスアクセサ（Service Accessor）**: 
  特定のサービスへのアクセスを提供する要素。例: デリバリーサービスへのリンク。

2. **機能トリガー（Feature Trigger）**: 
  特定の機能や操作を開始するための要素。例: 「注文する」ボタン。

3. **ステータスインジケータ（Status Indicator）**: 
  現在の状態や利用可能性を示す要素。例: 「営業中」「準備中」などのChip。

4. **サービスセレクタ（Service Selector）**: 
  複数のサービスから一つを選択するための要素。

5. **オプションプレゼンター（Option Presenter）**: 
  利用可能なオプションを提示する要素。
