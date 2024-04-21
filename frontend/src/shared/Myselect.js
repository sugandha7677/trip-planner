import React from 'react';
import Select from 'react-select';


const customStyles = {
    option: (provided, state) => ({
        ...provided,
        fontSize: 14,
        color: 'blue',
        backgroundColor: state.isSelected ? 'lightblue' : 'white',
    })
}

const Myselect = () => {
    <Select 
        options = {[1,2,3,4]}
        placeholder = "select smthin"
        clearable = {false}
        styles = {customStyles}
        />
}


export default Myselect;