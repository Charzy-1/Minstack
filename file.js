function balancedBrackets(str) {
    // Initialize an empty stack to keep track of opening brackets
    const stack = [];
    
    // Define mappings for opening and closing brackets
    const openBrackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    const closeBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate over each character in the input string
    for (let char of str) {
        // If the character is an opening bracket, push it onto the stack
        if (openBrackets[char]) {
            stack.push(char);
        } 
        // If the character is a closing bracket
        else if (closeBrackets[char]) {
            // Check if the stack is empty or the top element of the stack does not match
            // the corresponding opening bracket, return false (unbalanced)
            if (stack.length === 0 || stack.pop() !== closeBrackets[char]) {
                return false;
            }
        }
    }

    // After processing all characters, check if the stack is empty
    // If it's empty, all brackets were matched correctly, so return true
    // Otherwise, return false (unbalanced)
    return stack.length === 0;
}

// Test cases
console.log(balancedBrackets('(hello)[world]')); // => true
console.log(balancedBrackets('([)]')); // => false
console.log(balancedBrackets('[({}{}{})([])]')); // => true