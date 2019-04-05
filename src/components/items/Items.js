import React from 'react'
import ItemList from './ItemList'
import {Table, Row, Col} from 'react-bootstrap'

const Items = props => {
  const { items } = props
  if(items.length===0) return <div>No Items Found.</div>
  return (
    <Table striped bordered hover>
      <thead><tr>
        <th>#</th>
        <th>Item</th>
      </tr></thead>
      <ItemList items={items} />
    </Table>
  )
}

export default Items
