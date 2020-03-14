/* EXAMPLE 1 */
function f() {
    let promise = new Promise((resolve, reject) => {
          setTimeout(() => {                  
                resolve("Hi there")
          }, 3000)
    });   
    promise.then(res => {
          console.log(res);
    });    
}
f();


/* EXAMPLE 2 */
var happy=true;
var p = new Promise((resolve, reject) => {
     if (happy) {
         resolve("Hello WOrld!")
     }else{
         reject("Faiulure!")
    };
});

p.then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});