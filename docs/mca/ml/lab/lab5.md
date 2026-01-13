# LAB 5: Principal Component Analysis (PCA)

This lab demonstrates dimensionality reduction using Principal Component Analysis on the Iris dataset. We'll standardize the data, apply PCA to reduce to 2 components, and visualize the results.

```python
# Import necessary libraries
from sklearn.datasets import load_iris
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import pandas as pd
import matplotlib.pyplot as plt

# Load the Iris dataset
data = load_iris()

# Display dataset information
data

# Prepare and Standardize the Data
# Create DataFrame from features
X = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target

# Standardize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Apply Principal Component Analysis
# Initialize PCA with 2 components
pca = PCA(n_components=2)

# Fit and transform the scaled data
X_pca = pca.fit_transform(X_scaled)

# Visualize the PCA Results
# Scatter plot of the two principal components
plt.figure(figsize=(8, 6))
scatter = plt.scatter(X_pca[:, 0], X_pca[:, 1], c=y, cmap='viridis', edgecolors='k')
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
plt.title('PCA of Iris Dataset')
plt.colorbar(scatter, label='Target Class')
plt.grid(True, alpha=0.3)
plt.show()
```

## Exercise 6: Dimensionality Reduction (PCA)

Use iris dataset and apply Principal component analysis, plot a graph and give its analysis.

The code above demonstrates the implementation as described in the exercise.

### Analysis of PCA Results

- **Dimensionality Reduction**: We successfully transformed a 4-dimensional dataset into a 2-dimensional space without losing the ability to distinguish between classes.
    
- **Feature Variance**: **Principal Component 1 (PC1)** usually captures the maximum variance in the data. In the plot, you will notice that the species are mostly separated along the horizontal axis (PC1).
    
- **Clustering**: The visualization shows that "Setosa" usually forms a very distinct cluster far from the others, while "Versicolor" and "Virginica" may have slight overlaps. This indicates that the first two components are sufficient to represent the structure of the data for most classification tasks.
    
- **Information Compression**: By reducing the features, we decrease the computational cost for future machine learning models while removing "noise" from less significant variables.
    
