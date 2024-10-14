import os
from pathlib import Path
import logging

logging.basicConfig(level=logging.INFO, format='[%(asctime)s]: %(message)s:')

list_of_files = [
    "client/public/index.html",
    "client/src/assets/.gitkeep",  # Placeholder to keep the folder
    "client/src/components/FeedbackForm.js",
    "client/src/components/Dashboard.js",
    "client/src/components/Notifications.js",
    "client/src/context/AuthContext.js",
    "client/src/hooks/useSpeechToText.js",
    "client/src/pages/Home.js",
    "client/src/pages/Login.js",
    "client/src/pages/Profile.js",
    "client/src/pages/Payment.js",
    "client/src/services/api.js",
    "client/src/services/firebase.js",
    "client/src/App.js",
    "client/src/index.js",
    "client/src/.env",

    "backend/controllers/feedbackController.js",
    "backend/controllers/paymentController.js",
    "backend/controllers/authController.js",
    "backend/models/feedbackModel.js",
    "backend/routes/feedbackRoutes.js",
    "backend/routes/authRoutes.js",
    "backend/routes/paymentRoutes.js",
    "backend/server.js",
    "backend/package.json",
    "backend/.env",

    "ai-services/sentiment_analysis.py",
    "ai-services/requirements.txt",

    "database/schema.sql",

    "config/stripeConfig.js",
    "config/dbConfig.js",

    "package.json",
    "README.md"
]

for filepath in list_of_files:
    filepath = Path(filepath)
    filedir, filename = os.path.split(filepath)

    if filedir != "":
        os.makedirs(filedir, exist_ok=True)
        logging.info(f"Creating directory: {filedir} for the file {filename}")

    if (not os.path.exists(filepath)) or (os.path.getsize(filepath) == 0):
        with open(filepath, 'w') as f:
            pass
        logging.info(f"Creating empty file: {filepath}")
    else:
        logging.info(f"{filename} already exists")