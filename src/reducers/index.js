import { combineReducers } from 'redux';
import cocktailsReducer from './cocktails_reducer';
import currentCocktailReducer from './current_cocktail_reducer'

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  cocktail: currentCocktailReducer
})

export default rootReducer
