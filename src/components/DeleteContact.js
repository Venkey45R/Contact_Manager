import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const DeleteContact = ({ removeContactHandler }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const contactId = queryParams.get("contactId");

  const handleDelete = () => {
    if (contactId) {
      removeContactHandler(contactId);
      navigate("/");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md">
        <div className="text-2xl text-center font-bold mb-6">
          Are you sure you want to delete?
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={handleDelete}
          >
            Yes, Delete
          </button>
          <Link to="/" className="px-4 py-2 bg-gray-300 text-black rounded-md">
            No, Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteContact;
