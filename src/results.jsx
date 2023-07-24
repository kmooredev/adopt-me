import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.type}
            id={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            photos={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
