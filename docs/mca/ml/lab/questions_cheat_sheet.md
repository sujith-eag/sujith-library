# Data Science & Machine Learning Cheat Sheet

## Theoretical Concepts

### 1. Exploratory Data Analysis (EDA)

EDA is the process of analyzing datasets to summarize their main characteristics, often using visual methods. It helps in understanding the data structure, detecting outliers, and formulating hypotheses for further analysis.

**Key Steps:**
- Data inspection (head, tail, shape)
- Handling missing values
- Statistical summaries (mean, median, std)
- Visualization for insights

**Why Important:** Ensures data quality before modeling, prevents errors from dirty data.

### 2. Machine Learning Basics

Machine Learning (ML) is a subset of AI that enables systems to automatically learn and improve from experience without being explicitly programmed.

**Types:**
- **Supervised Learning:** Uses labeled data to train models (e.g., classification, regression).
- **Unsupervised Learning:** Finds hidden patterns in unlabeled data (e.g., clustering, dimensionality reduction).

**Workflow:** Data Prep → Model Training → Evaluation → Prediction.

### 3. Classification Algorithms

Classification predicts categorical labels based on input features.

- **Logistic Regression:** Uses a sigmoid function to predict probabilities for binary outcomes. Interpretable coefficients show feature impact.
- **Naive Bayes:** Based on Bayes' theorem, assumes feature independence. Fast and works well with text data.
- **K-Nearest Neighbors (KNN):** Classifies by majority vote of k nearest data points. Simple but sensitive to scale and noise.

**Evaluation:** Confusion matrix, accuracy, precision, recall, F1-score.

### 4. Dimensionality Reduction

Techniques to reduce the number of features while preserving information.

- **Principal Component Analysis (PCA):** Transforms data into principal components capturing maximum variance. Used for visualization and noise reduction.

**Benefits:** Improves model efficiency, reduces overfitting.

### 5. Probability Distributions

Distributions describe the likelihood of different outcomes for random variables.

- **Normal (Gaussian):** Symmetric bell-shaped curve, defined by mean and variance. Common in natural phenomena.
- **Uniform:** Equal probability over a range. Used in simulations.
- **Binomial:** Number of successes in fixed trials. Discrete, requires n trials and p probability.
- **Poisson:** Number of events in a fixed interval. For rare events.
- **Exponential:** Time between events in a Poisson process. Memoryless property.

**Applications:** Modeling real-world uncertainties, hypothesis testing.

### 6. Bayes' Theorem

Updates the probability of a hypothesis based on new evidence.

**Formula:** P(H|E) = [P(E|H) × P(H)] / P(E)

Where:
- P(H|E): Posterior probability
- P(E|H): Likelihood
- P(H): Prior probability
- P(E): Evidence (total probability)

**Applications:** Medical diagnostics, spam filtering, risk assessment.

### 7. Linear Regression

Models the linear relationship between a dependent variable (y) and one or more independent variables (X).

**Equation:** y = mx + c
- m: Slope (coefficient) - change in y per unit x
- c: Intercept - y when x=0

**Evaluation:** R-squared (variance explained), MSE (prediction error).

**Assumptions:** Linearity, independence, homoscedasticity, normality of residuals.

## 1. Data Essentials (EDA & Cleaning)

Used for Exercises 1, 2, and 3.

### Basic Inspection

```python
df.head(8)  # Display first 8 rows
df.tail(8)  # Display last 8 rows
df.shape    # Get dimensions (rows, columns)
```

### Counts & Uniques

```python
df['col'].count()     # Count non-null values in column
df['col'].unique()    # Get unique values in column
```

### Value Distribution

```python
df['col'].value_counts()  # Frequency count of values in column
```

### Missing Values

```python
df.isnull().sum()  # Count missing values per column
df.dropna()        # Drop rows with missing values
```

### Statistics

```python
df.mean()      # Mean of each column
df.median()    # Median of each column
df.std()       # Standard deviation
df.describe()  # Summary statistics
```

## 2. Machine Learning Workflow (Classification)

Used for Exercises 4, 5, and 9.

### Step 1: Encoding Categorical Data

Required for Naive Bayes and NLP targets.

```python
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
df['col'] = le.fit_transform(df['col'])
```

### Step 2: Training & Prediction

```python
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Logistic Regression (Ex 4)
from sklearn.linear_model import LogisticRegression
model = LogisticRegression(max_iter=200)
model.fit(X_train, y_train)

# Naive Bayes (Ex 5)
from sklearn.naive_bayes import GaussianNB
model = GaussianNB()
model.fit(X_train, y_train)

# KNN (Ex 9)
from sklearn.neighbors import KNeighborsClassifier
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
```

### Step 3: Evaluation Metrics

```python
from sklearn.metrics import confusion_matrix, classification_report, accuracy_score
y_pred = model.predict(X_test)
confusion_matrix(y_test, y_pred)
classification_report(y_test, y_pred)
accuracy_score(y_test, y_pred)
```

## 3. Advanced Techniques (PCA, NLP, & Regression)

Used for Exercises 6, 9, and 10.

### PCA (Ex 6)

Scale data first!

```python
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)
```

### NLP (Ex 9)

Convert text to numbers using CountVectorizer. Use MultinomialNB for word count data.

```python
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(text_data)
model = MultinomialNB()
model.fit(X, y)
```

### Linear Regression (Ex 10)

Focus on intercept and coefficient.

```python
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X, y)
print("Intercept:", model.intercept_)
print("Coefficient:", model.coef_[0])
```

## 4. Mathematical Models (Probability & Bayes)

Used for Exercises 7 and 8.

### Distributions (Ex 7)

```python
import scipy.stats as stats

# Normal
stats.norm.pdf(x, mean, std)

# Binomial
stats.binom.pmf(x, n, p)

# Poisson
stats.poisson.pmf(x, lambda_val)

# Exponential
stats.expon.pdf(x, scale=1/lambda_val)
```

### Bayes' Theorem (Ex 8)

P(Disease|Positive) = (P(Positive|Disease) * P(Disease)) / P(Positive)

Where P(Positive) = (P(Positive|Disease) * P(Disease)) + (P(Positive|No Disease) * P(No Disease))

## Analysis Patterns for Insights

When asked to "analyze" or "provide insights," refer to these patterns:

- **Scatter Plots:** Clusters indicate that classes are well-separated by these features.
- **Standard Deviation:** High values indicate high volatility/spread in that specific column.
- **Coefficient:** A 1-unit increase in the independent variable results in a [Value] increase in the target variable.


# Machine Learning Practical Lab questions

## Exercise 1: Exploratory Data Analysis (EDA) Fundamentals

Feed any dataset into a script and perform the following:

- a) Display the first 8 rows.
- b) Display the last 8 rows.
- c) Display the total number of rows and columns.
- d) Count for a particular column
- e) Count unique values for a specific column.
- f) Convert data into a structured DataFrame.
- g) Perform value counts for each column.
- h) Sort the values by a particular column.
- i) Generate a plot and provide insights on what the visualization represents.
    
## Exercise 2: Data Cleaning and Statistical Inference

Use CC_Exence_Excercise.csv, displays the number of rows and columns, Handle any missing values (introduce missing values artificially if not exist).

Provide a summary table for the data and what do we infer from this result.

Explain why missing values needs to be eliminated before training a machine learning model. 

Plot a graph to understand the standard deviation of all the columns and analyse it's results    

## Exercise 3: Business Data Analysis

Use 50_startups dataset, give the basics and derive the mean, median and value counts for each column. 

Also plot a graph for the results and analyze the results. 

Explain why data preprocessing is important before training a machine learning model.

## Exercise 4: Classification using Logistic Regression

Using iris dataset split the dataset and apply Logistic Regression, print the confusion matrix and classification report. 

Explain why data preprocessing is important before training a machine learning model

(Explain the role of preprocessing specifically for classification tasks.)
    

## Exercise 5: Bayesian Classification

Apply Naïve Bayes for Salary dataset (Gaussian) and print the accuracy.


(Apply the **Gaussian Naïve Bayes** algorithm. Print the final model accuracy.)
    

## Exercise 6: Dimensionality Reduction

Use iris dataset and apply Principal component analysis, plot a graph and give its analysis.

(Apply **Principal Component Analysis (PCA)**. Plot the reduced components on a graph and provide a structural analysis. )    


## Exercise 7: Probability Distributions

Write a python program for applying 
Probability Distribution, 
Normal Distribution, 
Uniform Distribution. 
Binomial Distribution, 
Poisson Distribution and 
Exponential Distribution. 
    

## Exercise 8: Bayes' Theorem Case Study

Consider a medical scenario where there is a certain condition that exists in 1% of the population. 
A diagnostic test for this condition has an accuracy of 98% in correctly identifying the individuals with the condition and it correctly identifies individuals without the condition 90% of the time. 

If an individual tests positive for the condition, calculate the probability that the individual actually has the condition.

**Scenario:** A medical condition exists in 1% of the population. A diagnostic test has:
- **98% Accuracy** for identifying those with the condition (Sensitivity).
- **90% Accuracy** for identifying those without the condition (Specificity).
- **Calculation:** If an individual tests positive, calculate the probability that the individual actually has the condition.


## Exercise 9: Natural Language Processing (NLP)

Demonstrate Naïve Bayes Text classification. (min 4 classes)

(Demonstrate **Naïve Bayes Text Classification** using a minimum of 4 distinct classes.)    


## Exercise 10: Linear Regression Analysis

Use Exam dataset, apply linear regression and analyse if internal marks increases by 1 unit, by how much does externals marks increases? 

Plot the graph and give intercept and co-efficient values.


Apply **Linear Regression** to analyze the relationship between internal and external marks.    
- **Analysis:** If internal marks increase by 1 unit, by how much do external marks increase?
- **Output:** Plot the regression line and provide the **Intercept** and **Coefficient** values.
    
