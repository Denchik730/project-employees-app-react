import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {
   
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}/>
        )
    })
   


    return (
        <ul className="app-list list-group">
            {/* <EmployeesListItem name="John C." salary={800}/>
            <EmployeesListItem name="Alex M." salary={3000}/>
            <EmployeesListItem name="Carl W." salary={5000}/> */}
            {elements}
        </ul>
    )
}

export default EmployeesList;