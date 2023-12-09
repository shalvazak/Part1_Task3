// =================================================================
// დავალება 1
// =================================================================

// function myFunc (a,b, ...c) {
//     const arr = []
//     let sum = 0 
//     arr[0] = a + b;
//     c.forEach (e => sum += e )
//     arr[1] = sum
//     console.log(arr);
// }

// myFunc (3, 4, 5, 6, 7, 8);
// myFunc (5, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9);

// =================================================================
// დავალება 2
// =================================================================

// const user = {
//     banks : [
//         {
//             address: {city: "Telavi", street: "Davitashvili"}
//         },
//         {
//             address: {city: "Kutaisi", street: "Tavisufleba"} 
//         },
//         {
//             address: {city: "Tbilisi", street: "Rustaveli"}
//         }
//     ]
// }

// const getCity = ({banks : [, , {address : {city} = {}} = {}]}) => city
// console.log(getCity(user));

// =================================================================
// დავალება 3
// =================================================================

// const test_obj = {
//     banks : [
//         {
//             address: {city: "Telavi", street: "Davitashvili"}
//         },
//         {
//             address: {city: "Kutaisi", street: "Tavisufleba"} 
//         },
//         {
//             address: {city: "Tbilisi", street: "Rustaveli"}
//         }
//     ]
// }

// function objClone (obj) {
//     let new_obj = {}

//     new_obj = {
//         banks : [
//             {address : {...test_obj.banks[0].address}},
//             {address : {...test_obj.banks[1].address}},
//             {address : {...test_obj.banks[2].address}},
//         ]
//     }

//     new_obj.banks[0].address.city = 'eroor'
//     return (new_obj);
// }

// console.log(objClone (test_obj));
