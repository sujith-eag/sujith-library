## LAB 7: Bayes' Theorem Application

This lab demonstrates the application of Bayes' theorem in a medical diagnostic scenario. We'll calculate the probability that a person actually has a condition given a positive test result.

### Problem Statement

Consider a medical scenario where a certain condition exists in 1% of the population. A diagnostic test has:
- 98% sensitivity (correctly identifies individuals with the condition)
- 90% specificity (correctly identifies individuals without the condition)

If an individual tests positive, calculate the probability that they actually have the condition.

```python
# Import necessary libraries (if needed, but not in this case)
# Given Probabilities
# Prior probability of having the disease
p_disease = 0.01  # 1%

# Sensitivity: P(positive | disease)
p_positive_given_disease = 0.98  # 98%

# Specificity: P(negative | no disease) = 90%
p_negative_given_no_disease = 0.90

# Calculate complementary probabilities
p_no_disease = 1 - p_disease  # 99%
p_positive_given_no_disease = 1 - p_negative_given_no_disease  # 10%

# Apply Bayes' Theorem
# Total probability of positive test result
p_positive = (p_positive_given_disease * p_disease) + (p_positive_given_no_disease * p_no_disease)

# Posterior probability
p_disease_given_positive = (p_positive_given_disease * p_disease) / p_positive

# Display Results
print("Prior probability of disease:", p_disease)
print("Probability of positive test given disease:", p_positive_given_disease)
print("Probability of positive test given no disease:", p_positive_given_no_disease)
print("Total probability of positive test:", p_positive)
print(f"Probability of having disease given positive test: {p_disease_given_positive:.4f} ({p_disease_given_positive*100:.2f}%)")
```

## Exercise 8: Bayes' Theorem Case Study

Consider a medical scenario where there is a certain condition that exists in 1% of the population. A diagnostic test for this condition has an accuracy of 98% in correctly identifying the individuals with the condition and it correctly identifies individuals without the condition 90% of the time. If an individual tests positive for the condition, calculate the probability that the individual actually has the condition.

The code above demonstrates the implementation as described in the exercise.

### Theoretical Explanation

Bayes' Theorem is expressed as:

$$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$

In this specific medical context, the formula translates to:

1. **Prior Probability**: Our initial belief before the test ($1\%$).
    
2. **Evidence (Denominator)**: The total probability of testing positive, which includes both **True Positives** (sick people who test positive) and **False Positives** (healthy people who test positive).
    
3. **Posterior Probability**: The updated probability after seeing the test result ($~8.99\%$).

### Analysis of Results

- **Low Predictive Value**: Even though the test is $98\%$ sensitive and $90\%$ specific, the probability of actually having the disease after a positive test is only about **$9\%$**.
    
- **Reasoning**: Because the disease is very rare ($1\%$), the number of healthy people who receive a "False Positive" ($10\%$ of the $99\%$ healthy population) significantly outweighs the number of sick people who receive a "True Positive".
    
