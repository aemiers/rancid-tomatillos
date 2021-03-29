describe('Feedback Loop', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should display a main title', () => {
    cy.contains('Feedback Loop').get('form').contains('Please Sign In');
  });

  it('Should display a search bar in the header', () => {
  });

  it('Should display an error message if the movies cannot be loaded', () => {
  });

  it('Should filter movie options with the search bar', () => {
  });

  it('Should display a message if no movies match search criteria', () => {
  });

  it('Should be able to click on a mini-movie poster and be redirected to a new link', () => {
  });

});

describe('Feedback Loop', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should display a movie backdrop', () => {
  });

  it('Should display the movie\'s title, rating, genre, year, and run time,'() => {
  });

  it('Should display a picture in place of the movie', () => {
  });

  it('Should play the trailer when clicked on', () => {
  });

});