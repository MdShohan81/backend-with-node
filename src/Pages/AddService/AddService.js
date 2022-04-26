import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      console.log(data)
    const url = `http://localhost:4000/service`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => console.log(result))
    };
    return (
        <div className='container mt-5'>
            <div className="row">

                <div className="col-md-12 col-12">
                <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Enter Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-3' placeholder='Description' {...register("description", )} />
                    <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-3' placeholder='Photo Url' type="text" {...register("img")} />
                    <input className='btn btn-danger' value="Add Submit" type="submit" />
            </form>
                </div>
            </div>
            
        </div>
    );
};

export default AddService;