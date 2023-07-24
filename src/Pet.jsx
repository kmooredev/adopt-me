import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, photos = [], location, id } = props;
  let hero = "http://pet-images.dev-apis.com/pets/none.jpg";
  if (photos.length) {
    hero = photos[0].small;
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} — {breed} — {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
