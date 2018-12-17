//Exercise 1 Minimum *****************

function min( a, b ) {
	if ( a > b ) {
		return b;
	} else {
		return a;
	}
};

//Exercise 2 Recursion *****************

function isEven( N ) {
	if ( N === 0 ) {
		return true;
	} else if ( N === 1 ) {
		return false;
	} else if ( N < 0 ) {
		return isEven( N + 2 )
	} else {
		return isEven( N - 2 )
	}
}

//Exercise 3 Bean Counting *****************

// countBs
function countBs( string ) {
	let result = 0
	for ( let i = 0; i < string.length; i++ ) {
		if ( string[ i ] === "B" ) {
			result++;
		}
	}
	return result;
}

// countChar
function countChar( string, char ) {
	let result = 0
	for ( let i = 0; i < string.length; i++ ) {
		if ( string[ i ] === char ) {
			result++;
		}
	}
	return result;
}

// countBs v2.
function countBs( string ) {
	return countChar( string, "B" );
}
