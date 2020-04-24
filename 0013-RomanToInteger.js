function RomanToInteger(str) {
    const dictionary = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let sum = 0;

    for(let i=0; i<str.length; i++) {
        if( dictionary[str[i]] >= dictionary[str[i+1]] || str[i+1] === undefined ) {
            sum += dictionary[str[i]];
        };
        if( dictionary[str[i]] < dictionary[str[i+1]] && str[i+1] !== undefined) {
            sum += (dictionary[str[i+1]] - dictionary[str[i]])
            i++;
        };
    };

    return sum;

};

console.log( RomanToInteger("MCM") );