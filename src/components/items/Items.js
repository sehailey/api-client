import React from 'react'
import ItemList from './ItemList'
import Table from 'react-bootstrap/Table'
const Items = props => {
  const { items } = props

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
        </tr>
      </thead>
      <ItemList items={items} />
    </Table>
  )
}

export default Items
