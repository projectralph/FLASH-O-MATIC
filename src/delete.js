async function handleDelete(deck){
    if ( window.confirm(`Delete this deck?`)
    ) {
        history.push("/");
        return await deleteDeck(deck.id)
    } 
}


<button type="button" className="btn btn-danger mx-1" onClick={() => handleDelete(deck)}>
                        Delete
                    </button> 