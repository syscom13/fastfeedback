// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllFeedback } from '@/lib/db-admin.js';

export default async (req, res) => {
  const { sideId } = req.query;
  const { feedback, error } = await getAllFeedback(sideId);
  if (error) {
    return res.status(500).json({ error });
  }
  res.status(200).json({ feedback });
};
