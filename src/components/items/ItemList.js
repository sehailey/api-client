import React from 'react'
import ItemRow from './ItemRow'
const ItemList = props => {
  const { items } = props
  console.log(items)
  return (
    <tbody>
      {items.map(item => (
        <ItemRow key={item.id} {...item} />
      ))}
    </tbody>
  )
}

export default ItemList
