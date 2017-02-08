import React from 'react'
import { connect } from 'react-redux'
import { fetchCocktails } from '../actions'

class CocktailsIndex extends React.Component {

  componentDidMount() {
      this.props.fetchCocktails()
  }

  render() {
    const cocktailsss = this.props.cocktails
    return (
      <div>
        <h1>All da cocktails</h1>
        <ul>
          { cocktailsss.map((cocktail, i) => <li key={i}>{cocktail.name}</li>)}
        </ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { cocktails: state.cocktails }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCocktails: function() {
      let action = fetchCocktails()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsIndex)
