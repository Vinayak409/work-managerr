import React from "react";

export const metadata = {
  title: "Add Task : Work Manager",
};

const AddTask = () => {
  return (
    <div className="border-4 border-yellow-500 grid grid-cols-12 justify-center w-screen">
      <div className="border-2 border-red-700 col-span-6 col-start-4 p-3 m-3 shadow-gray-200 shadow">
        <h1 className="text-3xl">Add your task here !!</h1>
        <form action="#!">
          {/* task title  */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-md bg-gray-800 focus:ring-gray-500 border border-gray-800"
              id="task_title"
            />
          </div>

          {/* task content  */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-md bg-gray-800 focus:ring-gray-500 border border-gray-800"
              id="task_content"
              rows={5}
            />
          </div>

          {/* task status */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              name=""
              id="task_status"
              className="w-full p-3 rounded-md bg-gray-800 focus:ring-gray-500 border border-gray-800"
            >
              <option value="none" selected disabled>
                --Select Status--
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* button actions  */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Add Todo
            </button>

            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
