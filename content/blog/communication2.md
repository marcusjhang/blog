---
external: false
title: "Communication in Engineering Pt.2"
description: "Communication in Engineering"
date: 2024-11-01
---
# Part 2: Communication in Software Engineering (Documentation)

## 1. Code Documentation

### Key Elements of Good Code Documentation

- **Function/Method Descriptions**: Explain purpose and parameters.
- **Code Comments**: Clarify complex logic.
- **Examples**: Demonstrate usage.

### Example of Documented Code in Python

```python
def calculate_area(radius):
    """
    Calculates the area of a circle.

    Parameters:
    - radius (float): Circle's radius.

    Returns:
    - float: Calculated area.

    Example:
    >>> calculate_area(5)
    78.54
    """
    import math
    if radius < 0:
        raise ValueError("Radius cannot be negative")
    return math.pi * radius ** 2
```

**Pro-tip**: Use interactive environments like repl.it or collab to give invaluable hands-on. [**Try the code above in Google Collab**](https://colab.research.google.com/drive/1wgW30gis0jeYrtW5X6h3XnIGE1J68cS8?usp=sharing)!

## 2. User Documentation

{% youtube url="https://www.youtube.com/embed/bYxbwsGG3Zo?si=P68kZ7BpWmrz1dt-" label="What is User Documentation" /%}

### Key Components of User Documentation

1. **Getting Started Guide**: Step-by-step instructions for new users to get started.
2. **Feature Descriptions**: Detailed explanations of main features and their uses.
3. **FAQs and Troubleshooting**: Common issues and solutions.
4. **Contact Information**: How to reach support if needed.

### Example Outline

```markdown
# User Documentation

## 1. Getting Started
Instructions on setting up and using the software.

## 2. Features Overview
Descriptions of primary features and how to use them.

## 3. FAQs and Troubleshooting
- **Issue**: Common user issues.
- **Solution**: Step-by-step solutions.

## 4. Support Contact
Information on reaching customer support.
```

**Previous**: [Introduction](../communication1) | **Next**: [My Reflections](../communication3)