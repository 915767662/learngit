import React, { Component } from 'react'
import List from '@/components/home/List'
import { Carousel } from 'antd-mobile';
import api from '@/api/home'
class Com extends Component {

  constructor (props) {
    super(props);
    this.state = {
      list: [],
      bannerdata: [],
      imgHeight: 100
    }
  }

  componentDidMount () {
    api.requestData().then(data => {
      // console.log(data)
      this.setState({
        list: data
      })
    })
    api.requestBannerData().then(data => {
      this.setState({
        bannerdata: data
      })
    })
  }

  render () {
    // console.log(this)
    return (
      <div className = "content">
        <Carousel
            autoplay={ true }
            infinite
            dots = { true }
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.bannerdata.map((item, index) => (
              <a
                key={index}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`https://www.daxunxun.com${item}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        <List list = { this.state.list }/>
      </div>
    )
  }

}

export default Com
