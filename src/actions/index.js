const defaultCocktails = [{id: 1, name: 'Gin and Tonic', description: 'has gin and tonic'}, {id: 2, name: 'Old Fashioned',
description:'has bourbon'}, {id: 3, name: 'Negroni', description: 'has negroni'}, {id: 4, name: 'Roy Rogers',
description: 'ingredients unknown'}];

export function fetchCocktails() {
  return {
    type: 'FETCH_COCKTAILS',
    payload: defaultCocktails
  }
}

export function showCocktail(){
  return {
    type: 'SHOW_COCKTAIL',
    payload: defaultCocktails
  }
}
