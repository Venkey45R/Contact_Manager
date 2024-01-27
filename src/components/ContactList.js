import React from "react";
import {Link} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import ContactCard from "./ContactCard";
const ContactList = (props) =>{
  const deleteContactHandler = (id) =>{
    props.getContactId(id);
  }  

  const renderContactList = props.contacts.map((contact) => {
      return (
        <ContactCard contact={contact} getContactId = {deleteContactHandler} key={contact.id} id={contact.id}/>
      );
  });
  return(
      <div className="pt-6">
          <div className="flex justify-center py-5">
            <Link to="/add">
              <button className="p-2 bg-blue-400 text-white rounded-lg text-xl hover:bg-blue-600">Add new contact</button>
            </Link>
          </div>
          {renderContactList}
      </div>
  );
};
export default ContactList;
