const adminDefault=(req,res)=>{
    // res.send("<h1 align='center'>Welcome to the admin page!</h1>");


    const name="Mehvish Khan";
    const age=22;

    res.render('admin/admin',{name:name, age:age});  // name object is passed to the admin.ejs file which is present in views folder and we can use this name object in admin.ejs file to display the name.
}


const adminHome=(req,res)=>{
    // res.send("<h1 align='center'>Welcome to the admin home page!</h1>");


    const temp= "<p style='color: yellow; padding: 10px;'>This is a paragraph from admin home page!</p>";


    res.render('admin/adminHome',{temp:temp});
}

const adminMain=(req,res)=>{

    const userData=
        [
            {userId:1001, username:"Sachin", userEmail:"sachin@example.com", userGender:"male",userDept:"Accounts"},
         {userId:1002, username:"Virat", userEmail:"virat@example.com", userGender:"male",userDept:"Accounts"},
          {userId:1003, username:"Rohit", userEmail:"rohit@example.com", userGender:"male",userDept:"Accounts"},
           {userId:1004, username:"Dhoni", userEmail:"dhoni@example.com", userGender:"male",userDept:"Accounts"},
            {userId:1005, username:"Kohli", userEmail:"kohli@example.com", userGender:"male",userDept:"Accounts"}]

    res.render('admin/adminMain',{userData:userData});
}


const addUser=(req,res)=>{
    if(req.method==='POST'){
        // Process the form data
        console.log(req.body);
    }
    res.render('./admin/adminAdd');
}

module.exports={adminDefault, adminHome, adminMain, addUser};