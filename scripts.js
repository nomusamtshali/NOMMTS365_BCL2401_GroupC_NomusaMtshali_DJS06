// EXERCISES

// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// using the forEach method to log each name to the console
names.forEach((names) => {
  console.log(names);
});

// using the forEach method to log each province to the console
provinces.forEach((provinces) => {
  console.log(provinces);
});

// using the forEach method to log each name with a matching province in the format "Name (Province)".
names.forEach((name, index) => {
  const province = provinces[index];
  console.log(`${name} (${province})`);
});

// using the map method to create a new array of province names in all uppercase.
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

// using the map method to create a new array that contains the length of each name
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// using the sort method to alphabetically sort the provinces
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// using the filter method to remove provinces containing "Cape" and logging the count of remaining provinces
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filteredProvinces);

// using map and some method to determine if a name contains the letter 'S'
const namesWithS = names.map((name) => name.includes("S"));
console.log(namesWithS);

// using the reduce method to transform the names array into an object mapping names to their respective provinces
const nameToProvince = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameToProvince);

// ADVANCED EXCERCISE

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log(
  // iterating over the products array
  products.map((product) => product.product),

  // filtering out products with names longer than 5 characters
  products.filter((product) => product.product.length <= 5),

  /* filtering out products without prices
converting string prices to numbers 
calculating the total price of all products using reduce */
  products
    .filter((product) => product.price)
    .map((product) => ({ ...product, price: Number(product.price) }))
    .reduce((acc, product) => acc + product.price, 0),

  // concatenating all product names into a single string using reduce
  products.reduce((acc, product) => acc + product.product, ""),

  // identifying the highest and lowest-prices items
  products.reduce(
    (results, product) => {
      const price = parseInt(product.price);
      if (price) {
        results.Highest = Math.max(results.Highest || 0, price);
      }
      if (price) {
        results.Lowest = Math.min(results.Lowest || Infinity, price);
      }
      return results;
    },
    { Highest: undefined, Lowest: undefined }
  ),

  // recreating the products object with keys 'name' and 'cost' while maintaining their orignal values
  Object.entries(products).reduce((acc, [index, { product, price }]) => {
    acc[index] = { name: product, cost: price };
    return acc;
  }, [])
);
