import React from 'react'
import { connect } from 'react-redux'
import { fetchCocktails } from '../actions'
import { updateCurrentCocktail } from '../actions'
import CocktailsShow from './cocktails_show'
import { showCocktails } from '../actions'

class CocktailsIndex extends React.Component {

  componentDidMount() {
      this.props.fetchCocktails()
  }

  handleClick(id){
    console.log(id)
    this.props.updateCurrentCocktail(id)
  }

  render() {
    const cocktailsss = this.props.cocktails
    return (
      <div>
        <h1>All da cocktails</h1>
        <ul>
          { cocktailsss.map((cocktail) => <li key={cocktail.id} id={cocktail.id} onClick={this.handleClick.bind(this, cocktail.id)}>{cocktail.name}</li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cocktails: state.cocktails,
    currentCocktail: state.currentCocktail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCocktails: function() {
      let action = fetchCocktails()
      dispatch(action)
    },
    updateCurrentCocktail: function(id) {
      let action = updateCurrentCocktail(id)
      dispatch(action)
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsIndex)
