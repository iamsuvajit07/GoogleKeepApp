
import Header from './Header';
import Footer from './Footer';
import CreateNode from './CreateNode';
import Note from './Note';
import { useState } from 'react';


const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    //alert("I am Clicked")
    setAddItem((prevData)=>{
      return [...prevData, note];
    });
  };

  const onDelete= (id) =>{
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) =>{
          return indx !== id;
      })
    );
  };


  return (
    <>
      <Header />
      <CreateNode passNote={addNote} />

    {addItem.map((val, index)=>{
      return (
        <Note 
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
      );
    })}

      <Footer />
    </>
  );
}

export default App;
