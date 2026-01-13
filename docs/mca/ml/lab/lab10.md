# LAB 10: Linear Regression

This lab demonstrates simple linear regression using exam scores data. We'll predict external exam scores based on internal exam scores.

```python
# Import necessary libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error
import matplotlib.pyplot as plt

# Load and Explore Data
# Load the dataset
data = pd.read_csv("Exam.csv")
df = pd.DataFrame(data)

# Display the first few rows
print("Dataset preview:")
print(df.head())

# Prepare Features and Target
# Define features (X) and target (y)
X = df[["Internal exam"]]
y = df["External exam"]

# Split Data
# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the Linear Regression Model
# Initialize and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Display model parameters
print(f"Model Intercept: {model.intercept_:.2f}")
print(f"Model Coefficient: {model.coef_[0]:.2f}")

# Make Predictions
# Predict on test data
y_pred = model.predict(X_test)

# Evaluate the Model
# Calculate R-squared and MSE
r2 = r2_score(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)

print(f"R-squared Score: {r2:.4f}")
print(f"Mean Squared Error: {mse:.2f}")

# Visualize Results
# Scatter plot of actual vs predicted values
plt.scatter(X_test, y_test, color="blue", label="Actual Data", alpha=0.7)
plt.plot(X_test, y_pred, color="red", label="Regression Line", linewidth=2)
plt.xlabel("Internal Exam Score")
plt.ylabel("External Exam Score")
plt.title("Linear Regression: Internal vs External Exam Scores")
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()
```

## Exercise 10: Linear Regression Analysis

Use Exam dataset, apply linear regression and analyse if internal marks increases by 1 unit, by how much does externals marks increases? 

Plot the graph and give intercept and co-efficient values.

The code above demonstrates the implementation as described in the exercise.

### Analysis and Interpretation

#### 1. Mathematical Relationship

The relationship is defined by the equation:

$$\text{External Marks} = (\text{Coefficient} \times \text{Internal Marks}) + \text{Intercept}$$

#### 2. Impact Analysis

- **Coefficient (Slope)**: The coefficient value tells you exactly how much the external marks increase for every 1-unit increase in internal marks. For example, if the coefficient is **0.85**, it means that for every **1 additional mark** a student gets in their internal exam, their predicted external mark increases by **0.85 units**.
    
- **Intercept**: This is the predicted external score if the internal score were zero.
    

#### 3. Model Fit

- **R-squared Score**: This value (ranging from 0 to 1) indicates how well the internal marks explain the variance in external marks. A score closer to 1 suggests a very strong predictive relationship.
    
- **Visual Insight**: The regression line represents the "best fit." The closer the blue dots (actual data) are to the red line (predictions), the more accurate the model is for this dataset.
    
