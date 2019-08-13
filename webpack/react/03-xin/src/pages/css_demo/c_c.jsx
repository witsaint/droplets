import React, {Component} from 'react';
import './c_c.less'

export default class CCPage extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    // const contents = Array.from(new Array(100)).map(() => <div style={{height: '200px'}}>dwda</div>)
    return (
      <div className="c_c_base">
        <div className="c_c_content"></div>
      </div>
    )
  }
}
