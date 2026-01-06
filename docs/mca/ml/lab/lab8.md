## LAB 8: Text Classification with Naive Bayes

This lab demonstrates text classification using Multinomial Naive Bayes on a small dataset of news articles categorized by topic (Sports, Politics, Technology, Entertainment).

```python
# Import necessary libraries
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report, accuracy_score
```

Prepare the Dataset

```python
# Sample text data with corresponding labels
texts = [
    "The match was exciting and the team played well",  # Sports
    "The government passed a new law today",            # Politics
    "The new smartphone has amazing features",          # Technology
    "The actor won an award for best performance",      # Entertainment
    "The player scored a hat-trick in the game",        # Sports
    "The parliament discussed the budget proposal",     # Politics
    "The software update improves battery life",        # Technology
    "The movie received great reviews from critics"     # Entertainment
]

labels = ["Sports", "Politics", "Technology", "Entertainment", "Sports", "Politics", "Technology", "Entertainment"]
```

Feature Extraction

```python
# Convert text to numerical features using CountVectorizer
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)
```

Split Data

```python
# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, labels, test_size=0.4, random_state=43, stratify=labels
)
```

Train the Model

```python
# Initialize and train Multinomial Naive Bayes classifier
model = MultinomialNB()
model.fit(X_train, y_train)
```

Make Predictions

```python
# Predict on test data
y_pred = model.predict(X_test)
```

Evaluate the Model

```python
# Print classification report
print("Classification Report:")
print(classification_report(y_test, y_pred, zero_division=0))

# Print accuracy score
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy Score: {round(accuracy * 100, 2)}%")

# Show true vs predicted labels
print("True labels:", y_test)
print("Predicted labels:", y_pred)
```


## Exercise 9: Natural Language Processing (NLP) - Text Classification

Demonstrate Naïve Bayes Text classification. (min 4 classes)

____

This exercise demonstrates how to perform text classification using the **Multinomial Naive Bayes** algorithm. This specific variant of Naive Bayes is designed for discrete data like word counts in text documents.

```python
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report, accuracy_score

# 1. Prepare the Dataset (4 Classes: Sports, Politics, Technology, Entertainment)
texts = [
    "The match was exciting and the team played well",  # Sports
    "The government passed a new law today",            # Politics
    "The new smartphone has amazing features",          # Technology
    "The actor won an award for best performance",      # Entertainment
    "The player scored a hat-trick in the game",        # Sports
    "The parliament discussed the budget proposal",     # Politics
    "The software update improves battery life",        # Technology
    "The movie received great reviews from critics"     # Entertainment
]

labels = ["Sports", "Politics", "Technology", "Entertainment", 
          "Sports", "Politics", "Technology", "Entertainment"]

# 2. Feature Extraction
# Convert text strings into a matrix of token counts
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

# 3. Split Data
# Using stratify ensures each class is represented in both train and test sets
X_train, X_test, y_train, y_test = train_test_split(
    X, labels, test_size=0.4, random_state=43, stratify=labels
)

# 4. Train the Multinomial Naive Bayes Model
model = MultinomialNB()
model.fit(X_train, y_train)

# 5. Make Predictions and Evaluate
y_pred = model.predict(X_test)

print("Classification Report:")
print(classification_report(y_test, y_pred, zero_division=0))
print(f"Accuracy Score: {round(accuracy_score(y_test, y_pred) * 100, 2)}%")
```

### Key Concepts in NLP Classification

- **CountVectorizer**: This tool performs "tokenization". It breaks sentences into individual words and counts how many times each word appears, creating a numerical matrix that the model can understand.
    
- **Multinomial Naive Bayes**: Unlike the Gaussian version used for continuous numbers (like heights or weights), the Multinomial version works with counts or frequencies of words.
    
- **Stratification**: In `train_test_split`, setting `stratify=labels` ensures that the small dataset doesn't accidentally leave one category out of the training or testing phase.
    
- **Zero Division**: In the classification report, `zero_division=0` prevents errors if the model fails to predict any instances of a particular class during a small test.
    
