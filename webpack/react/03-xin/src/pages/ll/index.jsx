import React, {Component} from 'react';
import './index.less'
import leftImg from './../../assets/images/left.png'
import download from './../../assets/images/downline.png'

export default class LLPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      info: [
        {label: '交易时间', value: '2019-07-08 11:13'},
        {label: '交易卡号', value: '621226 1001047273807'},
        {label: '业务摘要', value: '他行汇入'},
        {label: '交易国家或地区简称', value: 'CHN'},
        {label: '交易金额', value: '3,850.00'},
        {label: '记账金额', value: '3,850.00'},
        {label: '记账币种', value: '人民币'},
        {label: '交易卡余额', value: '10,076.20'},
        {label: '对方账户', value: '6214 8312 1704 8047'},
        {label: '对方户名', value: '司强'},
      ],
    }
  }

  render () {
    return (
      <div className="ls">
        <div className="header">
          <img className="left-icon" src={leftImg}></img>
          <span>明细详情</span>
          <img className="down-icon" src={download} />
        </div>
        <div className="body">
          <div className="main-money">+3,850.00</div>
          {
            this.state.info.map((item, idx) => {
              const needLine = idx === 7;
              const cls = needLine ? 'line' : '';
              return <div key={item.label} className={`item ${cls}`}>
                <div className="label">{item.label}</div>
                <div className="value bold">{item.value}</div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}
