// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

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
console.log(nameLengths)

// using the sort method to alphabetically sort the provinces
const sortedProvinces = provinces.sort();
console.log(sortedProvinces)

// using the filter method to remove provinces containing "Cape" and logging the count of remaining provinces 
const filteredProvinces = provinces.filter((province) => !province.includes("Cape"));
console.log(filteredProvinces.length);

// using map and some method to determine if a name contains the letter 'S'
const namesWithS = names.map((name) => name.includes('S'));
console.log(namesWithS)

// using the reduce method to transform the names array into an object mapping names to their respective provinces
const nameToProvince = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
  }, {});
  console.log(nameToProvince);