describe('Rancid Tomatillos Home Page', () => {

  beforeEach(() => {
    cy
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', { fixture: 'trailer_data.json' })
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'movie_details.json' })
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie_data.json' })
      .visit('http://localhost:3000')
  })

  it('Should display a fully loaded header', () => {
    cy
      .get('.logo').should('be.visible')
      .get('.form-container').should('be.visible')
      .get('input').should('be.visible')
      .get('input').should('be.empty')
  });

  it('Should show all movie mini posters', () => {
    cy
      .get('.movie-card')
      .should(($movieCard) => {
        expect($movieCard).to.have.length(3)
        expect($movieCard, 'first').to.contain('Money Plane')
        expect($movieCard, 'second').to.contain('Mulan')
        expect($movieCard, 'third').to.contain('Rogue')
      })
  });

  it('Should be able to search movies', () => {
    cy
      .get('input').type('mU')
      .get('.movie-card')
      .should(($movieCard) => {
        expect($movieCard).to.have.length(1)
        expect($movieCard).to.contain('Mulan')
      })
  });

  // it('Should display a message if no movies match search criteria', () => {
  //   cy
  //     .get('input').type('ava')
  //     .get('.movieGrid')
  //     .should(($movieGrid) => {
  //       expect($movieGrid).to.contain('Insert proper error message here')
  //     })
  // });

  it('Should be able to click on a mini-movie poster and be redirected to a new link', () => {
    cy
      .get('.movie-card:first').contains('Money').click()
      .url().should('include', '694919')
  });
});

describe('Movie Details Page', () => {
  // beforeEach(() => {
  //   cy
  //     .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', { fixture: 'trailer_data.json' })
  //     .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'movie_details.json' })
  //     .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie_data.json' })
  //     .visit('http://localhost:3000')
  //     .get('.movie-card:first').click()
  // })

  it('Should display the movie\'s title, rating, genre, year, and run time', () => {
    cy
      .url().should('include', '694919')
    // .get('.movie-title').should.contain('Test 1')
    // .get('.trailer').contains('Trailer')
    // .get('.backdrop').contains('oazPqs1z78LcIOFslbKtJLGlueo')
    // .get('.movie-words__title').contains('Fake')
    // .get('.movie-words__details').contains('buzzwords')
    // .get('.tomatillo').should('have.attr', 'src')
    //         { calculatePercent(movie.average_rating)
    // }% · { formatGenre(movie.genres)} · { formatYear(movie.release_date) } · { formatRunTime(movie.runtime) }</h2 >
    //   <p className='overview'>{movie.overview}</p>
  });

})




// it('Should play the trailer when clicked on', () => {
// });


// testing error message 
// it('should show an error message when the server does not respond', () => {
//   cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', [])
//   cy.visit('http://localhost:3000')
//     .get('h2').contains('Oops')
// })

// it('should go back or forward in the browser\'s history', () => {
//   // https://on.cypress.io/go

//   cy.location('pathname').should('include', 'navigation')

//   cy.go('back')
//   cy.location('pathname').should('not.include', 'navigation')

//   cy.go('forward')
//   cy.location('pathname').should('include', 'navigation')

//   // clicking back
//   cy.go(-1)
//   cy.location('pathname').should('not.include', 'navigation')

//   // clicking forward
//   cy.go(1)
//   cy.location('pathname').should('include', 'navigation')
// })

// it('cy.visit() - visit a remote url', () => {
//   // https://on.cypress.io/visit

//   // Visit any sub-domain of your current domain

//   // Pass options to the visit
//   cy.visit('https://example.cypress.io/commands/navigation', {
//     timeout: 50000, // increase total time for the visit to resolve
//     onBeforeLoad(contentWindow) {
//       // contentWindow is the remote page's window object
//       expect(typeof contentWindow === 'object').to.be.true
//     },
//     onLoad(contentWindow) {
//       // contentWindow is the remote page's window object
//       expect(typeof contentWindow === 'object').to.be.true
//     },
//   })
// })

// it('Should display an error message if the movies cannot be loaded', () => {
  //   // cy.fixture('movie_data.json').then((movies) => {
  //   cy.intercept(
  //     'GET',
  //     'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
  //     {
  //       statusCode: 500,
  //       body: {
  //         message: `Something went wrong`
  //       }
  //     }
  //   )
  //   // })
  //   cy.get('.error').should('contain', 'Something went wrong')
  // })