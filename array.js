let rain = ["food","drink"]
console.log(rain);

let colors=['red','green','purple']

console.log(colors.length);

colors.pop();
console.log(colors);

colors.push('violet');
console.log(colors);

 colors.shift()
 console.log(colors)

colors.unshift()
console.log(colors)

//Concat()
let city = ["Ilorin","Minna","Ibadan"]
let town = ['Offa','Ajasse','Erin']
let all = city.concat(town)
console.log(all)
//Concat() is used to join multiple arrays

//includes()
let fruits = ['Banana','Orange','Apple','Mango']
console.log(fruits.includes('Apple')); 
//includes() is used to determine whether an array includes a certain value among it entries

//indexOf()
let player = ['Ronaldo','Messi','Neymar']
console.log(player.indexOf('Messi'))
//indexOf() is a method that returns the position of the first occurrence of a value in a string.

//join()
let surname = ['sodiq','abubakar','usman']
console.log(surname.join());
//join() is a method that returns an array as string....it joins multiple string to a string

//reverse()
    let number = [1,3,4]
    let reversed = number.reverse();
    console.log('reversed:',reversed);
//reverse() is a method that reverses an array in place and returns the reference to the same way making the first to become the last (vice versa)    

//slice()
let team = ['man u','chelsea','barca','everton','tottenham']
console.log(team.slice(3));
//slice() is a method that returns selected elements in an array,as a new array

//splice()
let animals = ['lion','tiger','ram','sheep']
animals.splice(1,0,'dog')
console.log(animals); //here a 'dog' as been added to the array
animals.splice(4,1, 'cougar');
console.log(animals); //here 1 element is replaced at index 4
//splice() is a method that changes the contents of an array by removing or replacing existing elements and adding new elements

//sort()
let tune = ['time',3,5,'hour']
tune.sort();
console.log(tune);
//sort() sorts the element of an array by overwriting the original array.