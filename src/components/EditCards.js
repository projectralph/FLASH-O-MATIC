import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api/index";


function EditCard(){
    const {cardId, deckId } = useParams();
    const history = useHistory();

    const initialDeckState = {
        id: '', 
        name: '',
        description: '',
    }
    const initialCardState = {
        id: "",
        front: "",
        back: "",
        deckId: "",
    };
    const [deck, setDeck] = useState(initialDeckState);
    const [card, setCard] = useState(initialCardState);

  
    useEffect(() => {
   
        async function loadDeck() {
          const deckResponse =  await readDeck(deckId);
          const cardResponse = await readCard(cardId);
          setDeck(deckResponse);
          setCard(cardResponse);
        }
        loadDeck();
      }, [deckId, cardId]);
        
    
      function handleChange({ target }) {
        setCard({
            ...card,
            [target.name]: target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await updateCard({ ...card })
        history.push(`/decks/${deckId}`);
        return response;
    }

    async function handleCancel() {
        history.push(`/decks/${deckId}`);
    }


    return (
        <div>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/decks/${deckId}`}>{deck.name}</Link>
                </li>
                <li className="breadcrumb-item active">Edit Card  {cardId}</li>
            </ol>
            <form onSubmit={handleSubmit}>
                <h2>Edit Card</h2>
                <div className="form-group">
                    <label>Front</label>
                    <textarea
                        id="front"
                        name="front"
                        className="form-control"
                        onChange={handleChange}
                        type="text"
                        value={card.front}
                    />
                </div>
                <div className="form-group">
                    <label>Back</label>
                    <textarea
                        id="back"
                        name="back"
                        className="form-control"
                        onChange={handleChange}
                        type="text"
                        value={card.back}
                    />
                </div>
                <button
                    className="btn btn-secondary mx-1"
                    onClick={() => handleCancel()}
                >
                    Cancel
                </button>
                <button className="btn btn-primary mx-1" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
}

export default EditCard;