import { useState, useEffect } from "react";

interface Person {
  name: string;
  address: string;
  phone?: string;
}

export const MyNewComponent: React.FC = (): JSX.Element => {
  const [el, setEl] = useState<string>("Hello");

  const [cntr, setCntr] = useState<number>(0);

  const [person, setPerson] = useState<Person>({ name: "", address: "" });

  const [testArray, setTestArray] = useState<number[]>([]);

  const handleButtonClick = () => {
    setEl("Bye");
    setCntr(cntr + 1);
    setTestArray([...testArray, cntr]);
  };

  useEffect(()=>{
    // This function is executed when the component is initialized
    setTimeout(() => {
        setEl("How are you");
    }, 3000);
    return ()=>{
        // This function is excuted when the component is removed from display
        console.log("Component Removed")
    }
  }, [])

  useEffect(()=>{
    console.log("CNTR / Test Array CHANGED")
  }, [cntr, testArray])
  useEffect(()=>{
    console.log("Person CHANGED")
  }, [person])

  

  return (
    <div>
      <h1>{cntr}</h1>
      {el} <br />
      <button onClick={handleButtonClick}>Click Me</button> <br />
      <input
        placeholder="Name of person"
        onChange={(event) => {
          setPerson({
            ...person,
            name: event.target.value,
          });
        }}
      />
      <input
        placeholder="Address of person"
        onChange={(event) => {
          setPerson({
            ...person,
            address: event.target.value,
          });
        }}
      />
      <input
        placeholder="Phone of person"
        onChange={(event) => {
          setPerson({
            ...person,
            phone: event.target.value,
          });
        }}
      />
      <table>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Person Address</th>
            <th>Person Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{person.name}</td>
            <td>{person.address}</td>
            <td>{person.phone}</td>
          </tr>
        </tbody>
      </table>
      {testArray}
    </div>
  );
};
