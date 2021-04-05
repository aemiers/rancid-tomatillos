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

  it('Should be able to view the drop down menu to filter movies', () => {
    cy
      .get('.filter-icon').click()
      .get('.drop-down__menu').should('be.visible')
      .get('.drop-down__choice').should('be.visible')
      .should(($dropChoice) => {
        expect($dropChoice).to.have.length(8)
        expect($dropChoice, 'second').to.contain('30 - 39%')
        expect($dropChoice, 'third').to.contain('40 - 49%')
        expect($dropChoice, 'fourth').to.contain('50 - 59%')
        expect($dropChoice, 'fifth').to.contain('60 - 69%')
        expect($dropChoice, 'sixth').to.contain('70 - 79%')
        expect($dropChoice, 'seventh').to.contain('80 - 89%')
        expect($dropChoice, 'eighth').to.contain('90 - 100%')
        expect($dropChoice, 'first').to.contain('0 - 29%')
      })
  });

  // it('Should be able to filter movies based on rating', () => {
  //   cy
  //     .get('.filter-icon').click()
  //     .get('.drop-down__choice').eq(5).click()
  //     .get('.movie-card')
  //     .should(($movieCard) => {
  //       expect($movieCard).to.have.length(1)
  //       // expect($movieCard).to.include('Rogue')
  //     })
  // });

  // it('Should display a message if no movies match search criteria', () => {
  //   cy
  //     .get('input').type('avaa')
  //     .get('.movie-card')
  //     .should(($movieCard) => {
  //       expect($movieCard).to.have.length(0)
  //       expect($movieCard).to.contain('Insert proper error message here')
  //     })
  // });

  it('Should be able to click on a mini-movie poster and be redirected to a new link', () => {
    cy
      .get('.movie-card:first').contains('Money').click()
      .url().should('include', '694919')
  });
});

describe('Movie Details Page', () => {
  beforeEach(() => {
    cy
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', { fixture: 'trailer_data.json' })
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'movie_details.json' })
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie_data.json' })
      .visit('http://localhost:3000')
      .get('.movie-card:first').click()
  })

  it('Should display the movie\'s title, rating, genre, year, and run time', () => {
    cy
      .url().should('include', '694919')
      .get('.movie-words__title').contains('Money Plane')
      .get('.backdrop-container').should('be.visible')
      .get('iframe').should('be.visible')
      .get('.tomatillo').should('have.attr', 'src')
      .get('.movie-words__details').contains('61% · Action · 2020 · 1h 22m')
      .get('.overview').contains(`A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.`)
  });

  it('Should allow users to click the logo to return to the home page', () => {
    cy.get('.logo').click();
    cy.url().should('include', 'http://localhost:3000')
  })

  it('should go back or forward in the browser\'s history', () => {
    cy
      .url('/694919').should('include', '694919')
      .go('back')
      .url('/').should('not.include', '694919')
      .go('forward')
      .url('/694919').should('include', '694919')
      .go(-1)
      .url('/').should('not.include', '694919')
      .go(1)
      .url('/694919').should('include', '694919')
  })
})

describe('Error testing', () => {
  it('Should show an error message when the list of movies does not load', () => {
    cy
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', [])
      .visit('http://localhost:3000')
      .get('p').contains('There was a loading error. Please reload the page and try again.')
  })

  it('Should show an error message when a movie detail page does not load', () => {
    cy
      .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', [])
      .visit('http://localhost:3000/694919')
      .get('[data-cy=error]').contains('There was an error loading this movie.')
  })

})

