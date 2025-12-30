## AWS Lab Manual: Exercise–16

**DATE:** 21-11-25

### Exercise–16: Building a Basic Python Flask Web Application

**Fundamentals of Web Requests & Form Handling (Pre-Requisite for AWS RDS Connectivity Lab)**
 
---

### 1. Objectives

To design and implement a simple Web Application using Python Flask that:

- Displays an HTML form to accept Name and Password.
    
- Reads the form data on the server side when the form is submitted.
    
- Displays the submitted values on a new result page.
    

### 2. Learning Outcomes

After completing this exercise, you will be able to:

- Understand how an HTML form sends data to the server.
    
- Explain how Flask receives form data using the `request` object.
    
- Read request parameters (`request.form`) in Flask.
    
- Understand basic frontend–backend communication.
    
- Handle a simple HTTP POST request in a Flask application.
    

---

### 3. Preparation

Folder Structure

Create the following structure manually:

Plaintext

```
FlaskFormApp/
├── app.py
└── templates/
    ├── form.html
    └── result.html
```

**Requirements**

- Python installed (version 3.7 or higher; check with `python --version`)
- Flask library (install via pip)
- Virtual environment tool (venv, included with Python)
- Any code editor (VS Code / PyCharm / Notepad etc.)
- Web browser (Chrome / Edge / Firefox)

    

---

### 4. Implementation Steps

#### STEP 1: Set Up Virtual Environment and Install Flask

1. Open **Command Prompt / Terminal**.
2. Navigate to your desired directory (e.g., `cd Desktop`).
3. Create a virtual environment: `python -m venv flask_env`
4. Activate it:
   - Windows: `flask_env\Scripts\activate`
   - Mac/Linux: `source flask_env/bin/activate`
5. Install Flask: `pip install flask`
6. Verify: `python -c "import flask; print('Flask installed')"`

#### STEP 2: Create Project Folder

Create a folder on your local machine (e.g., `C:\Users\MCA\FlaskFormApp` or `~/FlaskFormApp`).

#### STEP 3: Create templates Folder

Inside `FlaskFormApp`, create a sub-folder named `templates`. All HTML files must be placed here.

#### STEP 4: Create HTML Form — `templates/form.html`

Create `form.html` inside the templates folder with the following code:

HTML

```
<!DOCTYPE html>
<html>
<head>
    <title>HTML Form</title>
</head>
<body>
    <h2>Enter Your Details</h2>
    <form action="/submit" method="post">
        Name: <input type="text" name="uname"><br><br>
        Password: <input type="password" name="pwd"><br><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

**Key Components:**

- `action="/submit"`: Sends the data to the `/submit` route.
    
- `method="post"`: Data is sent using the HTTP POST method.
    
- `name="uname"` and `name="pwd"`: Names used by Flask to identify the input values.
    

#### STEP 5: Create Result Page — `templates/result.html`

Create `result.html` inside the templates folder:

HTML

```
<!DOCTYPE html>
<html>
<head>
    <title>Result</title>
</head>
<body>
    <h2>Form Submission Result</h2>
    <p><strong>Name:</strong> {{ name }}</p>
    <p><strong>Password:</strong> {{ password }}</p>
</body>
</html>
```

**Note:** `{{ name }}` and `{{ password }}` are **placeholders** (Jinja2 syntax) that Flask fills dynamically.

#### STEP 6: Create Flask Backend — `app.py`

In the root `FlaskFormApp` folder, create `app.py`:

Python

```
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Render the form page
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
    # Retrieve form data
    name = request.form.get('uname', '')  # Use .get() for safety
    password = request.form.get('pwd', '')
    
    # Basic validation (optional for learning)
    if not name or not password:
        return "Error: Both fields are required!", 400
    
    # Render result page with data (Note: Never display passwords in real apps!)
    return render_template('result.html', name=name, password=password)

if __name__ == "__main__":
    app.run(debug=True)  # Set debug=False for production
```

**Explanation:**

- `@app.route('/')`: Home URL, displays the form.
- `@app.route('/submit', methods=['POST'])`: Handles the submission logic.
- `request.form.get('uname', '')`: Safely reads the input value (returns empty string if missing).
- Basic validation: Checks if fields are filled (expand for more robust checks).
- `render_template(...)`: Sends the retrieved values to the result page.
- `debug=True`: Enables auto-reload; disable in production for security.
    

---

### 5. Execution

**STEP 7: Run the Application**

1. Open **Command Prompt / Terminal** inside the `FlaskFormApp` folder.
2. Activate the virtual environment (if not already): `flask_env\Scripts\activate` (Windows) or `source flask_env/bin/activate` (Mac/Linux).
3. Run the command: `python app.py`
4. The terminal will display: `* Running on http://127.0.0.1:5000`
5. Open your browser and visit: [http://127.0.0.1:5000](http://127.0.0.1:5000/)
6. **Testing:** Fill the form and submit; verify the result page shows your inputs.
7. **To Stop:** Press **Ctrl + C** in the terminal. Deactivate venv: `deactivate`

**Troubleshooting:**
- **ModuleNotFoundError:** Ensure Flask is installed in the active venv (`pip list`).
- **Port 5000 in use:** Change port in `app.run(port=5001)`.
- **Form not submitting:** Check HTML for correct `action` and `method`.
- **Debug issues:** Enable debug mode and check console for errors.

