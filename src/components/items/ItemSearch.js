import React from 'react'
import {Form, Button} from 'react-bootstrap'

const ItemSearch = props => {
  return (
    <Form className = "mt-5" onSubmit={props.handleRead}>
      <Form.Group controlId="search">
        <Form.Control type="text" placeholder="Search" />
      </Form.Group>
      <Button variant="dark" type="submit">Search</Button>
    </Form>
  )
}

export default ItemSearch
