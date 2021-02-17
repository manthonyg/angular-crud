export class Recipe {

  public title: string;
  public href: string;
  public ingredients: string;
  public thumbnail: string;
  
  constructor(recipeKwargs: object) {
    return Object.assign(this, recipeKwargs)
  }
}