//Exercise 1 Looping Triangle *****************

let i = "#";
while ( i.length < 8 ) {
	console.log( i );
	i += "#";
}

// Using FOR
for ( i = "#"; i.length < 8; i += "#" ) {
	console.log( i );
}

//Exercise 2 FizzBuzz *****************

for ( i = 1; i < 101; i += 1 ) {
	if ( i % 5 === 0 && i % 3 === 0 ) {
		console.log( "FizzBuzz" );
	} else if ( i % 5 === 0 ) {
		console.log( "Buzz" );
	} else if ( i % 3 === 0 ) {
		console.log( "Fizz" );
	} else {
		console.log( i );
	}
}

//Exercise 3 Chessboard *****************

let grid = ""

let width;
do {
	width = Number( prompt( "Provide a number for the width.\ne.g. 2" ) )
} while ( !width );

let height;
do {
	height = Number( prompt( "Provide a number for the height.\ne.g. 2" ) )
} while ( !height );

for ( y = 0; y < height; y += 1 ) {
	for ( x = 0; x < width; x += 1 ) {
		if ( ( y + x ) % 2 === 0 ) {
			grid += " ";
		} else {
			grid += "#";
		}
	}
	grid += "\n";
}
console.log( grid );
