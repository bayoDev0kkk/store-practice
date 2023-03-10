import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addFood} from "../store/MenuSlice";

const Admin: React.FC = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState<ArrayBuffer | null | string | any>("")

    const dispatch = useDispatch();
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        setPhoto(fileReader.result)
    }
    const handleChangePhoto = (e: React.ChangeEvent<any>) => {
        fileReader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newFood = {
            id: Date.now(),
            name,
            price: Number(price),
            photo: photo
        };
        dispatch(addFood(newFood));
        setName("");
        setPrice("");
    };

    return (
        <div className='container py-10'>

            <h1 className='text-center text-2x'>Create Product</h1>

            <form className='flex items-start justify-between px-20 py-16' onSubmit={handleSubmit}>

                <div className='flex flex-col items-start'>
                    <input type="file"
                           className='fileinput mb-6'
                           onChange={handleChangePhoto}
                    />

                    <input
                        type="text"
                        placeholder='title'
                        className='filetext border py-2 px-2 rounded w-[230px] mb-6'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder='price'
                        className='filetext border py-2 px-2 rounded w-[230px] mb-6'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <button
                        type="submit"
                        className='w-[80px] py-2 px-3 bg-orange-400 rounded text-xl text-white'
                    >Create
                    </button>
                </div>

                <div>
                    {
                        photo ?
                            <div>
                                <img src={photo} className='photo' alt=""/>
                            </div>
                            :
                            <div>
                                <h1>place for a photo</h1>
                            </div>
                    }
                </div>
            </form>


        </div>
    );
};

export default Admin;
