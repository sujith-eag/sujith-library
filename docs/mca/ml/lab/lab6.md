## LAB 6: Probability Distributions

This lab demonstrates various probability distributions including normal, uniform, binomial, Poisson, and exponential distributions. We'll visualize each distribution and understand their characteristics.

```python
# Import necessary libraries
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats
```

A probability distribution describes the likelihood of different outcomes in a random event.

```python
# Generate random data and plot histogram
data = np.random.randn(1000)

plt.hist(data, bins=50)
plt.title("Histogram of Random Numbers")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.grid(True)
plt.show()
```

### Normal Distribution

The normal (Gaussian) distribution is a symmetric bell-shaped curve used for real-valued random variables.

```python
# Generate x values
x = np.linspace(-5, 5, 100)

# Calculate probability density function
y = stats.norm.pdf(x, 0, 1)  # mean=0, std=1

# Plot the distribution
plt.plot(x, y)
plt.title("Standard Normal Distribution")
plt.xlabel("Value")
plt.ylabel("Probability Density")
plt.grid(True)
plt.show()
```

### Uniform Distribution

The uniform distribution represents constant probability over a specified range.

```python
# Generate uniform random data
data = np.random.uniform(0, 1, 1000)

plt.hist(data, bins=50)
plt.title("Uniform Distribution (0 to 1)")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.grid(True)
plt.show()

# Uniform distribution over different range
data = np.random.uniform(10, 20, 1000)

plt.hist(data, bins=50)
plt.title("Uniform Distribution (10 to 20)")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.show()
```

### Binomial Distribution

The binomial distribution represents the number of successes in a fixed number of independent Bernoulli trials.

```python
# Parameters
n = 10  # number of trials
p = 0.5  # probability of success

# Generate x values
x = np.arange(0, n+1)

# Calculate probability mass function
y = stats.binom.pmf(x, n, p)

# Plot as line
plt.plot(x, y, 'bo-')
plt.title("Binomial Distribution (n=10, p=0.5)")
plt.xlabel("Number of Successes")
plt.ylabel("Probability")
plt.show()

# Plot as bars
plt.bar(x, y)
plt.title("Binomial Distribution (n=10, p=0.5)")
plt.xlabel("Number of Successes")
plt.ylabel("Probability")
plt.show()
```

### Poisson Distribution

The Poisson distribution represents the number of events occurring in a fixed interval of time or space.

```python
# Parameter
lambda_param = 3  # average number of events

# Generate x values
x = np.arange(0, 15)

# Calculate probability mass function
y = stats.poisson.pmf(x, lambda_param)

# Plot as bars
plt.bar(x, y)
plt.title("Poisson Distribution (λ=3)")
plt.xlabel("Number of Events")
plt.ylabel("Probability")
plt.show()
```

### Exponential Distribution

The exponential distribution represents the time between events in a Poisson process.

```python
# Parameter
lambda_param = 0.5  # rate parameter

# Generate x values
x = np.linspace(0, 10, 100)

# Calculate probability density function
y = stats.expon.pdf(x, scale=1/lambda_param)

# Plot as line (continuous distribution)
plt.plot(x, y)
plt.title("Exponential Distribution (λ=0.5)")
plt.xlabel("Time")
plt.ylabel("Probability Density")
plt.show()
```


## Exercise 7: Probability Distributions

Write a python program for applying Probability Distribution, Normal Distribution, Uniform Distribution. Binomial Distribution, Poisson Distribution and Exponential Distribution. 

This exercise involves writing a Python program to visualize six fundamental probability distributions using `numpy`, `matplotlib`, and `scipy.stats`. These distributions are essential for understanding the likelihood of events in data science.

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

# Set up the figure for multiple subplots
plt.figure(figsize=(15, 10))

# 1. Normal Distribution (Continuous)
x_norm = np.linspace(-5, 5, 100)
y_norm = stats.norm.pdf(x_norm, 0, 1) # Mean=0, Std=1
plt.subplot(2, 3, 1)
plt.plot(x_norm, y_norm)
plt.title("Normal Distribution")

# 2. Uniform Distribution (Continuous)
data_uni = np.random.uniform(0, 1, 1000) # Constant probability over range
plt.subplot(2, 3, 2)
plt.hist(data_uni, bins=20, color='skyblue', edgecolor='black')
plt.title("Uniform Distribution")

# 3. Binomial Distribution (Discrete)
n, p = 10, 0.5 # 10 trials, 50% success chance
x_bin = np.arange(0, n+1)
y_bin = stats.binom.pmf(x_bin, n, p)
plt.subplot(2, 3, 3)
plt.bar(x_bin, y_bin, color='salmon')
plt.title("Binomial Distribution")

# 4. Poisson Distribution (Discrete)
lambda_p = 3 # Average rate of 3 events
x_poi = np.arange(0, 15)
y_poi = stats.poisson.pmf(x_poi, lambda_p)
plt.subplot(2, 3, 4)
plt.bar(x_poi, y_poi, color='lightgreen')
plt.title("Poisson Distribution")

# 5. Exponential Distribution (Continuous)
lambda_exp = 0.5
x_exp = np.linspace(0, 10, 100)
y_exp = stats.expon.pdf(x_exp, scale=1/lambda_exp) # Time between events
plt.subplot(2, 3, 5)
plt.plot(x_exp, y_exp, color='purple')
plt.title("Exponential Distribution")

# 6. Basic Probability Distribution (Random Data)
data_rand = np.random.randn(1000)
plt.subplot(2, 3, 6)
plt.hist(data_rand, bins=30, color='orange')
plt.title("Histogram of Random Data")

plt.tight_layout()
plt.show()
```

## Summary of Distributions

| **Distribution** | **Type**   | **Description**                                                     |
| ---------------- | ---------- | ------------------------------------------------------------------- |
| **Normal**       | Continuous | Symmetric bell-shaped curve; used for real-valued random variables. |
| **Uniform**      | Continuous | Represents constant probability over a specified range.             |
| **Binomial**     | Discrete   | Number of successes in a fixed number of independent trials.        |
| **Poisson**      | Discrete   | Number of events occurring in a fixed interval of time or space.    |
| **Exponential**  | Continuous | Represents the time between events in a Poisson process.            |

