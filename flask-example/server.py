from flask import Flask, app, send_from_directory

app = Flask(__name__)
@app.route("/api/grades")
def get_grades():
    return [0,1,2,5,5,2,3,4]

app = Flask(__name__)
@app.route("/api/people")
def get_people():
    return [
        {"name": "Sameer", "age": 28},
        {"name": "Sasuke", "age": 23}
    ]

@app.route("/<path:filename>")
def serve_from_directory(filename):
    return send_from_directory("html", filename)

@app.route("/<path:filename>")
def serve_from_root(filename):
    return send_from_directory("assets", filename)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port = 4000, use_reloader = True)