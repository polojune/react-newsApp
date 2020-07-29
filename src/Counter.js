import React, { Component } from "react";

//클래스형 컴포넌트
class Counter extends Component {
  //생성자는 첫번째 파라미터로  props를 받는다.
  constructor(props) {
    super(props);
    console.log("Counter", "생성자 호출");
  }
  // 첫번째 : props 두번째 :state
  // static getDerivedStateFromProps(props,state){
  //    if(props !==state) {
  //         return {color: props.color }
  //     }

  // 이번에 넘어온 props 값
  // 리엑트 버추얼 박스가 (이전 값과 현재 값)을 비교해서
  //(이전 값과 현재 값을 비교) => 값을 다 비교해서 내가 대신해서 래퍼런스만 비교하도록 오버라이딩 함
  // 같으면 그림을 안그리고  false
  // 다르면 그림을 다시 그림 true

  // 호출시점은 최초 render시에는 실행 안되고 re rendering 시에 실행 된다.
  shouldComponentUpdate(nextProps, nextState) {
    // if(nextProps.data !== this.props.data){
    //     return false;
    // }else{
    //     return true;
    // }

    console.log("Counter", "shouldComponentUpdate 호출됨");
    return true;
  }

  //render가 종료된 뒤 호출 됨.ㅡ> 비동기 처리시 필요
  //최초 render 시에만 호출됨. state 값 변경시에는 호출 되지 않음
  componentDidMount() {
    console.log("Counter", "componentDidMount 호출됨");
  }

  //render는 그림을 그려주는 함수 = setState가 호출되거나 ,최초에 객체 생성시
  //render 내부에서는 state와 props에 접근 할 수 있음
  //return 내부는 JSX 문법이 들어감
  render() {
    // const temp1 = this.state;
    // const temp2 = this.props;
    console.log(this.props.number);
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.props.number}</div>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
      </div>
    );
  }
}

export default Counter;
