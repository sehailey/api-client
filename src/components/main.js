import React, { Component } from 'react'
import axios from 'axios'
import { Items } from './items'
import {Container, Row, Col} from 'react-bootstrap'

class App extends Component {
  constructor() {
    super()
    this.state = { loading: true }
  }

  componentDidMount() {
    this.fetchApi()
  }

  async fetchApi() {
    try {
      const { data } = await axios.get('/api/items')
      this.setState({ loading: false, items: data })
    } catch (e) {
      console.log(e)
      this.setState({loading: false, apiNotFound: true})
    }
  }

  renderData() {
    return <Items {...this.state} />
  }

  renderApiNotFound() {
    return <Container className="mt-5"><Row/><Row><Col/>
      <Col>Hello! The client is working correctly, but no API was found.</Col>
      <Col/></Row></Container>
  }
  render() {
    if (this.state.loading) return <div />
    if(this.state.apiNotFound) return this.renderApiNotFound()
    if (this.state.items) return this.renderData()
    return <div />
  }
}

export default App
