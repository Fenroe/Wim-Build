import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs, addDoc,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAE3bZ1edrWid46Dqf6FQyS4Je5WZNphp8',
  authDomain: 'wimby-a6cb4.firebaseapp.com',
  projectId: 'wimby-a6cb4',
  storageBucket: 'wimby-a6cb4.appspot.com',
  messagingSenderId: '870472932974',
  appId: '1:870472932974:web:d994bee3d178c5a27a907f',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getScores() {
  const scoresCol = collection(db, 'scores');
  const scoresSnapshot = await getDocs(scoresCol);
  const scoresList = scoresSnapshot.docs.map((doc) => doc.data());
  return scoresList;
}

async function addScore(mapData, nameData, timeData) {
  const docRef = await addDoc(collection(db, 'scores'), {
    map: mapData,
    name: nameData,
    time: timeData,
  });
  return docRef;
}

export {
  getScores,
  addScore,
};
