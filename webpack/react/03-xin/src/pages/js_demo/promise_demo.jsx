import React, {Component} from 'react';

export default class PromisePage extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    this.awaitTest();
  }

  awaitTest = async () => {
    console.info(1)
    await this.sleep(1000)
    console.info(2)
  }

  sleep = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }

  testCatch = () => {
    try {
      new Promise((resolve, reject) => {
        throw new Error('err----');
      }).catch(err => {
        console.info('reject', err);
      })
    } catch (e) {
      console.info('this is error', e);
    }
  }

  testProCon = () => {
    console.info('0');
    new Promise((resole, reject) => {
      console.info(6);
      resole(2)
      new Promise((resolve, reject) => {
        console.info(3)
        resolve(4)
        console.info(5)
      }).then(code => {
        console.info(code);
      }).catch(err => {
        console.info(err);
      })
      console.info(7);
      Promise.resolve().then(() => {
        console.info(1);
      })
      console.info(8);
    }).then(code => {
      console.info('then', code)
      return Promise.reject(9)
    }).catch(err => {
      console.info('err', err)
    })

  }

  testCon1 = () => {
    console.log('start')
    new Promise(resolve=>{
      console.log('Step 1')
      setTimeout(()=>{
        resolve(100)
      },1000)
    })
      .then(value=>{
        return new Promise(resolve=>{
          console.log('Step 1-1');
          setTimeout(()=>{
            resolve(110)
          },1000)
        })
          .then(value=>{
            console.log('Step 1-2')
            return value;
          })
          .then(value=>{
            console.log('Step 1-3')
            return value;
          })
      })
      .then(value=> {
        console.log(value)
        console.log('Step 2')
      })
  }

  render () {
    return <div>123</div>;
  }
}
