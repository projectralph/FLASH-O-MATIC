import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../components/Home";
import CreateDeck from "../components/CreatDeck";
import Study from "../components/Study";
import Deck from "../components/Deck";
import EditDeck from "../components/EditDeck";
import EditCard from "../components/EditCards";
import AddCard from "../components/AddCard";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
      <Route exact path="/">
            <Home />
      </Route>

      <Route path="/decks/new">
      <CreateDeck />
      </Route>

      <Route path="/decks/:deckId/study">
      <Study />
      </Route>

      <Route exact path="/decks/:deckId">
      <Deck />
      </Route>

      <Route path="/decks/:deckId/edit">
      <EditDeck />
      </Route>

      <Route path="/decks/:deckId/cards/:cardId/edit">
        <EditCard />
      </Route>

      <Route path="/decks/:deckId/cards/new">
        <AddCard />
      </Route>

        <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
