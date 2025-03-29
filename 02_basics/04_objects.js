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
    
    
// Non singleton object
 
     const tinderUser2 ={}