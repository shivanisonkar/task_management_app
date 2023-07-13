import AddTodo from "@/components/add-todo";
import {Todos} from "@/components/todos";
import Navbar from "@/components/navbar";
import "./globals.css";
import { RiTodoLine } from "react-icons/ri";
// thapa technical SUBSCRIBE
const Page = () => {
    return (
      <main>
          <h2><RiTodoLine className="icons" /> TASK MANAGEMENT APP <RiTodoLine className="icons" /> </h2>
          <h3>© Made with 💖 by Shivani Sonkar</h3>
          <Navbar />
          <AddTodo />
          <Todos />
      </main>
    );
};

export default Page;
