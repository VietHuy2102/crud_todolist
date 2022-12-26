import TodoList from "./components/todos/TodoList";
import "./App.css";
import { useState } from "react";
import Search from "./components/Search/Search";

export const TodoApi = [
  {
    id: "1",
    name: "React",
  },
  {
    id: "2",
    name: "JavaScript",
  },
  {
    id: "3",
    name: "HTML",
  },
  {
    id: "4",
    name: "CSS",
  },
];

function App() {
  const [valueInput, setValueInput] = useState(""); //Chức năng Add
  const [todos, setTodos] = useState(TodoApi); // Do TodoApi thay đổi nên cần tạo 1 state để có thể set lại list. State ban đầu chính là TodoAPi

  const [query, setQuery] = useState(""); // Làm chức năng tìm kiếm, tạo 1 state lưu giá trị trong ô search
  const [searchValue, SetSearchValue] = useState(query); // tạo thêm 1 state để xử lý nút click Search

  const handleSearch = () => {
    SetSearchValue(query);
  }; // khi click thì mới lấy giá trị để chuyển dữ liệu

  const newTodoApi = todos.filter((TodoItem) =>
    TodoItem.name.toLocaleUpperCase().includes(searchValue.toLocaleUpperCase())
  ); // Lọc tất cả các TodoItem nào mà có name chứa giá trị searchVlaue đó

  const handleAdd = () => {
    // xử lý hàm add sản phẩm
    const newItem = {
      //gọi 1 item trong list có kiểu dữ liệu như todoApi
      id: Date.now(),
      name: valueInput,
    };
    setTodos(todos.concat(newItem)); // set lại list mảng đó
  };

  const handleDelete = (TodoApiItem) => {
    setTodos(todos.filter((TodoItem) => TodoItem.id !== TodoApiItem.id)); //lọc tất cả các TodoItem nào mà có id không trung với TodoApiItem.id
  };

  const handleUpdate =(index,edit)=>{
    setTodos(todos.map((TodoItem, itemIndex)=> {
      if (itemIndex !== index) {
        return TodoItem
      }
      return {
        ...TodoItem,
        name: edit
      }
    }))
  
  }

  return (
    <div className="bg-sky-300">
      <Search value={query} onChange={setQuery} onClick={handleSearch} />
      <TodoList
        TodoApi={newTodoApi}
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        onClick={handleAdd}
        onClickDelete={handleDelete}
        onUpdate ={handleUpdate}
      />
    </div>
  );
}

export default App;
