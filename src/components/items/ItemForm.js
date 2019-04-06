import React from 'react'
import {Form, Button} from 'react-bootstrap'

const ItemForm = props => {
  console.log(props)
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId="item">
        <Form.Label>Enter Item Here</Form.Label>
        <Form.Control value={props.itemText} onChange={props.updateItemText} />
      </Form.Group>
      <Button variant="dark" type='submit'>Submit Item</Button>
    </Form>
  )
}

export default ItemForm
