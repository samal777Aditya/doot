import { db } from '../config/dbConfig.js';

export const submitFeedback = async (req, res) => {
  const { user_id, content } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO feedback (user_id, content) VALUES ($1, $2) RETURNING *',
      [user_id, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};