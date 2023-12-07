function myFunc (a,b, ...c) {
    const arr = []
    let count = 0 
    arr[0] = a + b;
    c.map (e => count += e )
    arr[1] = count
    console.log(arr);
}

myFunc (3, 4, 5, 6, 7, 8);
myFunc (5, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9);