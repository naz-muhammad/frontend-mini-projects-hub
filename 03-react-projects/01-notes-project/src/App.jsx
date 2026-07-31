import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [detailInput, setDetailInput] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent empty notes
    if (inputValue.trim() === "" || detailInput.trim() === "") {
      return;
    }

   
    setTask((prevTask) => [
      ...prevTask,
      {
        inputValue,
        detailInput,
      },
    ]);

    setInputValue("");
    setDetailInput("");
  };

  const deleteHandler = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx , 1)
    setTask(copyTask)
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6">
      <div className="max-w-7xl mx-auto lg:flex gap-8">
        {/* Left Side */}
        <form onSubmit={handleSubmit} className="lg:w-1/2 flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Add Notes</h1>

          <input
            type="text"
            placeholder="Enter Notes Heading..."
            className="border border-neutral-600 bg-neutral-800 rounded-lg p-4 outline-none focus:border-blue-500"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <textarea
            rows="8"
            placeholder="Write detail here..."
            className="border border-neutral-600 bg-neutral-800 rounded-lg p-4 outline-none resize-none focus:border-blue-500"
            value={detailInput}
            onChange={(e) => setDetailInput(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 duration-200 rounded-lg py-4 text-xl font-semibold"
          >
            Add Note
          </button>
        </form>

        {/* Right Side */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h1 className="text-4xl font-bold mb-6">Recent Notes</h1>
          <div className="flex gap-4  overflow-x-auto scrollbar-none lg:flex-wrap ">
            {task.length === 0 ? (
              <div className="w-full border-2 rounded border-dashed border-neutral-50 ">
                <h2 className="text-center py-6">
                  Notes will be display here...
                </h2>
              </div>
            ) : (
              task.map((t, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] relative bg-cover rounded-2xl w-46 h-58 p-6 text-black"
                    >
                    <div>
                      <h3 className='text-lg font-bold leading-tight'>{t.inputValue}</h3>
                      <p className='mt-2 text-sm leading-5 text-gray-600'>{t.detailInput}</p>
                    </div>
                    <button className="cursor-pointer absolute bottom-0 right-0 pr-4 pb-4"
                     onClick={(idx) => {
                      deleteHandler(idx)
                     }}
                    >✕</button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
