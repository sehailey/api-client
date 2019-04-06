import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

const ItemSearch = props => {
  const {item, handleUpdate, updateItemText} = props
  const {id, name} = item
  return (
    <Form className = "mt-5" onSubmit={handleUpdate}>
    Search Results    
      <Form.Group as={Row} controlId="searchResult">
        <Form.Label column sm="2">ID:</Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={id} />
        </Col>
        <Form.Control
          name="name"
          type="text"
          onChange={updateItemText}
          value={name} />
      </Form.Group>
      <Button variant="dark" type="submit">Update</Button>
    </Form>
  )
}

export default ItemSearch
