import React from 'react'
import "../css/Error.css"

function Error() {
  return (
    <article id='error' className='padding'>
        <section>
            <h2>Error 404</h2>
            <h3>Tato stránka neexistuje</h3>
            <h5>Dejte si pivko zatímco to opravíme.</h5>
        </section>
        <section>
          <img src="./beer.webp" alt="kreslené pivo" />
        </section>
    </article>
  )
}

export default Error