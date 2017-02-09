import React from 'react'
import {connect} from 'react-redux'
import {showCocktail} from '../actions'

class CocktailsShow extends React.Component {


  render(){
    return (
      <div>
        <h2>Cocktail Show</h2>
        <h1>{this.props.cocktail.name}</h1>
        <p>{this.props.cocktail.description}</p>
      </div>

    )
  }
}
function mapStateToProps(state) {
  const cocktail = state.cocktails.find( cocktail => cocktail.id === state.currentCocktail ) || {}
  return { cocktail: cocktail,
   }
}

export default connect(mapStateToProps)(CocktailsShow)
