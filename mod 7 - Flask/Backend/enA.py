from flask import Flask, Response, send_from_directory, request
import json

#Make new flask app
app = Flask(__name__)

#define endpoint /home
@app.route("/home")
def serve_home():
    return send_from_directory("static", "index.html")

#define endpoint/plus
@app.route("/plus")
def calculate_sum():
    try:
        #get the arguments
        arguments = request.args
        number1 = float(arguments.get("number1"))
        number2 = float(arguments.get("number2"))

        response_data = {
            "number1": number1,
            "number2": number2,
            "result": number1 + number2
        }
        return response_data

    except ValueError:
        response = {
            "message": "Arguments not actual numbers",
            "status": 400
        }

#error handler
@app.errorhandler(404)
def page_not_found(error_code):
    response = {
        "message": "Invalid endpoint",
        "status": 404
    }

    #make data to json
    json_response = json.dumps(response)
    #make a response
    http_response = Response(response=json_response, status=404, mimetype="application/json")
    return http_response

#Start the app
app.run(host="127.0.0.1", port=3000, use_reloader=True)