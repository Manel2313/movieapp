import React, { Component } from 'react';
import './App.css'
import Card from './components/card.js'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      movies: [{
        name: 'The little mermaid',
        img: 'https://www.femalefirst.co.uk/image-library/port/620/t/the-little-mermaid-movie-poster.jpg',
        review: '5'
      },
      {
        name: 'Mirai',
        img: 'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/af/56deceddfd61d64fbc46a7748d09c31d_500x735.jpg?t=1541837931',
        review: '3'
      },
      {
        name: 'Epic',
        img: 'http://images6.fanpop.com/image/photos/36900000/Epic-movie-poster-disney-epic-36971177-937-1500.jpg',
        review: '5'
      },
      {
        name: 'Fireworks',
        img: 'https://i2.wp.com/www.animephproject.com/wp-content/uploads/2017/12/FB_IMG_1513080391258.jpg?fit=660%2C960&ssl=1',
        review: '2'
      },
      {
        name: 'Next Gen',
        img: 'https://m.media-amazon.com/images/M/MV5BMTU0MjAwMDkxNV5BMl5BanBnXkFtZTgwMTA4ODIxNjM@._V1_.jpg',
        review: '1'
      },
      {
        name: 'Your name',
        img: 'https://ih0.redbubble.net/image.505815507.9008/flat,550x550,075,f.u4.jpg',
        review: '4'
      }],
      name: '',
      img: '',
      review: null,
      class: 'none',
      search: '',
      star: 5,
      classStar1:'far fa-star str',
      classStar2:'far fa-star str',
      classStar3:'far fa-star str',
      classStar4:'far fa-star str',
      classStar5:'far fa-star str',
    })
  }

  addName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  addImage = (e) => {
    this.setState({
      img: e.target.value
    })
  }

  search = (e) => {
    this.setState({
      search: e.target.value
    })
  }


  remove = () => {
    this.setState({
      class: 'none'
    })
  }

  review = (e) => {
    this.setState({
      review: e.target.value
    })
  }

  add = () => {
    this.setState({
      movies: [...this.state.movies, { name: this.state.name, img: this.state.img, review: this.state.review }]
    })
  }

  addplus = () => {
    this.setState({
      class: 'addmovie'
    })
  }


  searchStar1 = (e) => {
    this.setState ({
      star : 1,
      classStar1 : 'far fa-star star-click'
    })
  }
  searchStar2 = (e) => {
    this.setState ({
      star : 2,
      classStar2 : 'far fa-star star-click'
    })
  }
  searchStar3 = (e) => {
    this.setState ({
      star : 3,
      classStar3 : 'far fa-star star-click'
    })
  }
  searchStar4 = (e) => {
    this.setState ({
      star : 4,
      classStar4 : 'far fa-star star-click'
    })
  }
  searchStar5 = (e) => {
    this.setState ({
      star : 5,
      classStar5 : 'far fa-star star-click'
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="searchBar">
            <input onChange={this.search} type="text" className="search" />
            <span className="search-btn">Search</span>
          </div>
          <p>
            <i className={this.state.classStar1} onClick={this.searchStar1}></i>
            <i className={this.state.classStar2} onClick={this.searchStar2}></i>
            <i className={this.state.classStar3} onClick={this.searchStar3}></i>
            <i className={this.state.classStar4} onClick={this.searchStar4}></i>
            <i className={this.state.classStar5} onClick={this.searchStar5}></i>
          </p>
        </header>
        <main>
          <Card tabMovies={this.state.movies} searchValue={this.state.search} searchStar={this.state.star} />
          <div onClick={this.addplus} className="card-add">
            <a href="#top">+</a>
          </div>
          <div id="top" className={this.state.class}>
            <input type="text" onChange={this.addName} placeholder="Name of the movie" />
            <input type="text" onChange={this.addImage} placeholder="Brochure URL" />
            <input type="text" onChange={this.review} placeholder="How much stars?" />
            <span className="annuler" onClick={this.remove}>X</span>
            <span className="add-m" onClick={this.add}>ADD MOVIE</span>
          </div>
        </main>
      </div>
    );
  }
}

export default App;