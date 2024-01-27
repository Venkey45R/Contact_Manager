import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import user from "../images/user.jpg";

const ContactCard = ({ id, contact, getContactId }) => {
  const { name, email } = contact;
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    navigate(`/delete?contactId=${id}`);
  };

  return (
    <div className="relative p-2 md:pl-10 text-center w-full">
      <div className="flex p-2 font-bold text-xl justify-stretch border-2 border-red-400 rounded-lg">
        <div className="col-span-1">
          <img src={user} alt="user" className="ml-10 mr-10 w-20 h-20 md:w-24 md:h-24 rounded-full" />
        </div>
        <div className="">        
        <Link to={{ pathname: `/contact/${id}`, state: { contact: contact } }} className="col-span-2 md:col-span-1">
          <div className="pr-10 pt-2 flex">
            <p className="font-bold text-xl">Name: {name}</p>
          </div>
          <div className="pt-5 pr-4 md:pr-10">
            <p className="font-bold text-xl">Email: {email}</p>
          </div>
        </Link>
        </div>
        <div className="col-span-3 md:col-span-1 absolute top-14 right-24">
          <button onClick={handleDeleteClick}>
            <i className="fa-solid fa-trash text-red-400 hover:cursor-pointer text-4xl hover:text-red-600"></i>
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default ContactCard;
