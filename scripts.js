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