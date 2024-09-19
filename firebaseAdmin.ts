import * as admin from 'firebase-admin';
const serviceAccount = process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount!),
    // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

// Auth インスタンスを取得
const db = admin.firestore();

export { db };
