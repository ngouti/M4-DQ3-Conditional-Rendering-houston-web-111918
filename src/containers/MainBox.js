import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state = {
      page: Profile
    }
  }

  setPage = (pageType) => {
    this.setState({
      page: pageType
    })
  }
  render() {
    console.log(Profile)
   const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar setPage={this.setPage} profile={Profile} photo={Photos} cocktail={Cocktails} pokemon={Pokemon}/>
        <this.state.page/>
      </div>
    )
  }

}

export default MainBox
