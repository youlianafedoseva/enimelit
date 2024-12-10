// Assuming these are the functions used in the code
const fraction = x => x / 100; // Example fraction function
const scale = x => x * 2;      // Example scale function

// Gradient object with a stop method
const gradient = {
    stops: [],
    stop: function(fractionValue, scaleValue) {
        this.stops.push({ fraction: fractionValue, scale: scaleValue });
    }
};

// Sample stops array
const stops = [10, 20, 30, 40, 50];

// Applying the original code logic
stops.forEach(_ => gradient.stop(fraction(_), scale(_)));

console.log(gradient.stops);
// Output: 
// [
//   { fraction: 0.1, scale: 20 },
//   { fraction: 0.2, scale: 40 },
//   { fraction: 0.3, scale: 60 },
//   { fraction: 0.4, scale: 80 },
//   { fraction: 0.5, scale: 100 }
// ]
