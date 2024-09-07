console.log("Logger message")
console.sarcasm("My custom function's message")
const isDeprecated = true;

if (isDeprecated) {
    console.warn("This feature is deprecated. Please use the new API.");
}

console.setDebug(true)
try{
    throw new Error("An test error.\n")
}
catch(err){
    console.debug(err,"Error has occurred.\n")
}

