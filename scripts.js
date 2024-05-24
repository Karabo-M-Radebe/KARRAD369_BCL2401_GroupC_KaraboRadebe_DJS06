// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifiso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)"
names.forEach((names) => {
  console.log(names)
})

provinces.forEach((provinces) => {
  console.log(provinces)
})

names.forEach((name, index) => {
  const province = provinces[index]
  console.log(`${name} (${province})`)
})

//Use `map` to create a new array of province names in all uppercase. Log the new array to the console.
provinces.map((provinces) =>{
  upperProvinces = provinces.toUpperCase()
  console.log(upperProvinces) 
})

//Create a new array using `map` that contains the length of each name.
names.map((names) => {
  console.log(names.length)
})

//Use `sort` to alphabetically sort the provinces. 
orderProvince = provinces.sort()  
console.log(orderProvince)

//Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
noCape = provinces.filter((provinces) => {
  return provinces.indexOf("Cape") === -1
})
console.log(noCape)

//Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
const namesWithS = names.map((names, newNames) => {
  return names.includes('S') 
})

console.log(namesWithS)

//Use `reduce` to transform the names array into an object mapping names to their respective provinces.

const nameToProvince = names.reduce((acc, name, index) => {
  acc[name] = provinces[index]
  return acc
}, {})
console.log(nameToProvince)

//ADVANCED EXERCISES

// Iterate over the products array, logging each product name.
products.map(product => product.product)

// Filter out products with names longer than 5 characters.
products.filter(product => product.product.length )

// Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
products.filter(product => product.price).map(product => ({...product, price: Number(product.price)})).reduce((acc,product) => acc + product.price, 0)

// Use `reduce` to concatenate all product names into a single string.
products.reduce((acc, product) => acc + product.product, '')

// Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
products.reduce((results, product) => {
  const price = parseInt(product.price)
  if (price) {
    results.Highest = Math.max(results.Highest || 0, price)
  }
  if (price) {
    results.Lowest = Math.min(results.Lowest || Infinity, price)
  }
  return results
},
{Highest:undefined, Lowest:undefined}
)

// Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.
Object.entries(products).reduce((acc, [index,{product,price}]) => {
  acc[index] = {name: product, cost:price};
  return acc
}, [])
