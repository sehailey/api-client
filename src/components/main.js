import React, { Component } from 'react'
import axios from 'axios'
import { Items } from './items'

class Main extends Component {
  constructor() {
    super()
    this.state = { loading: true }
  }

  componentDidMount() {
    this.fetchAPI()
  }

  async fetchAPI() {
    try {
      const { data } = await axios.get('/api')
      const { ascii } = await data
      await console.log(ascii)
      await this.fetchItems()
      await this.setState({ ascii })
    } catch (e) {
      console.log(e)
    }
  }

  async fetchItems() {
    try {
      const { data } = await axios.get('/api/items')
      this.setState({ loading: false, items: data })
    } catch (e) {
      console.log(e)
    }
  }
  renderData() {
    return (
      <div className="mt-5">
        <Items {...this.state} />
      </div>
    )
  }
  renderError() {
    return <div>{this.state.error} </div>
  }
  render() {
    if (this.state.loading) return <div />
    if (this.state.items) return this.renderData()
    if (this.state.error) return this.renderError()
    return <div />
  }
}

export default Main
