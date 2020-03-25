import React, {Fragment, useState, useEffect} from 'react';
import Gifs from './components/Gifs'
import Form from './components/Form'
import Header from './components/Header'

function App() {

  const [gifs, setGifs] = useState([])

  const [gif, setGif] = useState({})

  const [name, setName] = useState('')

  useEffect(() => {

    const getGifs = async () => {
        
        const api_key = 'mkQkcuGKSxsbg1UVv9EQDREPs5MKsPvM'

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${name}`

        try {
            
          const response = await fetch(url)

          const {data} = await response.json()

          setGifs(data)

        } catch (error) {

          console.error(error)
            
        }

    }

    getGifs()

}, [name])

  
  return (

    <Fragment>

      <Header
        title="Buscador de Gifs"
      />

      <main className="container white">
        
        <Form setName={setName}/>

        <Gifs gifs={gifs} setGif={setGif}/>

      </main>

    </Fragment>

  );
}

export default App;
