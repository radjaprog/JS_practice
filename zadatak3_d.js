//Write the sumArgs function that will accept any number of arguments ( which are numbers ) 
//and return the sum of them, using rest parameter.
function sumArgs(...numbers1) {
    console.log(numbers1);
    return numbers1.reduce((sum, number) => sum + number);
}

