function foo(a, b) {
  // Check if both operands are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    // Handle non-number inputs appropriately, e.g., throw error, use different logic
    console.error("Invalid input types for addition.");
    return NaN; // Or other suitable default
  }
}
console.log(foo(1,2));//3
console.log(foo(1,"2"));//Error
console.log(foo(true,false));//Error
console.log(foo(null,undefined));//Error
console.log(foo([1,2],[3,4]));//Error