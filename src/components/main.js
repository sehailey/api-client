import React, { Component } from 'react'
import axios from 'axios'
import { Items, ItemForm, ItemSearch, ItemSearchResult } from './items'
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
    this.handleCreate = this.handleCreate.bind(this)
    this.handleRead = this.handleRead.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount = () => this.fetchApi()

  clearItemText = () => this.setState({itemText: ''})

  async fetchApi() {
    try {
      const { data } = await axios.get('/api/items')
      this.setState({ loading: false, items: data })
    } catch (e) {
      console.log('The api is not available.')
      this.setState({loading: false, apiNotFound: true})
    }
  }

  updateItemText(e) {
    e.preventDefault()
    console.log(e.target.value, this.state.itemText)
    this.setState({itemText: e.target.value})
  }

  async handleCreate(e) {
    e.preventDefault()
    const name = e.target.item.value
    const id = this.state.items.length
    try{
      const res = await axios.post('api/items', {name})
      await this.setState({itemText: '', items: this.state.items.concat(res.data)})
    } catch(e) {
      console.log(e)
      await this.setState({itemText: '', items: this.state.items.concat({id, name})})
    }
  }

  async handleRead(e) {
    e.preventDefault()
    const id = e.target.search.value
    try{
      const res = await axios.get(`api/items/${id}`)
      this.setState({searchItem: res.data, searchText: res.data.name, itemText: ''})
    }
    catch(e) {
      console.log(e)
    }
  }

  async handleUpdate(e) {
    e.preventDefault()
    console.log(e.target.name)
  }

  async handleDelete(e) {
    e.preventDefault()
    console.log(e.target)
  }
  renderData() {
    return (
      <>
      <Container fluid className="mt-5">
        <Row><Col sm={3}>
          <ItemForm
            itemText={this.state.itemText}
            handleSubmit={this.handleCreate}
            updateItemText={this.updateItemText}/>
          <ItemSearch
            searchText={this.state.searchText}
            handleRead={this.handleRead} />
          {this.state.searchItem ?
            <ItemSearchResult
              item={this.state.searchItem}
              searchText={this.state.searchText}
              updateItemText={this.updateItemText}
              handleUpdate={this.handleUpdate}/> :
            <div/>}
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
