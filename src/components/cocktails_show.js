import React from 'react'
import {connect} from 'react-redux'
import {showCocktail} from '../actions'

class CocktailsShow extends React.Component {


  render(){
    const cocktail = this.props.cocktail
    return (
      <div>
        <h2>Cocktail Show</h2>
        <p></p>
      </div>

    )
  }
}
function mapStateToProps(state) {
  return { cocktail: state.cocktail }
}

function mapDispatchToProps(dispatch) {
  return {
    showCocktail: function() {
      let action = showCocktail()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsShow)
