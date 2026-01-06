## LAB 1: Introduction to Data Handling with Pandas

This lab demonstrates basic data manipulation using the Pandas library in Python. We'll cover creating DataFrames, exploring data, handling missing values, and performing common operations.

```python
import pandas as pd  # Pandas for data manipulation
import numpy as np   # NumPy for numerical operations and NaN handling
```

Create a sample DataFrame with mixed data types. This DataFrame has three columns: col1 (integers), col2 (strings), col3 (integers)

```python
# Create a sample DataFrame
df = pd.DataFrame({
    "col1": [1, 2, 3, 4],
    "col2": ["abc", "def", "ghi", "xyz"],
    "col3": [111, 222, 333, 444]
})

df
```

Demonstrate basic exploration methods.

```python
# Display the first few rows
df.head()

# Display the last few rows
df.tail()

# Count non-null values in each column
df.count()

# Get the shape of the DataFrame
df.shape

# Count values in a specific column
df.col1.count()

# Get unique values in col1
df.col1.unique()

# Count values in col2
df["col2"].count()

# Get unique values in col2
df["col2"].unique()

# Get value counts for col1
df["col1"].value_counts()
```

Work with DataFrames containing NaN values.

```python
# Create a DataFrame with some NaN values
df1 = pd.DataFrame({
    "col1": [1, 2, 3, 4, 5],
    "col2": ["abc", "def", np.nan, "xyz", "sss"],
    "col3": [111, 222, 333, 444, np.nan]
})

df1

# Count non-null values in col3
df1["col3"].count()

# Get unique values in col3
df1["col3"].unique()

# Get value counts for col3
df1["col3"].value_counts()
```

Create another DataFrame and perform sorting and null checks.

```python
# Create DataFrame with more NaN values
df1 = pd.DataFrame({
    "col1": [1, 2, 3, 4, 5, np.nan],
    "col2": ["abc", "def", "def", np.nan, "xyz", "sss"],
    "col3": [111, 222, 333, 444, np.nan, np.nan]
})

df1

# Sort values in col2
df1["col2"].sort_values()

# Sort the DataFrame by col2
df1.sort_values("col2")

# Alternative sort
df1.sort_values(by="col2")

# Check for null values
df1.isnull()

# Drop rows with NaN
df1.dropna()
```


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

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris

# f) Convert data into a structured DataFrame
iris = load_iris()
df = pd.DataFrame(data=iris.data, columns=iris.feature_names)
df['species'] = iris.target

# a) Display the first 8 rows
df.head(8)

# b) Display the last 8 rows
df.tail(8)

# c) Display total number of rows and columns
df.shape

# d) Count for a particular column
df['sepal length (cm)'].count()

# e) Count unique values for a specific column
df['species'].unique()

# g) Perform value counts for each column
df['species'].value_counts()

# h) Sort the values by a particular column
sorted_df = df.sort_values(by='sepal length (cm)', ascending=False)
sorted_df.head()

# i) Generate a plot and provide insights
plt.figure(figsize=(8, 6))
plt.scatter(df['sepal length (cm)'], df['sepal width (cm)'], c=df['species'])
plt.title("Sepal Length vs Width")
plt.xlabel("Sepal Length (cm)")
plt.ylabel("Sepal Width (cm)")
plt.grid(True)
plt.show()
```

**Insight:** The scatter plot shows the relationship between sepal length and width, colored by species. It reveals that different species tend to cluster in different regions of the plot, indicating that these features can help distinguish between species.

## Detailed Explanation of the Operations

- **Data Inspection (`head`/`tail`):** This allows you to verify if the data loaded correctly and see the data types (integers, floats, or strings) at a glance.
    
- **Structural Understanding (`shape`):** Knowing the dimensions helps you understand the scale of the dataset and if you have enough samples for training.
    
- **Data Integrity (`count`/`unique`):** * Using `.count()` helps identify missing values (if the count is less than the total rows).
    
    - Using `.unique()` is essential for classification tasks to see how many target classes exist.
        
- **Distribution Analysis (`value_counts`):** This is used to check for **class imbalance**. For example, in Lab 1 and Lab 8, checking the count of labels ensures that one category doesn't overwhelm the others.
    
- **Sorting (`sort_values`):** This helps in identifying outliers or the "extreme" ends of your data spectrum.
    
- **Visualization Insight:** * Generating a scatter plot or histogram (as seen in) reveals the relationship between features.
    
    - **Insight:** In the Iris example, the scatter plot visually demonstrates that species often form distinct clusters, suggesting that a classification model (like KNN or Logistic Regression) will likely be effective.


