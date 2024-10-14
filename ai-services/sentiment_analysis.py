from textblob import TextBlob
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.json
    feedback = data['feedback']
    analysis = TextBlob(feedback).sentiment
    return jsonify({'polarity': analysis.polarity, 'subjectivity': analysis.subjectivity})

if __name__ == '__main__':
    app.run(port=5001)