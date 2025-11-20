import Item from '../Item/Item'

const ItemList = ({ products }) => {



  return (
    <div className="flex flex-wrap justify-center gap-10 md:gap-14 lg:gap-20 p-4">
      {products.map(item => <Item key={item.id}{...item} />)}


    </div>
  )
}

export default ItemList