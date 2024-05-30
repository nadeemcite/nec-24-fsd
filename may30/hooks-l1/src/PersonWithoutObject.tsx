import { useState } from "react"

export const PersonWithoutObject: React.FC = ():JSX.Element =>{

    const [name, setName] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [phone, setPhone] = useState<string>("")

    const sampleData = [
        ["A", "a1", "67664"],
        ["B", "b1", "77885"],
    ]

    const [persons, setPersons] = useState<string[][]>(sampleData)

    
    const handleSubmit = () =>{
        const newArr = [name, address, phone]
        setPersons([...persons, newArr])
        setAddress("")
        setPhone("")
        setName("")
    }
    

    return <div>
        <div>
            <input placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input placeholder="Address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
            <input placeholder="Phone" value={phone}  onChange={(e)=>{setPhone(e.target.value)}}/> <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {persons.map((item, index) => (
                    <tr key={index}>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>{item[2]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

}