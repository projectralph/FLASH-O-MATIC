import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory} from "react-router-dom"
import {readDeck, deleteDeck, deleteCard } from "../utils/api/index";

function Deck(){
    const history = useHistory();
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function getDeck() {
          const response = await readDeck(deckId);
          setDeck(response);
          setCards(response.cards);
        }
        getDeck();
        }, [deckId]);

        // useEffect(() => {
        //     async function getCards() {
        //       const response = await readDeck(deckId);
        //       setCards(response.cards);
        //     } 
        //     getCards();
        //   }, [deck.id])

        async function handleDeleteDeck(deck) {
            if (
                window.confirm(
                    `Delete this deck? You will not be able to recover it`
                )
            ) {
                history.go(0);
                return await deleteDeck(deck.id);
            }
        }

        async function handleDeleteCard(card) {
            if (
                window.confirm(
                    `Delete this deck? You will not be able to recover it`
                )
            ) {
                history.go(0);
                return await deleteCard(card.id);
            }
        }

        async function handleEditDeck(deck) {
            history.push(`/decks/${deckId}/edit`);
        }
    
        async function handleStudy() {
            history.push(`/decks/${deckId}/study`);
        }
    
        async function handleAddCard() {
            history.push(`/decks/${deckId}/cards/new`);
        }
    
        async function handleEditCard(card) {
            history.push(`/decks/${deckId}/cards/${card.id}/edit`);
        }


    return (
        <div>
        <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">{`${deck.name}`}</li>
            </ol>
             <div>
                    <div className="card-body">
                        <h2 className="card-title">{`${deck.name}`}</h2>
                        <p>{deck.description}</p>
                        <button
                            onClick={() => handleEditDeck(deck)}
                            className="btn btn-secondary mx-1"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleStudy()}
                            className="btn btn-primary mx-1"
                        >
                            Study
                        </button>
                        <button
                            onClick={() => handleAddCard()}
                            className="btn btn-primary mx-1"
                        >
                            Add Cards
                        </button>
                        <button
                            onClick={() => handleDeleteDeck(deck)}
                            className="btn btn-danger mx-1"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <h1>Cards</h1>
                {cards.map((card) => {
                    return (
                        <div className="card-deck" key={card.id}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">{card.front}</div>
                                        <div className="col">{card.back}</div>
                                    </div>
                                    <div className="container row">
                                        <button
                                            onClick={() => handleEditCard(card)}
                                            className="btn btn-secondary mx-1"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDeleteCard(card)
                                            }
                                            className="btn btn-danger mx-1"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
         
                 
              


export default Deck;