import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  TodoApi,
  value,
  onChange,
  onClick,
  onClickDelete,
  onUpdate
}) {
  return (
    <div className="m-[50px]">
      <div className="flex justify-center items-center m-9">
        <span>Chức năng Add thêm sản phẩm: </span>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l m-4"
          onClick={onClick}
        >
          Add
        </button>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="block w-1/2 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <hr />
      <div>
        <div className="flex justify-start items-center p-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <span className="text-xl p-5">Danh sách TodoList : </span>
        </div>
        {TodoApi.map((TodoApiItem,index) => (
          <TodoItem
            name={TodoApiItem.name}
            key={TodoApiItem.id}
            onClickDelete={() => onClickDelete(TodoApiItem)}//xóa theo TodoApiItem
            onsubmit={(edit) => onUpdate(index,edit)} // Để Edit được thì cần vị trí index mình muốn sửa và nội dung muốn sửa là Edit
          /> 
        ))}
      </div>
    </div>
  );
}
