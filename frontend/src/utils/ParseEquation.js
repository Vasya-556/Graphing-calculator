export function ParseEquation(equation){
    let count = countVariables(equation);
    equation = equation.toLowerCase();
    let newEquation = '';
    switch (count){
        case 0:
            return ProcessEquation(equation);
        case 1:
            //rewrite it changing variable into x and than return processed equation
            newEquation = replaceVariablesWithX(equation);
            return ProcessEquation(newEquation);
        case 2:
            //check what variable it have if it x and y than nothing
            //if one of them not x or not y than make it
            //if both not x and not y than first variable x second y
            //than return solved for y processed equation
            newEquation = replaceVariablesWithXandY(equation);
            let solvedForYEquation = solveForY(newEquation);
            return ProcessEquation(solvedForYEquation);
        default:
            return '';
    }
}

function countVariables(equation) {
    // Remove numbers from the equation
    let cleanedEquation = equation.replace(/\d+/g, '');

    // Define a regex pattern to extract variables
    let variablePattern = /[a-zA-Z]+/g;

    // Extract variables from the equation
    let variables = cleanedEquation.match(variablePattern);

    // If no variables are found, return 0
    if (variables === null) {
        return 0;
    }

    // Define a set of functions to ignore
    let ignoredFunctions = ['cos', 'sin', 'tan', 'acos', 'asin', 'atan', 'pow'];

    // Filter out variables that are also function names
    let filteredVariables = variables.filter(variable => !ignoredFunctions.includes(variable));

    // Return the count of unique variables
    return new Set(filteredVariables).size;
}

function ProcessEquation(equation) {
    let Functions = ['cos', 'sin', 'tan', 'acos', 'asin', 'atan', 'pow'];
    let processedEquation = equation;

    Functions.forEach(func => {
        let regex = new RegExp('\\b' + func + '\\(', 'g');
        processedEquation = processedEquation.replace(regex, 'Math.' + func + '(');
    });

    return processedEquation;
}

function replaceVariablesWithX(equation) {
    if (!equation) {
        return '';
    }
    let cleanedEquation = equation.replace(/\d+/g, '');

    // Define a regex pattern to extract variables
    let variablePattern = /[a-zA-Z]+/g;

    // Extract variables from the equation
    let variables = cleanedEquation.match(variablePattern);

    if (variables === null) {
        return equation; // No variables found, return original equation
    }

    // Define a set of functions to ignore
    let ignoredFunctions = ['cos', 'sin', 'tan', 'acos', 'asin', 'atan', 'pow'];

    // Filter out variables that are also function names
    let filteredVariables = variables.filter(variable => !ignoredFunctions.includes(variable));

    // Replace each variable with 'x'
    let newEquation = equation;
    filteredVariables.forEach(variable => {
        newEquation = newEquation.replace(new RegExp(variable, 'g'), 'x');
    });

    return newEquation;
}

function replaceVariablesWithXandY(equation) {
    if (!equation) {
        return '';
    }
    let cleanedEquation = equation.replace(/\d+/g, '');

    // Define a regex pattern to extract variables
    let variablePattern = /[a-zA-Z]+/g;

    // Extract variables from the equation
    let variables = cleanedEquation.match(variablePattern);

    if (variables === null) {
        return equation; // No variables found, return original equation
    }

    // Define a set of functions to ignore
    let ignoredFunctions = ['cos', 'sin', 'tan', 'acos', 'asin', 'atan', 'pow'];

    // Filter out variables that are also function names
    let filteredVariables = variables.filter(variable => !ignoredFunctions.includes(variable));

    // Check if 'x' and 'y' variables are present
    let isXvar = false;
    let isYvar = false;

    filteredVariables.forEach(variable => {
        if (variable === 'x') {
            isXvar = true;
        } else if (variable === 'y') {
            isYvar = true;
        }
    });

    // If only 'x' variable is present, replace another variable with 'y'
    if (isXvar) {
        let otherVariable = filteredVariables.find(variable => variable !== 'x');
        return equation.replace(new RegExp(otherVariable, 'g'), 'y');
    }

    // If only 'y' variable is present, replace another variable with 'x'
    if (isYvar) {
        let otherVariable = filteredVariables.find(variable => variable !== 'y');
        return equation.replace(new RegExp(otherVariable, 'g'), 'x');
    }

    // If neither 'x' nor 'y' variables are present, make the first variable 'x' and the second 'y'
    let variablesArray = filteredVariables.slice(0, 2);
    return equation.replace(new RegExp(variablesArray[0], 'g'), 'x').replace(new RegExp(variablesArray[1], 'g'), 'y');

}

const nerdamer = require('nerdamer/all');

function preprocessEquation(equation) {
    // Replace pow(x, number) with x^number
    return equation.replace(/pow\(([^,]+),\s*([^)]+)\)/g, "$1^$2");
}

function postprocessSolution(solution) {
    // Replace ^ with pow
    return solution.replace(/(\w+)\^(\d+)/g, "pow($1, $2)");
}

// Function to solve equation for y
function solveForY(equation) {
    try {
        const processedEquation = preprocessEquation(equation);
        
        // Parse the equation
        const parsedEquation = nerdamer(processedEquation);

        // Solve for y
        const solution = parsedEquation.solveFor('y');

        // Postprocess the solution
        const processedSolution = postprocessSolution(solution.toString());

        return processedSolution;
    } catch (error) {
        return "";
    }
}