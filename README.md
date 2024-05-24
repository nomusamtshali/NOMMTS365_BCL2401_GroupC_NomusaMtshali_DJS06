# DJS06 Project Brief: Higher Order Functions

# Project Brief
- This project was designed to challenge and deepen my understanding of JavaScript's powerful array methods. I had to manipulate data using `forEach`, `map`, `filter`, `reduce`, and more, to perform a variety of tasks. This exercise tested my ability to apply these methods in combination to solve complex problems and achieve desired outcomes.

- The essence of using these higher-order functions was to encourage a declarative approach to programming: I defined what I want to achieve (e.g., filter a list, transform data) without having to specify how to perform the operations step-by-step (as I would with imperative loops like for or while). This led to more readable, concise, and more maintainable code. Additionally, these functions helped avoid side effects and create pure functions, both key aspects of functional programming.

# Project Overview
### Data Sets
I had to work with two primary datasets:

1. A list of provinces:
```javascript
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
```
2. A list of names:
```javascript
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
```
3. A list of products with prices:
```javascript
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
```
#### Exercises

1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console.
3. **Name Lengths**: Create a new array using `map` that contains the length of each name.
4. **Sorting**: Use `sort` to alphabetically sort the provinces. 
5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.

#### Advanced Exercises (Single `console.log` Execution)

For these exercises, wrap your logic in a single `console.log` statement:

1. **Log Products**: Iterate over the products array, logging each product name.
2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.
5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.

# Elements Included
- A scripts.js file including my solutions 
- A GitHub repository

# Reflections 
## Area of Mastery 
- Grasping the fundamental JavaScript array methods: I effectively used forEach, map, sort, filter, and reduce to manipulate the provided arrays under the first set of excercises.

## Challenges Faced
- Handling potentially invalid/unavailable data: The products array contained missing prices and I was puzzeled by this. It took some time to work around the 'products' array.
- Iterating over an array that has missing values

## Areas of improvement
- Conciseness in some areas: In the advanced exercise, the logic for finding highest and lowest priced items can actually be solved in a simpler way but I hope I'll be able to get it next time.
- Using the filter, map and reduce methods in one code block.


# Overall Learning Experience
- The project was clear and straight-forward. I've done array methods before but this project/challenge demonstrated a strong foundation in core JavaScript array methods and object manipulation. The advanced excercise was quite difficult as I had to use a single 'console.log' execution. As I mentioned the areas for improvement above and considering potential challenges, I can further enhance my JavaScript skills and ability to handle more complex data and scenarios. 

