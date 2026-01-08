## LAB 3: Model Training and Evaluation

This lab demonstrates data splitting, training a machine learning model (Logistic Regression), and evaluating its performance using various metrics like confusion matrix, accuracy, and classification report. We'll use the Iris dataset for this classification task.

```python
# Import necessary libraries
import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (confusion_matrix, accuracy_score, classification_report)

# Load the Iris dataset
iris = load_iris()

# Display dataset information
iris

# Prepare Features and Target
# Separate features (X) and target (y)
X, y = iris.data, iris.target

# Split the data: 80% for training, 20% for testing
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the Logistic Regression model
model = LogisticRegression(max_iter=200)

# Train the model on the training data
model.fit(X_train, y_train)

# Make Predictions on Test Data
# Predict the target values for the test set
y_pred = model.predict(X_test)

# Evaluate Model Performance
# Confusion Matrix: Shows true positives, false positives, etc.
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))

# Accuracy Score: Proportion of correct predictions
print("Accuracy Score:", accuracy_score(y_test, y_pred))

# Classification Report: Precision, recall, F1-score for each class
print("Classification Report:\n", classification_report(y_test, y_pred))
```

### Exercise 4: Classification using Logistic Regression

Using iris dataset split the dataset and apply Logistic Regression, print the confusion matrix and classification report. 

Explain why data preprocessing is important before training a machine learning model

The code above demonstrates the implementation as described in the exercise. Below is the theory explanation.

### Theory: Role of Preprocessing for Classification

Preprocessing is vital for classification tasks because it ensures the input data is in a format that the mathematical algorithms can interpret efficiently.

- **Handling Categorical Targets**: In many classification tasks, labels are strings (e.g., "Setosa", "Versicolor"). These must be converted into numerical values so the model can compute loss functions.
    
- **Feature Scaling**: Logistic Regression uses gradient-based optimization. If features have vastly different scales (e.g., one measured in millimeters and another in kilometers), the model may struggle to find the optimal weights.
    
- **Class Imbalance**: Preprocessing allows us to check if one class has significantly more samples than others. If left unaddressed, the classifier may become biased toward the majority class.
    
- **Improving Model Metrics**: Proper cleaning and scaling directly impact the **Precision** and **Recall** values found in the classification report, leading to a more reliable model.
    

