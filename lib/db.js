import { firestore } from './firebase';

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export function createSite(data) {
  return firestore.collection('sites').add(data);
}

export function createFeedback(data) {
  return firestore.collection('feedback').add(data);
}
