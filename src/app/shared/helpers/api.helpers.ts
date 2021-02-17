import { keyframes } from "@angular/animations"

export interface Ingredient {
  name: string;
}
/**
 * 
 * @param ingredients - a string result from the recipe puppy API delimited by commas
 */
export const parseIngredients = (ingredients: string): string[] => {
 return ingredients.split(', ')
}

/**
 * 
 * @param ingredients - an array of ingredients from the multi select input used to search for recipes
 */
export const delimitIngredients = (ingredients: Ingredient[]): string => {
  const ing = ingredients.map(ingredient => ingredient.name).join(',').toLowerCase();
  console.log(ing)
  return ing
}
