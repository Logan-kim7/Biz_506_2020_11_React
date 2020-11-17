import React, { Component } from 'react';

import axios from "axios";
class CarInsert extends Component {
    state = {
        s_time: "",
        e_time: "",
        nowkm: "",
        cost: "",
        place: "",
        c_id: 0,
    };

    componentDidMount() {
        this.setState({...this.props.carData});
        console.log("update");


    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    carSave = () => {
        const { insertURL, updateURL} = this.props;
        const url = this.state.isUpdate ? updateURL : insertURL;
        axios
        .post(url, {
            c_id: this.state.c_id,
            s_time: this.state.s_time,
            e_time: this.state.e_time,
            nowkm:  this.state.nowkm,
            cost: this.state.cost,
            place: this.state.place,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    } ;

    render() {
        const {s_time, e_time, nowkm, cost, place} = this.state
        return (
            <div className="input-form">
                <input name="s_time" value={s_time} onChange={this.handleOnChange} placeholder="시작일시"/>
                <input name="e_time" value={e_time} onChange={this.handleOnChange} placeholder="종료일시"/>
                <input name="nowkm" value={nowkm} onChange={this.handleOnChange} placeholder="현재거리"/>
                <input name="cost" value={cost} onChange={this.handleOnChange} placeholder="소요비용"/>
                <input name="place" value={place} onChange={this.handleOnChange} placeholder="장소"/>
            </div>
        );
    }
}


export default CarInsert;