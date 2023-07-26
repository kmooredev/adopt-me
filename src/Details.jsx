import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./adoptedPetContext";
import ErrorBoundary from "./errorBoundary";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import Modal from "./modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams();

  const results = useQuery(["details", id], fetchPet);
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data;

  return (
    <div className="details">
      <Carousel images={pet.photos} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{pet.type}</h2>
        <h2>
          {pet.breeds.primary} — {pet.contact.address.city},{" "}
          {pet.contact.address.state}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          <a href={pet.url}>Find Out More About {pet.name}</a>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet);
                      navigate(-1);
                    }}
                  >
                    Yes
                  </button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h2>
      </div>
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
