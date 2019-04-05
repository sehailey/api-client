import React from 'react'
import ItemList from './ItemList'
import {Container, Row, Col, Table} from 'react-bootstrap'

const Items = props => {
  const { items } = props
  return (
    <Container className="mt-5">
      <Row><Col><h3>Items</h3></Col></Row>
      <Row><Col><Table striped bordered hover>
        <thead><tr>
          <th>#</th>
          <th>Item</th>
        </tr></thead>
        <ItemList items={items} />
      </Table></Col></Row>
    </Container>
  )
}

export default Items
