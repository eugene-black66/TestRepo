// const firstPerson = {
//     Name: 'Eugene',
//     Age: 20,
//     Sex: true
// }


// function personCreator (person, n, a, s) {
//     // const newPerson = JSON.parse(JSON.stringify(firstPerson))
//     const newPerson = Object.assign (person)
//     person.Name = n
//     person.age = a
//     person.sex = s
//     return newPerson;
// }

// let newPerson = personCreator(firstPerson, 'padal', 8, false)

// function showNewPerson () {
//     console.log (newPerson)
//     return newPerson
// }

// setInterval (showNewPerson,2000)


// function myFn () {
//     function innerFn() {
//         let a = false
//         console.log(a)

//     }
//         innerFn()
//         myFn()
// }

// myFn()


// let a = 'My name is'
// let b = 'Eugene'
// let c = 'And I live'
// let d = 'in'
// let e = 'Vitebsk'

// const greeting = `${a} ${b} ${c} ${d} ${e}`

// setTimeout (function() {
//     console.log ('Отложенное сообщение')
// }, 2000)

// setTimeout(() => {
    
// }, timeout);


// function multByFactor (value, multiplier = 1) {
//     return value * multiplier
// }

// const multByFactor = (value, multiplier = 1) => {
//     return value * multiplier
// }


// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt
// })

// const firstPost = {
//     id: 1,
//     author: 'Eugene'
// }

// newPost(firstPost)

// const firstArray = [1, 2, 3, 4, 5]
// console.log(firstArray)
// const newArray = firstArray.map ((x) => {return x * 3})
// console.log(newArray)


// const userProfile = {
//     name: 'Eugene',
//     age: 20,
//     hasSignedAgreement: false,
//     commentsQty: null
// }

// // const { name, age, hasSignedAgreement } = userProfile

// const userInfo = ({name, commentsQty} = userProfile) => {
//     if (!commentsQty) {return `User ${name} has no comments`};
//     return (`User ${name} has ${commentsQty} comments`)
    
// }
//  userInfo(userProfile)


// function checkAge (age) {

// if (age > 18) {
//     console.log('is adult')
// }
// else if (age >= 13) {
//     console.log ('is teenager')
// }
// else {
//     console.log('is child')
// }
    
// }

// let a = 13
// let b = 17
// const sumPositiveNumbers = (a, b) => {
//     if (typeof a !== 'number' ?? b !== 'number') {
//             return 'You have to use numbers to make this function work'
//         }
//     if (a <= 0 || b <= 0) {
//         return 'You have to use positive numbers'
//         }

//     return a+b

// }



// let monthCheck = (month) => {
// switch (month) {
//     case 1: 
//     console.log('Январь')
//     break;

//     case 2: 
//     console.log('Февраль')
//     break;

//     case 3: 
//     console.log('Март')
//     break;

//     case 4: 
//     console.log('Апрель')
//     break

//     case 5:
//     console.log('Май')
//     break

//     case 6:
//     console.log('Июнь')
//     break

//     case 7:
//     console.log('Июль') 
//     break

//     case 8: 
//     console.log('Август')
//     break

//     case 9: 
//     console.log('Сентябрь')
//     break

//     case 10:
//     console.log('Октябрь')
//     break

//     case 11: 
//     console.log('Ноябрь')
//     break

//     case 12: 
//     console.log('Декабрь')
//     break

//     default: 
//     console.log('Это не месяц')
//     break
// }

// }


// const array1 = ['first', 'second','third','fourth']

// array1.forEach((element,index) => {
//     console.log(element,index)
// })      

// let i = 0
// do {    
//     i++
//     console.log('Привет')
// } while (i<9)

// const myObj = {
//     x: 10,
//     y: 15,
//     z: 13
// }

// for (key in myObj) {
//     console.log(key, myObj[key])
// }   


class Comment {
    constructor (text) {
        this.text = text
        this.likesQty = 0
        this.dislikesQty = 0
    }
    like () {
        this.likesQty +=1
    }
    dislike () {
        this.dislikesQty +=1
    }
}   

const commentary1 = new Comment ('First comment')


let commentary2 = new Comment ('Second comment')

