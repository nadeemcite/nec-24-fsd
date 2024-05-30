import { useState } from "react"

interface Person{
    name: string
    address: string
    phone?: string
}

enum ComponentState {
    CREATION,
    EDIT,
}

export const PersonWithObject: React.FC = ():JSX.Element =>{

    const [person, setPerson] = useState<Person>({
        name: "",
        address: ""
    })

    const sampleData: Person[] = [
        // {name: "A", address: "a1", phone:"67664"},
        // {name: "B", address: "b1", phone:"77885"},
    ]

    const [persons, setPersons] = useState<Person[]>(sampleData)

    const [componentState, setComponentState] = useState<ComponentState>(ComponentState.CREATION)

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleSubmit = () =>{
        // logic for editing
        if (componentState === ComponentState.CREATION){
            setPersons([...persons, person])
        }else {
            persons.splice(currentIndex, 1, person)
            setPersons([...persons])
        }
        setPerson({
            name: '',
            address: '',
            phone: ''
        })
        setComponentState(ComponentState.CREATION)
    }
    
    const handleDelete = (index: number) =>{
        persons.splice(index, 1)
        setPersons([...persons])
    }

    const handleEdit = (index: number) => {
        setPerson({...persons[index]})
        setComponentState(ComponentState.EDIT)
        setCurrentIndex(index)
    }

    return <div>
        <div>
            <input placeholder="Name" value={person.name} onChange={(e)=>{setPerson({...person, name:e.target.value})}}/>
            <input placeholder="Address" value={person.address} onChange={(e)=>{setPerson({...person, address:e.target.value})}}/>
            <input placeholder="Phone" value={person.phone}  onChange={(e)=>{setPerson({...person, phone:e.target.value})}}/> <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        {persons.length ? (
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {persons.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td><button onClick={()=>{handleDelete(index)}}>Delete</button></td>
                        <td><button onClick={()=>{handleEdit(index)}}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        ) : (
            <h2>No Persons Found</h2>
        )}
        
    </div>

}