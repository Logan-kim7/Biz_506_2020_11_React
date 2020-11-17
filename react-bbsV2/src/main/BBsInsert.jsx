import React, { Component } from "react";
import "../css/BBsInsert.css";


class BBsInsert extends Component {
  // main 에잇는 데이터를 insert에 전송해야하기때문에 main 과 똑같은 state변수를 만들어준다.
  state = {
    b_writer: "",
    b_subject: "",
    b_content: "",
    isUpdate: false,
    b_id: 0,
  };

  componentDidUpate(preProps, preState) {
     if (this.props.bbsData.b_id !== this.state.b_id) {
          this.setState({ ...this.props.bbsData });
    console.log("update");
    
    }
  }
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() { 
    const {state, handleOnChange} = this;
    const { b_writer, b_subject, b_content } = this;
    const{bbsSave} = this.props;
    return (
      <div className="input-form">
        <input
          name="b_writer"
          value={b_writer}
          onChange={handleOnChange}
          placeholder="작성자"
        />
        <input
          name="b_subject"
          value={b_subject}
          onChange={handleOnChange}
          placeholder="제목"
        />
        <input
          name="b_content"
          value={b_content}
          onChange={handleOnChange}
          placeholder="내용"
        />
        <button onClick={() => bbsSave(this.state)}>저장</button>
      </div>
    );
  }
}

export default BBsInsert;
