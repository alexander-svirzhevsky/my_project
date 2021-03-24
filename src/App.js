import React from 'react'
import { Header } from './components/Header'
import { Login } from './components/Login'
import { Registration } from './components/Registration'
import { Map } from './components/Map'
import { Profile } from './components/Profile'


class App extends React.Component {

  state = { currentPage: "home" }

  navigateTo = (page) => {
    this.setState({ currentPage: page })
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Header navigate={this.navigateTo} />
          <main>
            <section>
              <div className="section-wrap">
                {this.state.currentPage === "home" && <Login navigate={this.navigateTo} />}
                {this.state.currentPage === "registration" && <Registration navigate={this.navigateTo} />}
                {this.state.currentPage === "map" && <Map />}
                {this.state.currentPage === "profile" && <Profile />}
              </div>
            </section>
          </main>
        </div>
      </>
    )
  }

}

export default App;
