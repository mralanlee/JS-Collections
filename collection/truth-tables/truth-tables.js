/**
 * This is a terrible use case, but I was trying to create truth tables for a real life scenario
 * Essentially, truth tables are meant to help create a simpler way to read large if/else statements for criteria that is not mutually exclusive, or when you're trying to assemble a much larger option,
 * but you want to simplify or do have portions/properties evaluated specifically to fit a certain criteria.
 * 
 * I like truth tables because you can have them return an object property or an array, or even execute a function if the criteria fits. However, unlike if/else it will continue iterating over
 * each property, and you have to be careful that you are able to have the criteria evaluated non-exclusively. Since these are object properties, the LAST truthy method will outweigh all.
 * (i.e. if the 2nd criteria is equal to true, and the 5th value is also true then the return will be #5)
 * Please submit a PR if you have a better scenario
 */

 const group = [
  {
    name: 'Jasmine',
    age: 18,
    guestlist: true,
  },
  {
    name: 'Alan',
    age: 21,
    guestlist: false,
  },
  {
    name: 'Jerry',
    age: 16,
    guestlist: true,
  },
  {
    name: 'Jeff',
    age: 40,
    guestlist: false
  }
];
const wait = ({ guestlist }) => ({
  [true]: () => ({ wait: true }), // This is the default return, usually null but this one only has two scenarios
  [guestlist]: () => ({ wait: false }), // These have to be function calls
}).true(); // call the method that is true. 

const canDrink = ({ name, age }) => ({
  [true]: () => null,
  [age >=  21]: () => ({ name, drink: true, party: true }),
  [age < 21 && age >= 18]: () =>  ({ name, drink: false, party: true }),
  [age < 18]: () => ({ name, drink: false, party: false})
}).true();

const nextQueue = group.map(person => ({
  ...canDrink(person),
  ...wait(person),
}));

console.log(nextQueue)