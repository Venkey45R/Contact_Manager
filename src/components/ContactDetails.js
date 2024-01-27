import React from "react";
import { Link, useParams } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetails = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="bg-white border border-gray-300 p-4 sm:p-6 rounded-md shadow-md max-w-md mx-auto mt-8">
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 sm:w-32 sm:h-32 border border-gray-300 rounded-full flex items-center justify-center">
          <img src={user} alt="user" className="w-20 h-20 sm:w-28 sm:h-28 rounded-full" />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Contact Information</h2>
      <p className="text-sm text-gray-600 mb-2">
        <span className="font-semibold">Name:</span> {contact.name}
      </p>
      <p className="text-sm text-gray-600 mb-4">
        <span className="font-semibold">Email:</span> {contact.email}
      </p>
      <Link to="/">
        <button className="px-4 py-2 rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
          Back
        </button>
      </Link>
    </div>
  );
};

export default ContactDetails;