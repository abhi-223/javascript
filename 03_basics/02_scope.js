//var c = 300
let a = 300
if (true){
    let a = 10
    console.log("inner:",a);
    
    const b = 20
    var c = 30
}
for (let i = 0; i<Array.length; i++){
    const element = array[i];
}
 
//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "ram"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    console.log(website);
    two()
    
    
}
one()