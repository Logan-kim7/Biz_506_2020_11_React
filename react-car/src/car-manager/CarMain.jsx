import React, { Component } from 'react';
import CarInsert from "./CarInsert";
import CarList from "./CarList";

const CAR_INSERT_URL = "http://localhost:5000/api/insert";
const CAR_UPDATE_URL = "http://localhost:5000/api/update";
const CAR_FETCH_URL = "http://localhost:5000/api/bbsList";
const CAR_FIND_BY_ID = "http://localhost:5000/api/view/";


class CarMain extends Component {
    timer= "";
    state = {
        state1: "",
        state2: "",
        isFetch: false,
        carList: [
            {id:0,stime:2020-11-17, etime:2020-11-19, nowkm: 180000, cost: 50000, palce: "광주"},
            {id:1,stime:2020-11-17, etime:2020-11-19, nowkm: 180000, cost:50000, palce: "부산"},
            {id:2,stime:2020-11-17, etime:2020-11-19, nowkm: 180000, cost:50000, palce: "서울"},
            {id:3,stime:2020-11-17, etime:2020-11-19, nowkm: 180000, cost:50000, palce: "대구"},
        ],
        carData: {
            isUpdate: false,
            c_id: 0,
            s_time: "",
            e_time: "",
            nowkm: "",
            cost: "",
            palce: "",
        },
    };

   componentDidMount() {
       this.fetchCarList();

       this.timer = setInterval(() => this.fetchCarList(), 5000);
   }

   componentWillUnmount() {
    this.timer = null;
  }

  fetchCarList= () => {
      this.setState({ ...this.state, isFetch: true});
      fetch(CAR_FETCH_URL)
      .then((res)=>{
          return res.json();
      })
      .then((result) => {
        this.setState({carData: {...result, isUpdate:true} });

      });

  };
  render() {
    const { carList, state1, state2 } = this.state;
    return (
      <div>
        <CarInsert
          insertURL={CAR_INSERT_URL}
          updateURL={CAR_UPDATE_URL}
          carData={this.state.carData}
        />
        <p>{this.state.isFetch ? "데이터가져오는중..." : "완료"}</p>
        <CarList
          carList={carList}
          fetchcars={this.fetchCarList}
          handleUpdate={this.handleUpdate}
          state1={state1}
          state2={state2}
        />
      </div>
    );
  }
}







export default CarMain;
