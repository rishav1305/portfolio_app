# ---
# jupyter:
#   jupytext:
#     text_representation:
#       extension: .py
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.14.5
#   kernelspec:
#     display_name: Python 3
#     language: python
#     name: python3
# ---

# %% [markdown]
# # Data Analysis with Python
#
# Welcome to this interactive Python notebook! In this workspace, we'll explore data analysis techniques using pandas and visualization with matplotlib.
#
# Feel free to modify this notebook and experiment with the code. Your changes will be saved in your GitHub Codespace.

# %%
# Import required libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Set the style for plots
plt.style.use('ggplot')
sns.set_theme()

# Display plots inline
%matplotlib inline

# %% [markdown]
# ## Creating Sample Data
#
# Let's create a sample dataset to analyze. This simulates real-world data collection and preparation.

# %%
# Creating a sample DataFrame
np.random.seed(42)
dates = pd.date_range('20230101', periods=100)
df = pd.DataFrame({
    'date': dates,
    'value': np.random.randn(100).cumsum(),
    'category': np.random.choice(['A', 'B', 'C'], 100),
    'amount': np.random.randint(100, 1000, size=100)
})

# Display the first few rows
df.head()

# %% [markdown]
# ## Data Exploration
#
# Let's explore our dataset to understand its structure and contents.

# %%
# Basic information about the DataFrame
print("Dataset shape:", df.shape)
print("\nData types:")
print(df.dtypes)
print("\nSummary statistics:")
df.describe()

# %% [markdown]
# ## Data Visualization
#
# Let's create some visualizations to better understand our data.

# %%
# Time series plot
plt.figure(figsize=(12, 6))
plt.plot(df['date'], df['value'], color='blue', alpha=0.7)
plt.title('Value Over Time')
plt.xlabel('Date')
plt.ylabel('Value')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

# %%
# Distribution of amounts by category
plt.figure(figsize=(10, 6))
sns.boxplot(x='category', y='amount', data=df)
plt.title('Amount Distribution by Category')
plt.tight_layout()
plt.show()

# %%
# Count of categories
category_counts = df['category'].value_counts()

plt.figure(figsize=(8, 6))
sns.barplot(x=category_counts.index, y=category_counts.values)
plt.title('Count of Categories')
plt.xlabel('Category')
plt.ylabel('Count')
plt.tight_layout()
plt.show()

# %% [markdown]
# ## Data Aggregation
#
# Let's perform some aggregation operations on our data.

# %%
# Group by category and calculate statistics
category_stats = df.groupby('category').agg({
    'value': ['mean', 'std', 'min', 'max'],
    'amount': ['mean', 'std', 'min', 'max', 'sum']
})

category_stats

# %% [markdown]
# ## Time-based Analysis
#
# Let's analyze trends over time.

# %%
# Add month and year columns
df['month'] = df['date'].dt.month
df['year'] = df['date'].dt.year

# Group by month and calculate average values
monthly_avg = df.groupby('month').agg({
    'value': 'mean',
    'amount': 'mean'
}).reset_index()

# Plot monthly averages
fig, ax1 = plt.subplots(figsize=(12, 6))

color = 'tab:blue'
ax1.set_xlabel('Month')
ax1.set_ylabel('Average Value', color=color)
ax1.plot(monthly_avg['month'], monthly_avg['value'], color=color, marker='o')
ax1.tick_params(axis='y', labelcolor=color)

ax2 = ax1.twinx()  # Create a second y-axis
color = 'tab:red'
ax2.set_ylabel('Average Amount', color=color)
ax2.plot(monthly_avg['month'], monthly_avg['amount'], color=color, marker='s')
ax2.tick_params(axis='y', labelcolor=color)

plt.title('Monthly Average Trends')
fig.tight_layout()
plt.show()

# %% [markdown]
# ## Your Turn!
#
# Now it's your turn to experiment with this dataset. Here are some ideas to explore:
#
# 1. Create different types of visualizations (histograms, scatter plots, etc.)
# 2. Perform correlation analysis between variables
# 3. Create new features from existing data
# 4. Try simple machine learning models (clustering, regression, etc.)
#
# Add new cells below and start coding!

# %%
# Your code here