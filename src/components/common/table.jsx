import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({columns, sortColumn, data, onSort}) => {
    return (
        <table className="table">
            <TableHeader columns = {columns} sortColumn={sortColumn} onSort={onSort}/>
            <TableBody columns={columns} data={data}/>
        </table>
    );
}

/*const Table = (props) => {
    const {columns, sortColumn, data, onSort} = props;
    return (
        <table className="table">
            <TableHeader columns = {columns} sortColumn={sortColumn} onSort={onSort}/>
            <TableBody columns={columns} data={data}/>
        </table>
    );
}*/
export default Table;