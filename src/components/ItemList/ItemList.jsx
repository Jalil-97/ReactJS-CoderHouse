import Item from '../Item/Item'

const ItemList = ({ products }) => {
  return (

    <section className="w-full flex justify-center px-6">

      <div className="
        grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-20 justify-items-center w-full max-w-7xl">
        {products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      
    </section>
  );
};


export default ItemList