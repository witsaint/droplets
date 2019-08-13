import React, {Component} from 'react';

const testCLick = function () {
  const { search, hash } = window.location;
  console.info(search, hash);
}

const splitParams1 = (search) => {
  new URLSearchParams(search);
}

export default class ThisDemoPage extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  componentDidMount () {

  }

  testCon = () => {
    const a = 0;
    console.info(a);
    (function a() {
      console.info(a);
      var a = 1;
      console.info('aaa',a)
      console.info('bbb')
    })()
    b = 1;
    console.info(a)
  }

  render () {
    return (
      <div>
        <div id="test" >dwadfwa</div>
      </div>
    )
  }
}
