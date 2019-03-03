import React, { Component } from 'react';
import api from '@/api/detail'
class Com extends Component {

  constructor (props) {
    super(props)
    this.state = {
      title: '',
      img: '',
      alt: '',
      year: '',
      rating: 8.5,
      casts: [],
      directors: []
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id
    console.log(id)
    api.requestData(id).then(data => {
      console.log(data)
      this.setState({
        title: data[0].title,
        img: data[0].images.small,
        alt: data[0].alt,
        year: data[0].year,
        rating: data[0].rating.average,
        casts: data[0].casts,
        directors: data[0].directors
      })
    })
  }
  render () {
    return (
      <div className = "box">
        <header className = "header">头部</header>
        <div className = "content">
          <img src = { this.state.img } alt = { this.state.alt } />
          <h1>{ this.state.title }</h1>
        </div>
        <footer className = "footer">
          详情底部
        </footer>
      </div>
    )
  }

}

export default Com
