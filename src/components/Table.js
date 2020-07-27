import React, {useState} from 'react';
import '../css/table.css'


const Table = (props) => {
    const [column,setColumn] = useState(props.column)
    return (
        <div className="table_main">
            <div className="table_header">
                {column.map((value, index) => {
                    {console.log(value.col_1)}
                })}
            </div>
        </div>
    );
};

export default Table;