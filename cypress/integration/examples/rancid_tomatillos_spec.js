describe('Rancid Tomatillos Home Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should display a search bar in the header', () => {
    cy.get('.logo').should('be.visible')
    cy.get('.form-container').should('be.visible')

  });

  it('Should be able to visit the page and render the correct elements', () => {
    cy.contains('Movies');
  });

  it('Should show all movie mini posters', () => {
    // .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie_data.json' })
    cy.fixture('movie_data.json').then((movies) => {
      cy.intercept({
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      },
        {
          statusCode: 200,
          body: {
            movies: movies,
          }
        }
      )
    })
    cy.get('.poster').should('be.visible')
    cy.get('.rating').contains('%')
    cy.get('.hover-title').contains('Money Plane')
  })

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


  // it('Should filter movie options with the search bar', () => {
  // });

  // it('Should display a message if no movies match search criteria', () => {
  // });

  it('Should be able to click on a mini-movie poster and be redirected to a new link', () => {
    cy.fixture('movie_data.json').then((movies) => {
      cy.intercept({
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      },
        {
          statusCode: 201,
          body: {
            movies: movies,
          }
        }
      )
    });
    // cy.get('.movie-card:first').click()
    // cy.url().should('include', '/movie/694919')
  });

  // describe('Movie Details Page', () => {

  //   beforeEach(() => {
  //     cy.visit('http://localhost:3000')
  //   })

  //   it('Should display a movie backdrop', () => {
  //     cy.fixture('movie_data.json').then((movies) => {
  //       cy.intercept(
  //         'GET',
  //         'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
  //       )
  //     })
  //     // cy.get('.movie-details-section').should('be.visible')
  //     cy.get('.backdrop')
  //     cy.get('.rating').contains('61')
  //     cy.get('.hover-title').contains('Money Plane')
  //   });

  //   //   it('Should display the movie\'s title, rating, genre, year, and run time,'() => {
  //   //   });

  //   //   it('Should display a picture in place of the movie', () => {
  //   //   });

  //   //   it('Should play the trailer when clicked on', () => {
  // });

});