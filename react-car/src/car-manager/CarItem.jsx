import React, { Component } from 'react';
import Moment from "react-Moment";
import axios from "axios";


class CarItem extends Component {
    handleClick = (id) => {
        const { fetchCars } = this.props;
        if (window.confirm("정말 삭제합니다")) {
          axios
            .delete(`http://localhost:5000/api/delete/${id}`)
            .then((result) => {
              console.log(result);
              fetchCars();
            })
            .catch((err) => console.log(err));
        }
      };
      render() {
        const { index, car, handleUpdate } = this.props;
        return (
          <tr>
            <td>{index + 1}</td>
            <td> 
                
            </td>
            <td> 
                <Moment format="YYYY-MM-DD HH:mm:ss">{car.s_time}</Moment>
            </td>
            <td>
              <Moment format="YYYY-MM-DD HH:mm:ss">{car.e_time}</Moment>
            </td>
            <td
              onClick={() => handleUpdate(car.c_id)}
              style={{ cursor: "pointer" }}
            >
              {car.c_subject}
            </td>
            <td
              onClick={() => this.handleClick(car.c_id)}
              style={{ cursor: "pointer" }}
            >
              &times;
            </td>
          </tr>
        );
      }
    }
    




export default CarItem;

