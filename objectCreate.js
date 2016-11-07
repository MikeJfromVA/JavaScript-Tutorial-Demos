/*
MPJE from FunFunFunction inspired me to write this.
https://www.youtube.com/watch?v=CDFN1VatiJA&feature=em-u
If you don't watch his videos, you should!
*/

const cat = {
  makeSound: function() {
    console.log(this.sound)
    /*
	'this' does weird things to a function.

	SIMPLE FUNCTION CALL :

	In non-strict mode, it means the global object. (not wanted methinks)
	IE `window` in a browser or `global` in Node

	In non-strict mode, it will be undefined.
	function call.

	METHOD OF AN OBJECT :

	`this` just refers to the containing object.
    */
  }
}

// But this structure doesn't become an object by magic! You need to...

const whiskers = Object.create(cat)
whiskers.sound = 'MEOW'
whiskers.makeSound()

// Object.create creates a NEW object with the prototype set to specified object

const mrFuzzyPants = Object.create(cat)
mrFuzzyPants.sound = 'mew'
mrFuzzyPants.makeSound()

// Is whiskers a cat?
console.log('Is whiskers a cat?',cat.isPrototypeOf(whiskers))

/*
  Object.create is a better fit for JavaScript than new()
  Use Object.create() insead of new().
  Douglas Crockford (JavaScript: The Good Parts) pushed Object.create().
 */

// This also is deprecated syntax :
const leo = {}
Object.setPrototypeOf(leo,cat)
leo.sound = 'NO NO NO NO NO'
leo.makeSound()


