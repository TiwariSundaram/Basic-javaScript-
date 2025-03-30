// Singleton Object
    
     const tinderUser = new Object();

    //  for adding some key value in tinderUser object

     tinderUser.id = "059St";
     tinderUser.name="Sundaram";
     tinderUser.isLoggedIn = false;

     console.log(tinderUser);
     

    //  Nested object

    const regularUser = {
        name : {
            fullName : {
                firstName : "Sundaram",
                lastName :"Tiwari"
            }
        },
        cource : "B.tech"
    }

    console.log(regularUser.name);
    console.log(regularUser.name.fullName);
    console.log(regularUser.name.fullName.firstName);
    
    //  merged objects

        // 1.  Object.assign(terget , sources) =>
            // for murge multiple object in a single (target) object we use Object.assign(target ,source)
            // here target aond source both are objects , source is assign in target object
            // we can set target object as null object {} , then all the object assign in new null object

    const obj1 = {
        student1:"abcd",
        id1:"76"
    };
    const obj2 = {
        student2:"xyz",
        id2:"86"
    };
   
    const obj3 = Object.assign(obj1,obj2);
    const obj4 = Object.assign({},obj1,obj2);

    console.log("obj3",obj3);
    console.log("obj4",obj4);
    
    

    // 2.  spread operator
    const obj5 = {...obj1,...obj2};

    // object inside Array

    const users =[
        {
            name:"abc",
            age : 65,
            id:65
        },
       {
            name:"xyz",
            age:87,
            id:87
       }
    ];
    console.log(users[0].name);
     
    // Object.keys(objectName) => this method return all the key that is present in objectName
    // Object.values(objectName) => this method return all the value of key that is present in objectName
    // by both method return element (key/value) in the array

    console.log(tinderUser);
    console.log(Object.keys(tinderUser));
    console.log(Object.values(tinderUser));

    // ObjectName.hasOwnProperty('key') => .hasOwnProperty(key) return boolean value ,it check the key is present in ObjectName or not 
    
    console.log(tinderUser.hasOwnProperty('isLoggedIn'));

    //############  object de-structure
    const cource ={
        courceName :"js",
        price:99,
        courceInstructor:"hitesh"
    }
    // cource.CourceInstructor   or
    // const {courceInstructor} =cource;

    // console.log(courceInstructor);

    const {courceInstructor:instructor} =cource;

    console.log(instructor);
    
    
// Non singleton object
 
     const tinderUser2 ={}