# Persistent Bugger

## Requisites

- Write a function that takes in a positive parameter
- The function has to return its multiplicative resistance
- i.e. the number times a number can be multiplied until you reach a single digit
- Important to note that the function simply has to return a number - nothing else

## How should we do it?

- Check to see if number has more than one integer
- Declare variable that keeps count of persistence
- Have to separate the number
- We can use .split() but must convert to string using toString().
- Multiply with each other using .reduce
- Check if result has more than one integer
- If yes, continue the chain
- If no, stop the chain and return persistence
