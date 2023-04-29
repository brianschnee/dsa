// if this isnt an array, what is it?
const example = [];
// under the hood there is a literal array, a memory buffer but we are abstracted from that and are able to use methods that dont belong to traditional arrays.

// its effectively an array list because get, push, pop are effectively constant time and unshift, shift are O(n)

// contiguous piece of memory (static - the amount of bytes has a specified size)
const a = new ArrayBuffer(6);
console.log(a);

// creating a view into the array buffer. each offset (when we index into the array) is in the context of 8 bits
const a8 = new Uint8Array(a);
a8[0] = 45;
console.log(a);

a8[2] = 23;
console.log(a);

// creating an offset by 16 bits which changes the way the memory address at a is interpreted
const a16 = new Uint16Array(a);
a16[2] = 0x4545;
console.log(a);
