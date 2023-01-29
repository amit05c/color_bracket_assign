function myfunc(){
    console.log("hello")
    let limit=1;
    let sum=60;
    let randomvalue=2.77;
    for(let value=1; value<limit; value=value+3){
        console.log("randomvalue",randomvalue)
        for(let j=1; j<limit; j=j+2){
            sum++
        }
        console.log(sum)
    }

}

myfunc()

