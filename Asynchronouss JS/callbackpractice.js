// Task

// Ek function afterDelay(time, callback) banao.

// Expected Flow
// time ke baad callback execute ho
// Output:
// Callback executed
// Example
// afterDelay(2000, function(){
//     console.log("Callback executed");
// });

// function afterDelay(time,cb){
//     console.log("Loading.....");
    
//     setTimeout(function(){
//         console.log("Executed......");
//         cb({id:1,name:'dg'})
//     },1500)
// }

// afterDelay(2,function(data){
//     console.log(data);
// })

// Exercise 2 — Custom Greeting
// Task

// Ek function greetUser(name, callback) banao.

// Requirements
// 1 sec baad:
// Hello Divyanshu

// print karo

// Fir callback call karo
// Expected Output
// Hello Divyanshu
// Welcome message sent

// function greetUser(name,cb){
//     setTimeout(function(){
//         console.log("Hello, Divyanshu !!!");
//         cb();
//     },1000)
// }

// greetUser('dg',function(){
//     console.log("Welcome msg sent...");
    
// })

// Exercise 12 — Real Callback Hell Monster 👹
// Scenario

// Instagram clone simulation.

// Flow
// loginUser
// fetchProfile
// fetchFollowers
// fetchPosts
// likePost


// Expected Console
// User logged in
// Profile loaded
// Followers loaded
// Posts loaded
// Post liked

// Goal
// Nested callbacks ko deeply samajhna

function loginUser(username,cb){
    console.log(`Logging ${username}.....`);
    setTimeout(function(){
        cb({id : 121, username : 'divyanshu6928'})
    },1000)
}

function fetchProfile(id,username,cb){
    console.log(`Fetching profile of ${username}`);
    setTimeout(function(){
        console.log("Profile fetched");
        cb({id : 121, username : 'divyanshu6928'});
    },1000)
    
}

function fetchFollowers(id,username,cb){
    console.log(`Fetching followers of ${username}`);
    setTimeout(function(){
        console.log("Followers fetched");
        cb({id : 121, username : 'divyanshu6928', followers : 123, following : 321});
    },2000);
    
};

function fetchPosts(id,username,cb){
    console.log(`Fetching posts of ${username}`);
    setTimeout(function(){
        console.log("Posts fetched");
        cb({id : 121, username : 'divyanshu6928', posts : 250, images : 200, videos : 100});
    },1000);
    
};

function likePost(id,username,postid,cb){
    setTimeout(function(){
        console.log("Post Liked");
        cb();
    })
    
}

loginUser("divyanshu6928",function(details){
    console.log(`User with id : ${details.id} has been succesfully entered....`);
    fetchProfile(details.id,details.username,function(profileDetails){
        console.log(`Profile loaded... `);
        fetchFollowers(profileDetails.id,profileDetails.username,function(followerDetails){
            console.log(`Followers fetched.... \n Followers : ${followerDetails.followers}.\n Following : ${followerDetails.following}`);
            fetchPosts(followerDetails.id,followerDetails.username,function(postDetails){
                console.log(`Profile Details Fetched.. \n Total posts : ${postDetails.posts} \n Images : ${postDetails.images}. Videos : ${postDetails.videos}`);
                likePost(postDetails.id,postDetails.username,3,function(){
                    console.log("Command executed successfully........");
                    
                })
                
            })
        })
    })
})