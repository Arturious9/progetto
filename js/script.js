"use strict";

let result = "";
const size = 11;

for (let i = 1; i < size; i++) {
        result += "\n";
        for (let j = 0; j < i; j++) {
                result += "*";
        }
        
}console.log(result);