test(`should ensure a variable is unique reference`, () => {
  // The sky's blue and the ocean's blue are both, well, blue.
  // But the shade of blue changes over time based on light and
  // atmosphere.
  //
  // Let's assume that both the sky's blue and ocean's blue are
  // strings and both have the value of the string 'blue'. In this
  // scenario, how could we know if we'd been passed a reference of
  // sky's blue vs a reference of ocean's blue.

  // If we want to compare these identities and not their values
  // then we need symbol.

  // Rewrite the following variables to be symbols
  // Hint: remember DO NOT use the 'new' keyword
  // const SKY_COLOR_BLUE = 'BLUE';
  // const OCEAN_COLOR_BLUE = 'BLUE';

  expect(SKY_COLOR_BLUE).not.toBe(OCEAN_COLOR_BLUE)
  expect(typeof SKY_COLOR_BLUE).toBe('symbol')
  expect(typeof SKY_COLOR_BLUE).toBe('symbol')
})

test(`should help determine if a singleton has already been declared`, () => {
  // Singleton functions should return the same instance each time
  // they are called.

  // Create a symbol called toRuleThemAll with the ion of:
  // One ring, to rule them all.

  // Create 2 variables: myRing and myPrecious
  // Both should be have their values set to OneRing()

  function OneRing() {

    // Check if we already have an instance of OneRing
    // If so, return it
    if (OneRing[toRuleThemAll]) return OneRing[toRuleThemAll]

    // If not, set up a new instance.
    let destroy = function() {
      return 'Ring destroyed!'
    }

    // Return the new instance and assign it to a symbol
    return OneRing[toRuleThemAll] = {
      destroy,
    }
  }

  // Rings should be defined
  expect(myRing).toBeDefined()
  expect(myPrecious).toBeDefined()

  // We should have a symbol to hold a reference to the singleton
  expect(typeof toRuleThemAll).toBe('symbol')

  // Both variables should reference the same instance
  expect(myRing).toBe(myPrecious)

  // Both should be properly created instances
  expect(myRing.destroy()).toBe('Ring destroyed!')
  expect(myPrecious.destroy()).toBe('Ring destroyed!')
})

//////// Elaboration /////////
// Please write, in your own words
// a few of the core concepts from
// the feature(s) in this exercise
//
// 1.
// 2.
// 3.
////////////////////////////////
//
/////////// Feedback ///////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Symbols&em=fr0609@gmail.com
*/
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
