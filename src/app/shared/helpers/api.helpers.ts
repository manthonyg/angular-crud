
/**
 * 
 * @param ingredients - a string result from the recipe puppy API delimited by commas
 */
export const parseIngredients = (ingredients: string): string[] => {
 return ingredients.split(', ')
}
