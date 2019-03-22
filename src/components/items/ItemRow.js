import React from 'react'

const ItemRow = item => {
  return (
    <tr>
      <th>{item.id}</th>
      <td>{item.name}</td>
    </tr>
  )
}

export default ItemRow
