"use strict";

// const hamburger = 5,
//         fries = 0;

//         if (hamburger && fries) {
//                 console.log("Yummy, yummy!");
//         }

// const hamburger = 3,
//         fries = 1,
//         cola = 1;

//         console.log(hamburger === 3 && cola && fries);

//         console.log(1 && 0);
//         console.log(1 && 5);
//         console.log(null && 5);
//         console.log(0 && "snitchie snitch");

//         if (hamburger === 3 && cola === 1 && fries) {
//                 console.log("Покушать принесли.");
//         } else {
//                 console.log("Oh, fuck all of you");
//         }

        const hamburger = 3,
                fries = 3,
                cola = 0,
                meat = 2;


        if (hamburger === 3 && cola === 2 || fries === 3 && meat) {
                console.log("Все смачно откушали.");
        } else {
                console.log("Oh, fuck all of you");
        }
                
                console.log(hamburger === 3 && cola === 2 || fries === 3 && meat);

        let johnReport, alexReport, judaReport, nyggaReport = "done";
        
        console.log(johnReport || alexReport || judaReport || nyggaReport);      
        
        console.log(!0);