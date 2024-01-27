import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
const AddContact = ({AddContactHandler})=>{
    const[name,setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const add = (e) => {
        e.preventDefault();
    
        if (name === "" || email === "") {
          alert('All fields are necessary');
          return;
        }

        AddContactHandler({name,email});
        setName('');
        setEmail('');
        navigate("/");
      };
    return(
        <div className="px-10 md:px-96 text-xl font-semibold text-black pt-5">
            <h2 className=" text-3xl font-bold text-center text-blue-700">Add Contact</h2>
            <div className="flex justify-center items-center py-10">
                <form className="p-8 md:w-3/4 bg-gray-300 border-4 border-black rounded-2xl" onSubmit={add}>
                <div className="pb-4">
                    <label className="block font-bold text-2xl pr-3 text-black text-center">Name:-</label>
                    <input className="pl-3 w-full h-10 mt-2 rounded-2xl" type="text" name="name" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="pb-4">
                    <label className="block font-bold text-2xl pr-3 text-black text-center">Email:-</label>
                    <input className="pl-3 w-full h-10 mt-2 rounded-2xl" type="text" name="email" placeholder="Enter Your Email id" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex justify-center pt-3">
                    <button className="px-4 py-2 rounded-xl bg-blue-400 text-white hover:bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default AddContact;