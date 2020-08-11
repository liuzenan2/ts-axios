// enum Color {
//   Red = 1,
//   Green,
//   Blue
// }

// let colorName: string = Color[2]

// console.log(colorName)

// let notSure: any = 4
// notSure = 'string'
// notSure = false
// let list: any[] = [1, '2']
// list[2] = 200
// function warnUser(): void {
//   console.log('刘泽男')
// }

// let u: undefined | null = undefined
// u = null
// function error(messages: string):never {
//  throw new Error(messages)
// }

// function fail() {
//   return error('some file')
// }

// let someValue: any = 'this is a string'
// let strLength: number =( someValue as string).length

// var a = 10

// function f() {
//   var a = 10
//   return function g() {
//     var b = a + 1
//     return b
//   }
// }
// var g = f()
// g()

// function f1(shouldInitialize) {
//   if (shouldInitialize) {
//     var x = 10
//   }
//   return x
// }

// f1(true)
// f1(false)


// function sumMatrix(matrix) {
//   var sum = 0
//   for (let index = 0; index < matrix.length; index++) {
//     const element = array[index];
    
//   }
// }



// for (var i = 0; i < 10; i++){
//   (function (i) {
//      setTimeout(() => {
//     console.log(i)
//     },i*100)
//   })(i)
// }

// let input: [number, number] = [1, 2]

// function f2([first,larst]:[number, number]) {
//   console.log(first)
//   console.log(larst)
// }

// f2(input)

// let o = {
//   j: 'foo',
//   b: 2,
//   c: 'c'
// }

// let { j, b }: { j: string, b: number } = o 

// function keepWholeObject(whil:{ a: string, b?: number}) {
//   let {a,b = 1001} = whil
// }

// interface Square {
//   color: string,
//   area: number
// }

// interface SquareConfig {
//   color?: string
//   width?: number
// }

// function createSquare(config:SquareConfig):Square {
//   let newSquare = { color: 'white', area: 100 }
//   if (config.color) {
//     newSquare.color = config.color
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }

// let mySquare = createSquare({color: 'black'})


// interface Point {
//   readonly x: number
//   readonly y: number
// }

// let p1: Point = { x: 10, y: 20 }

// let g: number[] = [1, 2, 3, 4, 5]
// let ro: ReadonlyArray<number> = g

// interface SearchFunc {
//   (source:string, subString: string): boolean
// }

// let mySearch: SearchFunc
// mySearch = function (source: string, subString: string) {
//   let result = source.search(subString)
//   return result > -1
// }

// interface StringArray {
//   [index: number]: string
// }

// let myArray: StringArray
// myArray['Fred']
// let myStr:string = myArray[0]

// interface ReadonlyStringArray {
//   readonly [index:number]: string
// }

// let may: ReadonlyStringArray = ['Alice', 'Bob']
// may[1] = 12

// interface ClokInterface {
//   tick()
// }

// interface ClockContructor {
//   new(hour: number, minute: number):ClokInterface
// }

// function createClock(ctor: ClockContructor, hour: number, minute: number):ClokInterface {
//   return new ctor(hour, minute)
// }

// class DigitalClock implements ClokInterface {
//   constructor(h: number, m: number) {
    
//   }
//   tick() {
//     console.log('keep')
//   }
// }

// class AnalogClock implements ClokInterface {
//   constructor(h: number, m: number) {

//   }
//   tick() {
//     console.log('tick')
//   }
// }

// let digital = createClock(DigitalClock, 12, 7)
// let analog = createClock(AnalogClock, 12, 7)

// interface Shape {
//   color:string
// }

// interface PenStroke {
//   penWidth: number
// }

// interface Square extends Shape,PenStroke {
//   sideLength: number
// }
// let squre = {} as Square
// squre.color = 'blue'
// squre.sideLength = 2
// squre.penWidth = 200

// interface Counter {
//   (start: number): string
//   interval: number
//   reset(): void
// }

// function getCounter(): Counter{
//   let counter = (function (start: number) {
    
//   }) as Counter
//   counter.interval = 123
//   counter.reset = function () {

//   }
//   return counter
// }
// let c = getCounter()
// c(10)

// class Control {
//   private state: any
// }
// interface SelectableControl extends Control {
//   select()
// }
// class Button extends Control implements SelectableControl {
//   select() {

//   }
// }

// class TextBox extends Control {
//   select() {
    
//   }
// }

// class Greeter {
//   greeting: string
//   constructor(message: string) {
//     this.greeting = message
//   }
//   greet() {
//     return 'hello' + this.greeting
//   }
// }

// let greeter = new Greeter('world')
// greeter.greet()

// class Animal {
//   move(distance: number = 0) {
//     console.log('animal',distance)
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log('Dog')
//   }
// }

// const dog = new Dog()
// dog.bark()
// dog.move(10)

// class Animal2 {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   move(distance: number = 0) {
//     console.log('animal',distance,this.name)
//   }
// }

// class Snake extends Animal2 {
//   constructor(name: string) {
//     super(name)

//   }
//   move(distance: number = 5) {
//     console.log(this.name)
//     super.move(distance)
//   }
// }


// class Horse extends Animal2 {
//   constructor(name: string) {
//     super(name)
//   }
//   move(distance: number = 45) {
//     console.log(`马`)
//     super.move(distance)
//   }
// }

// let sam = new Snake('Sammy')
// let tom:Animal2 = new Horse('toomy')

// sam.move()
// tom.move()

// class Animal {
//   private name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   move(distance: number = 100) {
//     console.log(`Animal`,this.name,`moved${distance}`)
//   }
// }

// class Rhino extends Animal {
//   constructor() {
//     super('Rhino')
//   }
// }

// class Employee {
//   private name: string
//   constructor(name:string) {
//     this.name = name
//   }
// }

// let anmal = new Animal("GOOT")
// let rhino = new Rhino()
// let employye = new Employee('bod')

// let passcode = 'passcode'

// class Employee {
//   private _fullName:string
//   get fullName(): string {
//     return this._fullName
//   }
//   set fullName(newName:string) {
//     if (passcode && passcode === ' passcode') {
//       this._fullName = newName
//     } else {
//       console.log('Error')
//     }
//   }
// }

// let employee = new Employee()
// employee.fullName = 'Bob'
// if (employee.fullName) {
//   console.log(employee.fullName)
// }

// class Grid {
//   static origin = { x: 0, y: 0 }
  
//   scale: number
//   constructor(scale: number) {
//     this.scale = scale
//   }
//   Tocalculate(point: { x: number, y:number}) {
//     let xDist = point.x - Grid.origin.x
//     let yDist = point.y - Grid.origin.y
//     return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
//   }
// }


// let grid1 = new Grid(1.0)
// let grid2 = new Grid(5.0)
// console.log(grid1.Tocalculate({ x: 3, y: 4 }))
// console.log(grid2.Tocalculate({ x: 3, y: 4 }))

// function add(x: number, y: number): number {
//   return x +y
// }

// let a = add(1, 2)

// let myAdd = function (x: number, y: number): number {
//   return x +y
// }
// function add(x: number, ...rest: number[]): number {
//   console.log(rest)
//   return x
// }

// add(1,2,2,32,1,23,23,231,)

// function identity<T>(arg:T):T {
//   return arg
// }

// function login<T>(arg:T[]):T[] {
//   console.log(arg.length)
//   return arg
// }
// login([1])

// class GenericNumber<T> {
//   zeroValue: T
//   add:(x:T,y:T) => T
// }
// let myGenericNumber = new GenericNumber<number>()
// myGenericNumber.zeroValue = 10
// myGenericNumber.add = function (x,y) {
//     return x + y
// }

// let stringNumeric = new GenericNumber<string>()
// stringNumeric.zeroValue = ''
// stringNumeric.add = function (x, y) {
//   return x + y
// }

// console.log(stringNumeric.add('刘', '则'))
// interface BeeKeeper {
//   hasMask: boolean
// }

// class Animal {
//   numengs: number
// }


// class Bee extends Animal {
//   keeper: BeeKeeper
// }

// function createInstance<T extends Animal>(c: new () => T): T{
//   return new c()
// }

// createInstance(Bee).keeper.hasMask

// function padLeft(value: string, padding: any) {
//   if (typeof padding === 'number') {
//     return Array(padding+1).join(' ') + value
//   }
//   if (typeof padding === 'string') {
//     return padding + value
//   }
//   throw new Error('Error string or number got')
// }

