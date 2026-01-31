from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

bikes = [
    {"id": 1, "name": "Royal Enfield", "price": 499, "city": "Mumbai"},
    {"id": 2, "name": "Yamaha R15", "price": 399, "city": "Pune"},
    {"id": 3, "name": "KTM Duke", "price": 450, "city": "Bangalore"}
]

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

@app.route("/api/bikes", methods=["GET"])
def get_bikes():
    return jsonify(bikes)

@app.route("/api/rent", methods=["POST"])
def rent_bike():
    data = request.json
    return jsonify({"message": "Bike rented successfully", "data": data})

@app.route("/api/list", methods=["POST"])
def list_bike():
    data = request.json
    bikes.append(data)
    return jsonify({"message": "Bike listed successfully", "data": data})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
