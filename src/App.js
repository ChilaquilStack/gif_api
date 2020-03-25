import React, {Fragment, useState, useEffect} from 'react';
import Gifs from './components/Gifs'
import Form from './components/Form'
import Header from './components/Header'

function App() {

  const gifsPerPage = 30

  const [gifs, setGifs] = useState([])

  const [gif, setGif] = useState({})

  const [name, setName] = useState('')

  const [currentPage, setCurrentPage] = useState(0)
  
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {

    const getGifs = async () => {

        const api_key = 'mkQkcuGKSxsbg1UVv9EQDREPs5MKsPvM'

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${name}&limit=${gifsPerPage}&offset=${currentPage}`

        try {
            
          const response = await fetch(url)

          const {data, pagination} = await response.json()
          
          const calcTotalPages = Math.ceil(pagination.total_count / gifsPerPage) 
          
          setGifs(data)

          setTotalPages(calcTotalPages)

        } catch (error) {

          console.error(error)
            
        }

    }

    const top = document.querySelector('.container')

    top.scrollIntoView({behavior: 'smooth'})

    getGifs()

}, [name, currentPage])


  const backPage = () => {
    
    const newCurrentPage = currentPage === 0 ? currentPage : currentPage - gifsPerPage
    
    setCurrentPage(newCurrentPage)
  
  }
  
  const nextPage = () => {
    
    const newCurrentPage = currentPage === totalPages ? currentPage : currentPage + gifsPerPage
    
    setCurrentPage(newCurrentPage)
  
  }

  return (

    <Fragment>

      <Header
        title="Buscador de Gifs"
      />

      <main className="container white">
        
        <Form setName={setName}/>

        <Gifs gifs={gifs} setGif={setGif}/>

        <div className="row">

          <div class="input-field col s6">
            
            <div className="left-align">

              { (currentPage === 0 || name === '') ? null : <a class="waves-effect waves-light btn" onClick={backPage}> &laquo; Back </a>}

            </div>
      
          </div> 
            
          <div class="input-field col s6">

            <div className="right-align">

              { (currentPage === totalPages || name === '') ? null : <a class="waves-effect waves-light btn" onClick={nextPage}>Next &raquo;</a>}

            </div>
            
          </div>
          
        </div>

      </main>

    </Fragment>

  );
}

export default App;
