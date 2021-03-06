import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
   
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                // onToggleIncrease={() => onToggleIncrease(id)}
                // onToggleRise={() => onToggleRise(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                />
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