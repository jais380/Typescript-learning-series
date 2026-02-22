

const ROLES = ["admin", "user", "operator"] as const //makes it a readonly array of strings

//derive a union from the array
type Role = (typeof ROLES)[number];

function setRole(r: Role){
    console.log(r);
}

setRole('operator')