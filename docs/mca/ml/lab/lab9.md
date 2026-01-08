## LAB 9: K-Nearest Neighbors Classification

This lab demonstrates the K-Nearest Neighbors (KNN) algorithm for classification using the Iris dataset. We'll train a KNN classifier and visualize the predictions.

```python
# Import necessary libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt

# Load and Prepare Data
# Load the Iris dataset
iris = load_iris()

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.25, random_state=42
)

# Train the KNN Model
# Initialize KNN classifier with k=3
model = KNeighborsClassifier(n_neighbors=3)

# Train the model
model.fit(X_train, y_train)

# Make Predictions
# Predict on test data
y_pred = model.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {round(accuracy * 100, 2)}%")
print("Predictions:", y_pred)

# Visualize Results
# Scatter plot of predictions using first two features
plt.scatter(X_test[:, 0], X_test[:, 1], c=y_pred, cmap="viridis", edgecolors='k')
plt.xlabel("Sepal Length (cm)")
plt.ylabel("Sepal Width (cm)")
plt.title("K-Nearest Neighbors Classification Results")
plt.colorbar(label='Predicted Class')
plt.show()
```
