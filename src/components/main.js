import React, { Component } from 'react'
import axios from 'axios'
import { Items, ItemForm } from './items'
import {Container, Row, Col} from 'react-bootstrap'

const Error = () => {
  return (
    <Row><Col>
      {`Hello! The client is working correctly, but no API was found.\n
You can still submit items to the table, but they won't persist
after refreshing the page.`}
    </Col></Row>
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = { loading: true, items: [], itemText: '' }
    this.updateItemText = this.updateItemText.bind(this)
    this.handleSubmit = this.handleSubmit .bind(this)
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

  updateItemText(e) {
    e.preventDefault()
    console.log(e.target.value, this.state.itemText)
    this.setState({itemText: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.value)
  }

  renderData() {
    return (
      <>
      <Container fluid className="mt-5">
        <Row><Col sm={3}>
          <ItemForm itemText={this.state.itemText} handleSubmit={this.handleSubmit} updateItemText={this.updateItemText}/>
          <div className="mt-5">{this.state.apiNotFound ? <Error/> : ''}</div>
        </Col><Col sm={8}><h3>Items</h3><Items {...this.state} /></Col></Row>
      </Container>
      </>
    )
  }

  render() {
    if (this.state.loading) return <div />
    if (this.state.items) return this.renderData()
    return <div />
  }
}

export default App
