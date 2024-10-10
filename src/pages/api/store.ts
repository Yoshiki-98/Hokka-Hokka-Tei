import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'src/libs/firebase';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { id, prefCode, cityCode } = req.query;

      if (id) { // 個別取得
        const storeDocRef = doc(db, 'store', id as string);
        const storeDocSnap = await getDoc(storeDocRef);
        const store = { id: storeDocSnap.id, ...storeDocSnap.data() };

        res.status(200).json(store);
      } else if (cityCode) { // 都道府県の選択がない場合
        // クエリの作成
        const storeQuery = query(
          collection(db, 'store'),
          where('cityCode', '==', Number(cityCode))
        );
        // クエリの実行
        const storeSnapshot = await getDocs(storeQuery);

        const storeList = storeSnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))

        res.status(200).json(storeList);
      } else {
        // クエリの作成
        const storeQuery = query(
          collection(db, 'store'),
          where('prefCode', '==', Number(prefCode))
        );
        // クエリの実行
        const storeSnapshot = await getDocs(storeQuery);

        const storeList = storeSnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))

        res.status(200).json(storeList);
      }
    } catch (error) {
      console.error('店舗のフェッチに失敗しました:', error);
      res.status(500).json({ error: '店舗のフェッチに失敗' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
