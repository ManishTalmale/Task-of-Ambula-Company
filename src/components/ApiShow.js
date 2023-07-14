import React from "react";

const ApiShow = (props) => {
    const { Title, Year, imdbID } = props
    return (
        <div className="container">
            <table className="table table-striped mt-2">
                <tr className="row">
                    <td className='col-lg-2'><h5 style={{ textAlign: "center", borderRight: "1px solid black", borderLeft: "1px solid black" }}>{imdbID}</h5></td>
                    <td className='col-lg-5'><h5 style={{ textAlign: "center", borderRight: "1px solid black" }}>{Title}</h5></td>
                    <td className='col-lg-5'><h5 style={{ textAlign: "center", borderRight: "1px solid black" }}>{Year}</h5></td>
                    <hr />
                </tr>
            </table>
        </div>
    )
}
export default ApiShow;