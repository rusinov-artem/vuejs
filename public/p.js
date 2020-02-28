var k = new Promise(function(r,f){
    return  r("Hello");
});

k.then(
    (data,a,b)=>{
        console.log(data);
         "data + " + data;
    }
).then((data)=>{
    console.log(data);
})