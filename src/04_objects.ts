

//email? : string  -> email may be absent, if it is present it will be a string
// it is not the same as email : string | undefined



type User = {
    id : number; //required property if not in quotes
    name: string;
    email? : string; //optional (could be absent)
    readonly createdAt : Date //cannot be reassigned
}



const user1 : User = {id : 1, name : "sagam", createdAt : new Date()}
const user2 : User = {id : 2, name : "Jude", createdAt : new Date(), email : "example@string"}


// user1.createdAt = new Date()

type User2 = {email? : string};
type User3 = {email: string | undefined};


// property is string, property value is number
type Count = {[k: string] : number};

// record reusable property types
type Count1 = Record<"likes" | "views" | "shares", number>


const c1 : Count = {whateverStringYouWant : 2}

const c2 : Count1 = {likes : 1, views : 2, shares : 3}