## LAB 2: Data Loading and Basic Statistics

This lab covers loading datasets from CSV files, performing basic data exploration, and computing statistical measures on data columns.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
```

### Loading and Exploring the Credit Card Expense Dataset

```python
# Load the dataset from CSV file
cc_data = pd.read_csv("CC_Expense.csv")

# Display the first few rows
cc_data.head()

# Display the last few rows
cc_data.tail()

# Get the shape of the dataset (rows, columns)
cc_data.shape

# Generate descriptive statistics
cc_data.describe()

# Drop the 'SL_no' column as it's likely an index column
cc_data = cc_data.drop("SL_no", axis=1)
```

### Loading and Analyzing the Startups Dataset

```python
# Load the startups dataset
startups_data = pd.read_csv("50_startups.csv")

# Display the first few rows
startups_data.head()

# Get the shape of the dataset
startups_data.shape

# Calculate mean of Profit column
startups_data["Profit"].mean()

# Calculate median of Profit column
startups_data["Profit"].median()

# Calculate mode of Profit column
startups_data["Profit"].mode()

# Get value counts for Profit column
startups_data["Profit"].value_counts()

# Calculate variance of Profit column
startups_data["Profit"].var()

# Calculate standard deviation of Profit column
startups_data["Profit"].std()

# Generate descriptive statistics for Profit column
startups_data["Profit"].describe()
```


## Exercise 2: Data Cleaning and Statistical Inference

Use `CC_Expense.csv`, display the number of rows and columns , Handle any missing values (introduce missing values artificially if not exist). 

Provide a summary table for the data and what do we infer from this result.

Explain why missing values needs to be eliminated before training a machine learning model. 

Plot a graph to understand the standard deviation of all the columns and analyse it's results    

```python
# 1. Load the dataset
data = pd.read_csv("CC_Expense.csv")

# 2. Display number of rows and columns
data.shape

# 3. Handle Missing Values
# Artificially introducing missing values as requested
data.loc[0:5, 'Amount'] = np.nan 

# Checking for null values
data.isnull().sum()

# Elimination: Dropping rows with NaN values
data_cleaned = data.dropna()

data_cleaned.shape

# 4. Summary Table and Inference
# Generating descriptive statistics
summary = data_cleaned.describe()
summary

# 5. Plot Standard Deviation
# Calculating standard deviation for all numerical columns
std_values = data_cleaned.std(numeric_only=True)
std_values

plt.figure(figsize=(10, 6))
std_values.plot(kind='bar', color='skyblue', edgecolor='black')
plt.title("Standard Deviation of Columns")
plt.ylabel("Standard Deviation Value")
plt.xlabel("Features")
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.show()
```

## Analysis and Inference

### What do we infer from the Summary Table?

- **Central Tendency**: The `mean` and `median` (50%) values tell us the average spending behavior of the customers.
    
- **Data Spread**: The `min`, `max`, and `std` (standard deviation) show the range of expenses. If the `max` is significantly higher than the `75%` percentile, it suggests the presence of **outliers** (high-spending individuals).
    
- **Standard Deviation Graph**: A high bar in the plot indicates that the data points in that column are spread out far from the mean (high volatility), while a low bar indicates the data is more consistent.
    

### Theory: Why Missing Values Must Be Eliminated

Before training a machine learning model, missing values must be handled for the following reasons:

1. **Algorithm Incompatibility**: Most standard machine learning libraries (like `scikit-learn`) cannot handle `NaN` or `null` values and will throw an error during the `.fit()` process.
    
2. **Bias and Inaccuracy**: If missing data isn't handled, the model might learn patterns from an incomplete representation of the population, leading to biased predictions or poor accuracy.
    
3. **Data Distortion**: Missing values can lead to incorrect statistical calculations (like mean or variance), which further misleads the training algorithm during the optimization phase.
    


## Exercise 3: Business Data Analysis

Use `50_startups.csv`, give the basics and derive the mean, median and value counts for each column. Also plot a graph for the results and analyze the results. Explain why data preprocessing is important before training a machine learning model.

In this exercise, we analyze the `50_startups` dataset to understand the financial performance of various companies across different spending categories.

```python
# 1. Load the dataset
data = pd.read_csv("50_startups.csv")

# 2. Basic Exploration
data.shape

data.head()

# 3. Derive mean, median, and value counts for all columns
# Note: Value counts are most meaningful for the 'State' categorical column
for column in data.columns:
    print(f"--- Statistics for {column} ---")
    if data[column].dtype != 'object':
        print(f"Mean: {data[column].mean()}")
        print(f"Median: {data[column].median()}")
    print(f"Value Counts:\n{data[column].value_counts()}")

# 4. Plotting Results (Visualizing Profit distribution)
plt.figure(figsize=(10, 6))
plt.hist(data['Profit'], bins=10, color='lightgreen', edgecolor='black')
plt.title("Distribution of Profit among Startups")
plt.xlabel("Profit Amount")
plt.ylabel("Frequency")
plt.show()

# 5. Analyzing Profit vs R&D Spend (Correlation Analysis)
plt.scatter(data['R&D Spend'], data['Profit'], color='blue')
plt.title("R&D Spend vs Profit")
plt.xlabel("R&D Spend")
plt.ylabel("Profit")
plt.show()
```

---

### Analysis of Results

- **Mean vs. Median**: By comparing the mean and median of the "Profit" column, we can determine if the data is skewed. If the mean is significantly higher than the median, it suggests a few startups are earning exceptionally high profits.
    
- **State Distribution**: The `value_counts()` for the "State" column shows which regions (e.g., New York, California) are most represented in the dataset.
    
- **Visual Insight**: The scatter plot typically reveals a strong positive correlation between "R&D Spend" and "Profit," implying that startups investing more in research tend to be more profitable.
    

---

### Theory: Importance of Data Preprocessing

Data preprocessing is a critical step before training a machine learning model for several reasons:

- **Handling Categorical Data**: Machine learning models primarily work with numbers. Features like "State" in this dataset must be converted into numerical values (using techniques like Label Encoding or One-Hot Encoding) before the model can process them.
    
- **Feature Scaling**: Some columns might have values in the thousands (like Profit), while others are smaller. Standardizing or scaling these values ensures that no single feature dominates the model's learning process.
    
- **Removing Noise**: Preprocessing involves removing outliers or irrelevant data (like index columns), which improves the accuracy and efficiency of the final model.
    
