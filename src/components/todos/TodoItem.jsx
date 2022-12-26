import React, { useState } from "react";

export default function TodoItem({ name, onClickDelete,onsubmit }) {
  const [isEdit, setIsEdit] = useState(false); // state lưu trữ xem trạng thái có đang Edit hay không
  const [edit, setEdit] = useState(name);
  
  const onOk =()=>{
    onsubmit(edit)
    setIsEdit(false)
  }

  return (
    <div className="flex justify-center items-center gap-4">
      {!isEdit ? (
        <h1 className="text-xl m-4 ">{name}</h1>
      ) : (
        <input
          type={"text"}
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
        />
      )}

      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClickDelete}
      >
        Delete
      </button>
      {isEdit ? (
        <>
          <button className="bg-green-500 hover:bg-green-700 text-white font-thin py-2 px-4 rounded"
          onClick={onOk}
          >
            Ok
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-thin py-2 px-4 rounded"
            onClick={()=>setIsEdit(false)}
          >
            Cancle
          </button>
        </>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsEdit(!isEdit)}
        >
          Edit
        </button>
      )}
    </div>
  );
}
