// defaults for scale ranges
const defaults = {
    small: { min: 0, max: 500 },
    medium: { min: 501, max: 1000 },
    large: { min: 1001, max: 1500 }
};

function getScaleRange(scale) {
    return defaults[scale] || { min: 0, max: 0 }; // Default to { min: 0, max: 0 } if scale is not found
}

// Example usage:
const scale = 'medium';
const range = getScaleRange(scale);
console.log(`Range for ${scale}:`, range); // Outputs: Range for medium: { min: 501, max: 1000 }
