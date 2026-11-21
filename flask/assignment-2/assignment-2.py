import json
from flask import Flask, jsonify

app = Flask(__name__)


with open("dictionary.json", encoding="utf-8") as file:
    dictionary = json.load(file)


@app.route("/translate/<word>")
def translate(word):
    word = word.lower()

    if word in dictionary:
        response = {
            "English": word,
            "Finnish": dictionary[word]
        }
        return jsonify(response)

    return jsonify({"error": "Word not found"}), 404

@app.route("/words")
def get_words():
    return jsonify(list(dictionary.keys()))

if __name__ == "__main__":
    app.run(port=3000)

