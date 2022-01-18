import { useEffect, useState } from "react"
import index from "./index.css"
import Card from "./components/Card"
import Article from "./components/Article"
import Header from "./components/Header"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import useFetch from "./useFetch"
import { computeHeadingLevel } from "@testing-library/react"
import Home from "./components/Home"
import AddArticle from "./components/AddArticle"

function App() {
  const [url, setUrl] = useState("http://localhost:3000/recipes")
  const { data: cards, isPending, error } = useFetch(url)
  const [cardSearched, setCardSearched] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Header searchCard={setCardSearched} />
        <main>
          <div className="container">
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/create">
              <AddArticle />
            </Route>
            <Route exact path="/">
              {error && <h1>{error}</h1>}
              {isPending && <h1>I am pending</h1>}
              {cards ? (
                <div className="cards">
                  {cards.map((card) => (
                    <Card card={card} key={card.id} />
                  ))}
                </div>
              ) : null}
            </Route>
            <Route path="/card/:id" component={Article}></Route>
          </div>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
