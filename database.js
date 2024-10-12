import Realm from "realm";

// Schéma pour User
const UserSchema = {
    name: "User",
    primaryKey: "id",
    properties: {
    id: "int",
    name: "string",
    firstname: "string",
    gender: "string",
    email: "string",
    password: "string",
    dateOfBirth: "date",
    weight: "int", 
    height: "int",
    activity_level: "string",
    profilePicture: "string",
    },
};

// Schéma pour UserFood
const UserFoodSchema = {
    name: "UserFood",
    primaryKey: "id",
    properties: {
    id: "int", 
    userId: "int", 
    foodId: "int",
    date: "date",
    mealType: "string",
    quantity: "int",
    },
};

const realm = new Realm({
    schema: [UserSchema, UserFoodSchema],
});

export default realm;

