import React, {Fragment, useState, useEffect} from 'react';
import Gifs from './components/Gifs'
import Form from './components/Form'
import Header from './components/Header'
import Paginator from './components/Paginator'
import Preloader from './components/Preloader'
import 'materialize-css/dist/css/materialize.min.css';

function App() {

  const gifsPerPage = 30

  const [showPreloader, setPreloader] = useState(false)

  const [gifs, setGifs] = useState([])

  const [gif, setGif] = useState({})

  const [name, setName] = useState('')

  const [currentPage, setCurrentPage] = useState(0)
  
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {

    if(!name) return

    const getGifs = async () => {

      setPreloader(true)

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

      setPreloader(false)

    }

    const top = document.querySelector('.container')

    top.scrollIntoView({behavior: 'smooth'})

    getGifs()

}, [name, currentPage])

  const showBackButton=currentPage === 0 || name === ''

  const showNextButton=currentPage === totalPages || name === ''

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

      <Header title="Search Gifs"/>

      <main className="container white">

        <Form setName={setName}/>
        
        {showPreloader ? <Preloader/> : <Gifs gifs={gifs} setGif={setGif}/>}

        <Paginator
          nextPage={nextPage} 
          backPage={backPage} 
          showBackButton={showBackButton} 
          showNextButton={showNextButton}
        />

      </main>

    </Fragment>

  )

}

export default App;
