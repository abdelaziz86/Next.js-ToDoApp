"use client"; 
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { addTodo } from '@/api';
const AddTask = () => {
    const [showModal, setShowModal] = useState(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('');

    const handleSubmitNewToDo : FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            const newTask = await addTodo({
            id : "3",
            text: newTaskValue 
        });
            console.log("New task added:", newTask);
        } catch (error) {
            console.error("Error adding task:", error);
        }
 
        setNewTaskValue(""); 
        setShowModal(false);

    }
    

    return (<div>
        <button onClick={() => { setShowModal(true) }} className="btn btn-primary w-full">
            Add new Task
            <AiOutlinePlus className="ml-2" size={18} />
        </button>

        <Modal modalOpen={showModal} setShowModal={setShowModal}>
            <form onSubmit={handleSubmitNewToDo}>
                <h3 className='font-bold text-lg'>Add new task</h3>
                <div className='modal-action'>
                    <input
                        value={newTaskValue}
                        onChange={e => setNewTaskValue(e.target.value)}
                        type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <button type='submit' className='btn'>Submit</button>
            </form>
        </Modal>
    </div>); 
}

export default AddTask; 