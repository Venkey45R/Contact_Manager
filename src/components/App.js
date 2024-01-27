import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import DeleteContact from "./DeleteContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);
      setContacts(parsedContacts);
    }
  }, []);

  const AddContactHandler = (contact) => {
    const newContacts = [...contacts, { id: uuidv4(), ...contact }];
    setContacts(newContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  return (
    <div className="w-full min-h-screen bg-zinc-300">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact AddContactHandler={AddContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetails contacts={contacts} />} />
          <Route path="/delete" element={<DeleteContact removeContactHandler={removeContactHandler} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
