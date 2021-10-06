export const rectArea = (a, b) => {
    if(a === undefined || b === undefined){
        throw new Error("No args found");
    }
        
    if(typeof a === "Number" && b === unedfined){
        return a ** 2;
    }

    if(typeof a !== "Number" || typeof b !== "Number"){
        throw new Error ("Args must be numbers");
    } 

    if(a < 0 || b < 0) {
        throw new Error("Args can't be negative");
    }

    return a * b;
};