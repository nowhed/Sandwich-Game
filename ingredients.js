var ingredients = [
    ["Bread", 1.25, 0.35],
    ["Cheese", 2, 0.50],
    ["Bacon",1,1.5],
    ["Fried Egg",3,0.2],
    ["Lettuce",2.83,1.4]]
var ingredientBank = [
    ["Turkey", 1.5, 1],
    ["Tomato", 2, 0.50]
]
function getIngredient(ingrNumber){
    var tempIngr = ingredientBank[ingrNumber]
    ingredientBank.splice(ingrNumber)
    ingredients+= tempIngr
    setIngredientSelect();
}