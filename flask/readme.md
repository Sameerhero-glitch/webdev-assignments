# Python Flask server Assignments

## Assignment 1 – Prime Number service
- Created a Flask backend service to check whether a number is prime.
- Used a URL parameter to receive an integer.
- Used a function to check whether the number is divisible by other numbers.
- Used json() to return the number and prime result in JSON format.

## Assignment 2 – English-Finnish Dictionary
- Created a Flask backend service for English-Finnish translation.
- Used json.load() to read word pairs from dictionary.json.
- Used a URL parameter to search for an English word.
- Used jsonify() to return the Finnish translation.
- Created an endpoint to display all available English words.
- Returned a 404 error when the requested word was not found.

## Assignment 3 – Add Words to the Dictionary done
- Created a Flask backend service to add new English-Finnish word pairs.
- Used request.args.get() to receive English and Finnish words through URL parameters.
- Added new word pairs to the dictionary.
- Used json.dump() to save the updated dictionary to dictionary.json.
- Used ensure_ascii=False and indent=2 when saving the JSON file.