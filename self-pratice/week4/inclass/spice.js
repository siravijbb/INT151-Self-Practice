const nums = [2, 4, 6]
// nums[nums.length] = 8
console.log(nums.push(8)) //append in the end of array, return new length
console.log(nums)
nums.unshift(10) //add in the beginning of array
console.log(nums)
nums.pop() //remove in the end of array
console.log(nums)
nums.shift() //remove in the beginning of array
console.log(nums)



const words = ["apple", "orange", "banana"]
//add 'cherry', 'berry' after 'orange'
words.splice(2, 0, "cherry", "berry")
console.log(words) //[ 'apple', 'orange', 'cherry', 'berry', 'banana' ]
//delete 'cherry'
words.splice(2, 1)
console.log(words) //[ 'apple', 'orange', 'berry', 'banana' ]
//replace 'berry' with 'mango'
words.splice(2, 1, "mango")
console.log(words) //[ 'apple', 'orange', 'mango', 'banana' ]
