import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";

const schema = yup.object().shape({
  title: yup.string().required("عنوان الزامی میباشد"),
});

interface AddTodoForm {
  title: string;
}

const AddTodo = () => {
  const { addTodo } = useContext<TodoContextType>(TodoContext);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AddTodoForm, e: any) => {
    addTodo(data.title);
    e.target.reset();
    window.location.href = "/";
  };

  return (
    <div className="mx-auto w-[700px] rounded-lg flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-lg bg-gray-200 w-80 p-4"
      >
        <h4 className="text-xl font-bold">فرم افزودن کار</h4>
        <div className="flex flex-col mt-4">
          <input
            placeholder="عنوان..."
            type="text"
            id="title"
            className="p-2 rounded-md"
            {...register("title")}
          />
          <span>
            <small>
              <strong className="text-red-400 font-bold">
                {errors.title?.message}
              </strong>
            </small>
          </span>
        </div>
        <div className="w-full mt-4 flex gap-1">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-red-300 hover:bg-red-500 text-white block w-full font-bold border rounded-lg text-lg px-3 py-2"
          >
            کنسل
          </button>
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-800 text-white block w-full font-bold border rounded-lg text-lg px-3 py-2"
          >
            افزودن
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
