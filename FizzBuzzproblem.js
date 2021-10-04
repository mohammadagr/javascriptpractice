function fizzBuzzproblem(number) {
    if(typeof (number)!=="number") return NaN;
    if (number % 15 === 0) return "FizzBuzz";
    else if (number % 5 === 0) return "Buzz";
    else if (number % 3 === 0) return "Fizz";
    else return number;
        }

console.log(fizzBuzzproblem("ali"))
