from flask import Flask, json

app = Flask(__name__)


def is_prime(number):
    if number < 2:
        return False

    for i in range(2, number):
        if number % i == 0:
            return False

    return True


@app.route("/prime_number/<int:number>")
def prime_number(number):
    result = is_prime(number)

    response = {
        "Number": number,
        "isPrime": result
    }

    return json(response)


if __name__ == "__main__":
    app.run(port=3000)