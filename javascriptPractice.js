// const, var, let

// var name="prasanna"
// let name2="laxmi"



// function sample(){
//   let name="prasanna"
// }

// name="pras"
// console.log(name)
// console.log(name2)


// let name3="prasanna"
// let phone= 123
// let female= true
// let address=""
// let degree=""
// let collegename=""

// console.log(name3)


// let details = {
// name3: "prasanna",
// phone: 123,
// female: true,
// address:"hyd",
// degree:"btech"
// collegename:"geethanjali"
// }

// console.log(details)


// Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below and press Enter to allow pasting.
// let details={name:'prasanna',phone:123,address:'hyd',college:'geethanjali',gender:'female'}
// console.log(details)
// VM316:2 {name: 'prasanna', phone: 123, address: 'hyd', college: 'geethanjali', gender: 'female'}address: "hyd"college: "geethanjali"gender: "female"name: "prasanna"phone: 123[[Prototype]]: Object
// undefined
// let name="prasanna"
// undefined
// console.log(name)
// VM407:1 prasanna
// undefined
// console.log(details.name)
// VM477:1 prasanna
// undefined
// console.log(details["name"])
// VM487:1 prasanna
// undefined
// for key in details{
//   console.log(key,"key====")
// }
// VM601:1 Uncaught SyntaxError: Unexpected identifier 'key'
// for [key,value] in details{
//   console.log(key,"key====")
// }
// VM610:1 Uncaught SyntaxError: Unexpected token '['
// for(key in details){
//   console.log(key,"key====")
// }
// VM658:2 name key====
// VM658:2 phone key====
// VM658:2 address key====
// VM658:2 college key====
// VM658:2 gender key====
// undefined
// for([key,value] in details){
//   console.log(key,value,"key====")
// }
// VM673:2 n a key====
// VM673:2 p h key====
// VM673:2 a d key====
// VM673:2 c o key====
// VM673:2 g e key====
// undefined
// for(key in details){
//   console.log(details.key,"key====")
// }
// VM699:2 undefined 'key===='
// VM699:2 undefined 'key===='
// VM699:2 undefined 'key===='
// VM699:2 undefined 'key===='
// VM699:2 undefined 'key===='
// undefined
// for(key in details){
//   console.log(details[key],"key====")
// }
// VM704:2 prasanna key====
// VM704:2 123 'key===='
// VM704:2 hyd key====
// VM704:2 geethanjali key====
// VM704:2 female key====
// undefined
// for(objKey in details){
// console.log(objKey,"objKey===")
// }
// VM785:2 name objKey===
// VM785:2 phone objKey===
// VM785:2 address objKey===
// VM785:2 college objKey===
// VM785:2 gender objKey===
// undefined
// for(objKey in details){
// console.log(details[objKey],"objKey===")
// }
// VM790:2 prasanna objKey===
// VM790:2 123 'objKey==='
// VM790:2 hyd objKey===
// VM790:2 geethanjali objKey===
// VM790:2 female objKey===
// undefined
// Object.keys(details)
//  ['name', 'phone', 'address', 'college', 'gender']
// Object.values(details)
// ['prasanna', 123, 'hyd', 'geethanjali', 'female']



// Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below and press Enter to allow pasting.
// let details={name:'prasanna',phone:123,address:'hyd',college:'geethanjali',gender:'female'}
// console.log(details)
// VM316:2 {name: 'prasanna', phone: 123, address: 'hyd', college: 'geethanjali', gender: 'female'}address: "hyd"college: "geethanjali"gender: "female"name: "prasanna"phone: 123[[Prototype]]: Object
// undefined
// let name="prasanna"
// undefined
// console.log(name)
// VM407:1 prasanna
// undefined
// console.log(details.name)
// VM477:1 prasanna
// undefined
// console.log(details["name"])
// VM487:1 prasanna
// undefined
// for key in details{
//   console.log(key,"key====")
// }
// VM601:1 Uncaught SyntaxError: Unexpected identifier 'key'
// for [key,value] in details{
//   console.log(key,"key====")
// }
// VM610:1 Uncaught SyntaxError: Unexpected token '['
// for(key in details){
//   console.log(key,"key====")
// }
// VM658:2 name key====
// VM658:2 phone key====
// VM658:2 address key====
// VM658:2 college key====
// VM658:2 gender key====
// undefined
// for([key,value] in details){
//   console.log(key,value,"key====")
// }
// VM673:2 n a key====
// VM673:2 p h key====
// VM673:2 a d key====
// VM673:2 c o key====
// VM673:2 g e key====
// undefined
// for(key in details){
//   console.log(details.key,"key====")
// }
// VM699:2 undefined 'key===='
// VM699:2 undefined 'key===='
// VM699:2 undefined 'key===='
// VM699:2 undefined 'key===='
// VM699:2 undefined 'key===='
// undefined
// for(key in details){
//   console.log(details[key],"key====")
// }
// VM704:2 prasanna key====
// VM704:2 123 'key===='
// VM704:2 hyd key====
// VM704:2 geethanjali key====
// VM704:2 female key====
// undefined
// for(objKey in details){
// console.log(objKey,"objKey===")
// }
// VM785:2 name objKey===
// VM785:2 phone objKey===
// VM785:2 address objKey===
// VM785:2 college objKey===
// VM785:2 gender objKey===
// undefined
// for(objKey in details){
// console.log(details[objKey],"objKey===")
// }
// VM790:2 prasanna objKey===
// VM790:2 123 'objKey==='
// VM790:2 hyd objKey===
// VM790:2 geethanjali objKey===
// VM790:2 female objKey===
// undefined
// Object.keys(details)
// (5) ['name', 'phone', 'address', 'college', 'gender']
// Object.values(details)
// (5) ['prasanna', 123, 'hyd', 'geethanjali', 'female']
// let details={name:'prasanna',phone:123,address:'hyd',college:'geethanjali',gender:'female',name:'pras'}
// undefined
// console.log(details)
// VM924:1 {name: 'pras', phone: 123, address: 'hyd', college: 'geethanjali', gender: 'female'}
// undefined
// let details={name:'prasanna',phone:123,address:'hyd',college:'geethanjali',gender:'female',name:'pras',exists:true,employement:{company1:'abc',company2:'xyz'}}
// undefined
// console.log(details.employement)
// VM1064:1 {company1: 'abc', company2: 'xyz'}
// undefined
// console.log(details.employement.company1)
// VM1155:1 abc
// undefined
// for(objKey in details){
// console.log(objKey.employement)
// }
// VM1234:2 undefined
// VM1234:2 undefined
// VM1234:2 undefined
// VM1234:2 undefined
// VM1234:2 undefined
// VM1234:2 undefined
// VM1234:2 undefined
// undefined
// for(objKey in details){
// console.log(objKey,"objekey")
// }
// VM1250:2 name objekey
// VM1250:2 phone objekey
// VM1250:2 address objekey
// VM1250:2 college objekey
// VM1250:2 gender objekey
// VM1250:2 exists objekey
// VM1250:2 employement objekey
// undefined
// for(objKey in details){
// console.log(details.employement,"objekey")
// }
// VM1273:2 {company1: 'abc', company2: 'xyz'} 'objekey'
// VM1273:2 {company1: 'abc', company2: 'xyz'} 'objekey'
// VM1273:2 {company1: 'abc', company2: 'xyz'} 'objekey'
// VM1273:2 {company1: 'abc', company2: 'xyz'} 'objekey'
// VM1273:2 {company1: 'abc', company2: 'xyz'} 'objekey'
// VM1273:2 {company1: 'abc', company2: 'xyz'} 'objekey'
// VM1273:2 {company1: 'abc', company2: 'xyz'} 'objekey'
// undefined
// for(objKey in details){
// if(objKey === "employement"){
// console.log(details.employement,"objekey")
// }

// }
// VM1314:3 {company1: 'abc', company2: 'xyz'}company1: "abc"company2: "xyz"[[Prototype]]: Object 'objekey'
// undefined