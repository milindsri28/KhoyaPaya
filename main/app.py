# app.py

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



@app.route('/run-scan', methods=['POST'])
def run_scan():
    try:
        # Your code to initiate the scan
        return "Scan initiated successfully"
    except Exception as e:
        return str(e), 500

def run_scan():
    try:
        # Your code to initiate the scan
        return "Scan initiated successfully"
    except Exception as e:
        return str(e), 500

@app.route('/run-main', methods=['POST'])
def run_main():
    try:
        # Code to run main script
        return "Main script executed successfully"
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)
