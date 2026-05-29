// function abcd(fn){
//     fn(function(fn3){
//             fn3(function(fn5){
//                 fn5();
                
//             })
//         });
    
// }

// abcd(function(fn2){
//     fn2(function(fn4){
//         fn4(function(){
//             console.log("Hey....");
            
//         })
//     });
// });

// !--------!

// function afterDelay(time, cb){
//     setTimeout(function(){
//         cb();
//     }, time)
// }

// afterDelay(2000, function(){
//     console.log("Callback executed !!");
    
// })

// !---------!

function getUser(username,cb){
    console.log("Fetching username.....");
    setTimeout(function(){
        cb({id : 0, username : "dg"});
    },1000)
}

function getUserPosts(id, cb){
    console.log("Fetching User posts....");
    
    setTimeout(() => {
        cb(['Intro to Algorithm, System Design, Corporate ready in 30 dayd'])
    },2000)
}

getUser("divyanshu",function(userDetails){
    getUserPosts(userDetails.id,function(allPosts){
        console.log(userDetails.username , allPosts);
        
    });
})