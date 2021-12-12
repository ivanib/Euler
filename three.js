function isPrime(n) {
    if (n < 2) {
	return false;
    }

    if (n === 2 || n === 3) {
	return true;
    }

    if (n % 2 === 0) {
	return false;
    }

    const sqrt = Math.sqrt(n);
    let dx = 4;

    for (let i = 5; i <= sqrt; i += dx) {
	if (n % i === 0) {
	    return false;
	}

	dx = -(dx - 6);
    }
    
    return true;
};

// Return an array of prime numbers up to n
function makePrimeArray(n) {
    let a = [];

    for (let i = parseInt(n, 10); i > 0; i--) {
	if (isPrime(i)) {
	    a.push(i);
	}
    }

    return a;
};

function testFactors(n) {
    const array = makePrimeArray(Math.sqrt(n));

    for (let i = 0; i < array.length; i++) {
	const el = array[i];

	if (n % el === 0) {
	    console.log(el);
	}
    }
};

testFactors(600851475143);
