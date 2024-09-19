import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'src/libs/firebase';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { id, prefecture, allergens } = req.query;

      if (id) { // 個別取得
        const menuDocRef = doc(db, 'menu', id as string);
        const menuDocSnap = await getDoc(menuDocRef);
        const menu = { id: menuDocSnap.id, ...menuDocSnap.data() };

        res.status(200).json(menu);
      } else { // バルク
        // クエリパラメータから都道府県コードを取得し、数値に変換
        const prefectureCode = Number(prefecture);

        // allergensをパースして配列に変換
        const selectedAllergens = allergens
          ? (allergens as string).split(',').map(Number).sort((a, b) => a - b)
          : [];

        // NaNチェック
        if (isNaN(prefectureCode)) {
          return res.status(400).json({ error: '不適な都道府県コードが設定されています' });
        }

        if (selectedAllergens && selectedAllergens.length > 0) {
          // クエリの作成
          const menuQuery = query(
            collection(db, 'menu'),
            where('prefecture', '==', prefectureCode)
          );

          // クエリの実行
          const menuSnapshot = await getDocs(menuQuery);

          const menuList = menuSnapshot.docs
            .map(doc => ({
              id: doc.id,
              allergens: doc.data().allergens,
              ...doc.data()
            }))
            .filter(menu => { // フィルタリング
              const menuAllergens = menu.allergens || [];
              return !selectedAllergens.some(selected => menuAllergens.includes(selected));
            });

          res.status(200).json(menuList);
        } else {
          // クエリの作成
          const menuQuery = query(
            collection(db, 'menu'),
            where('prefecture', '==', prefectureCode)
          );

          // クエリの実行
          const menuSnapshot = await getDocs(menuQuery);

          const menuList = menuSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

          res.status(200).json(menuList);
        }
      }
    } catch (error) {
      console.error('メニューのフェッチに失敗しました:', error);
      res.status(500).json({ error: 'メニューのフェッチに失敗' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
