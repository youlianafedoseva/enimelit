// Create a test URLSearchParams object
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// Display the keys
for (const key of searchParams.keys()) {
  console.log(key);
}
