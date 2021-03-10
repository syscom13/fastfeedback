import { firestore } from './firebase';

export async function getAllFeedback(siteId) {
  try {
    const feedbackRef = firestore.collection('feedback');
    const query = feedbackRef
      .where('siteId', '==', siteId)
      .orderBy('createdAt', 'desc');
    const feedbackDocs = (await query.get()).docs;
    const feedback = feedbackDocs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return { feedback };
  } catch (error) {
    return { error };
  }
}

export async function getAllSites() {
  try {
    const sitesRef = firestore.collection('sites');
    const sites = (await sitesRef.get()).docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { sites };
  } catch (error) {
    return { error };
  }
}
