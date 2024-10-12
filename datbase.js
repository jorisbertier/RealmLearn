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

// Schéma pour Food
const FoodSchema = {
    name: "Food",
    primaryKey: "id",
    properties: {
    id: "int",
    name: "string",
    image: "string",
    description: "string",
    category: "string",
    notes: "string",
    nutrition: {
        type: "object",
        properties: {
        servingSize: {
            type: "object",
            properties: {
            quantity: "int",
            unit: "string",
            },
        },
        calories: "int",
        macronutrients: {
            type: "object",
            properties: {
            carbohydrates: {
                type: "object",
                properties: {
                total: "int",
                unit: "string",
                fiber: "int",
                },
            },
            proteins: {
                type: "object",
                properties: {
                total: "int", 
                unit: "string",
                },
            },
            fats: {
                type: "object",
                properties: {
                total: "int",
                unit: "string",
                },
            },
            },
        },
        },
    },
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
    schema: [UserSchema, FoodSchema, UserFoodSchema],
});

export default realm;