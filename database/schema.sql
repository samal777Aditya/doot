CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255),
  content TEXT,
  sentiment_score FLOAT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);