import React, { Component } from 'react';
import CarItem from "./CarItem";

class CarList extends Component {
    render() {
        const {carList, fetchCars, handleUpdate} =this.props;
        const CarItemList = carList.map((car, index) => (
            <CarItem
            key={c_id}
            index={index}
            car={car}
            fetchCars={fetchCars}
            handleUpdate={handleUpdate}
        />
        ));
        return (
            <table className="car-list">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>구분</th>
                        <th>시작일시</th>
                        <th>종료일시</th>
                        <th>현재거리</th>
                        <th>소요비용</th>
                        <th>장소</th>
                        <th>&hearts;</th>
                    </tr>
                </thead>
                <tbody>{CarItemList}</tbody>
            </table>
        );
    }
}


export default CarList;
