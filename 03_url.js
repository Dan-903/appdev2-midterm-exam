const url = require('url');

const thisUrl = "https://www.example.com:8080/products?category=electronics&sort=price"

const parsedUrl = url.parse(thisUrl, true)

console.log("Protocol:", parsedUrl.protocol)
console.log("Hostname:", parsedUrl.hostname)
console.log("Port:", parsedUrl.port)
console.log("Pathname:", parsedUrl.pathname)
console.log("Query Parameter 'Category':", JSON.stringify(parsedUrl.query.category))
console.log("Query Parameter 'Sort':", JSON.stringify(parsedUrl.query.sort))

