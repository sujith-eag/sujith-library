## LAB 4: Naive Bayes Classification

This lab demonstrates the implementation of Gaussian Naive Bayes classifier on the Salary dataset. We'll cover data loading, preprocessing categorical variables, training the model, and evaluating its performance.

```python
# Import necessary libraries
import pandas as pd
import numpy as np
from sklearn.naive_bayes import GaussianNB
from sklearn import preprocessing

# Load training and testing datasets
salary_train = pd.read_csv("SalaryData_Train.csv")
salary_test = pd.read_csv("SalaryData_Test.csv")
```

Preprocess Categorical Variables

```python
# List of categorical columns to encode
string_columns = ["workclass", "education", "maritalstatus", "occupation", "relationship", "race", "sex", "native"]

# Initialize label encoder
label_encoder = preprocessing.LabelEncoder()

# Encode categorical variables in both train and test sets
for i in string_columns:
    salary_train[i] = label_encoder.fit_transform(salary_train[i])
    salary_test[i] = label_encoder.fit_transform(salary_test[i])
```

Prepare Features and Target

```python
# Get column names
col_names = list(salary_train.columns)

# Split features and target for training data
train_X = salary_train[col_names[0:13]]
train_y = salary_train[col_names[13]]

# Split features and target for testing data
test_X = salary_test[col_names[0:13]]
test_y = salary_test[col_names[13]]
```

Train the Gaussian Naive Bayes Model

```python
# Initialize the model
gmodel = GaussianNB()

# Train the model on training data
gmodel.fit(train_X, train_y)

# Predict on training data
train_pred = gmodel.predict(train_X)

# Predict on testing data
test_pred = gmodel.predict(test_X)
```

Evaluate Model Performance

```python
# Calculate training accuracy
train_acc = np.mean(train_pred == train_y)
print("Training Accuracy: ", train_acc)

# Calculate testing accuracy
test_acc = np.mean(test_pred == test_y)
print("Testing Accuracy: ", test_acc)
```


## Exercise 5: Bayesian Classification (Gaussian Naïve Bayes)

Apply Naïve Bayes for Salary dataset (Gaussian) and print the accuracy.

In this exercise, we apply the **Gaussian Naïve Bayes** algorithm to the `Salary` dataset. This algorithm is particularly suited for datasets where the continuous features are assumed to follow a normal (Gaussian) distribution.

```python
import pandas as pd
import numpy as np
from sklearn.naive_bayes import GaussianNB
from sklearn import preprocessing

# 1. Load the Datasets
# The dataset is split into training and testing files
salary_train = pd.read_csv("SalaryData_Train.csv")
salary_test = pd.read_csv("SalaryData_Test.csv")

# 2. Preprocess Categorical Variables
# Naive Bayes requires numerical input
string_columns = ["workclass", "education", "maritalstatus", "occupation", "relationship", "race", "sex", "native"]

label_encoder = preprocessing.LabelEncoder()

for i in string_columns:
    salary_train[i] = label_encoder.fit_transform(salary_train[i])
    salary_test[i] = label_encoder.fit_transform(salary_test[i])

# 3. Prepare Features (X) and Target (y)
# Selecting the first 13 columns as features and the 14th as the target
train_X = salary_train.iloc[:, 0:13]
train_y = salary_train.iloc[:, 13]
test_X = salary_test.iloc[:, 0:13]
test_y = salary_test.iloc[:, 13]

# 4. Train the Gaussian Naive Bayes Model
gmodel = GaussianNB()
gmodel.fit(train_X, train_y)

# 5. Make Predictions and Print Accuracy
train_pred = gmodel.predict(train_X)
test_pred = gmodel.predict(test_X)

train_acc = np.mean(train_pred == train_y)
test_acc = np.mean(test_pred == test_y)

print(f"Training Accuracy: {train_acc * 100:.2f}%")
print(f"Testing Accuracy: {test_acc * 100:.2f}%")
```

---

### Key Concepts and Analysis

- **Label Encoding**: This process transforms text-based categories (like "Education") into numbers (0, 1, 2, etc.) so the Gaussian mathematical formula can be applied.
    
- **The "Gaussian" Assumption**: The model assumes that the numerical features (like Age or Hours-per-week) follow a bell-shaped curve (Normal Distribution).
    
- **Performance**: The accuracy score represents the proportion of correct salary predictions (e.g., whether a person earns >50K or <=50K) over the total number of cases tested.
    
