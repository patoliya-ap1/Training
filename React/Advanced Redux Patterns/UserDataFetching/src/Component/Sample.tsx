// 1. Define the type for the data array
interface ItemData {
  id: number;
  name: string;
  value: number;
}

// 2. The React component where rendering takes place
const ItemList = () => {
  // Sample data with the defined type
  const items: ItemData[] = [
    { id: 1, name: "Apple", value: 10 },
    { id: 2, name: "Banana", value: 20 },
    { id: 3, name: "Cherry", value: 30 },
  ];

  const List = ({ name }: { name: string }) => {
    return <div>{name}</div>;
  };

  return (
    <div>
      <h1>Item List</h1>

      <ul>
        {items.map(({ id, name, value }) => {
          return (
            <li key={id}>
              {name}: {value}
              <List name={name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
