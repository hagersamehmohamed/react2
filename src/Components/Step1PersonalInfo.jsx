import { useState } from "react";

const Step1PersonalInfo = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    isEmployee: false,
    gender: "male",
    country: "egypt",
    desc: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-pink-50/50 flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6 max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-pink-100">
        <div className="flex flex-col gap-2">
          <h2 className="text-pink-900 text-3xl font-bold">
            Personal info
          </h2>
          <p className="text-slate-500 text-sm">
            Please provide your personal details below.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {/* Name */}
          <div className="flex flex-col gap-1 w-full">
            <label className="text-pink-900 font-semibold text-sm">Name</label>
            <input
              onChange={(e) => {
                setData((prev) => ({ ...prev, name: e.target.value }));
              }}
              value={data.name}
              className="outline-none border-2 border-pink-200 focus:border-pink-500 p-2.5 rounded-lg transition bg-pink-50/30"
              type="text"
              placeholder="e.g. Stephen King"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col gap-1 w-full">
            <label className="text-pink-900 font-semibold text-sm">Age</label>
            <input
              onChange={(e) => {
                setData((prev) => ({ ...prev, age: e.target.value }));
              }}
              value={data.age}
              className="outline-none border-2 border-pink-200 focus:border-pink-500 p-2.5 rounded-lg transition bg-pink-50/30"
              type="number"
              placeholder="30"
            />
          </div>

          {/* Employee Checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="employee"
              onChange={() => {
                setData((prev) => ({ ...prev, isEmployee: !prev.isEmployee }));
              }}
              checked={data.isEmployee}
              className="w-4 h-4 text-pink-600 accent-pink-600 cursor-pointer rounded"
            />
            <label htmlFor="employee" className="text-pink-900 font-semibold text-sm cursor-pointer">Employee</label>
          </div>
        </div>

        {/* Gender Radio Buttons */}
        <div className="flex items-center gap-6 pt-1">
          <label className="flex items-center gap-2 cursor-pointer font-semibold text-sm text-pink-900">
            <input
              type="radio"
              name="gender"
              onChange={() => {
                setData((prev) => ({ ...prev, gender: "male" }));
              }}
              checked={data.gender === "male"}
              className="accent-pink-600 cursor-pointer"
            />
            Male
          </label>
          <label className="flex items-center gap-2 cursor-pointer font-semibold text-sm text-pink-900">
            <input
              type="radio"
              name="gender"
              onChange={() => {
                setData((prev) => ({ ...prev, gender: "female" }));
              }}
              checked={data.gender === "female"}
              className="accent-pink-600 cursor-pointer"
            />
            Female
          </label>
        </div>

        {/* Country Select */}
        <div className="w-full flex flex-col gap-1">
          <label className="text-pink-900 font-semibold text-sm">Country</label>
          <select 
            value={data.country}
            onChange={(e) => {
              setData((prev) => ({ ...prev, country: e.target.value }))
            }}
            className="w-full border-2 border-pink-200 focus:border-pink-500 p-2.5 rounded-lg outline-none bg-white cursor-pointer transition"
          >
            <option value="egypt">Egypt</option>
            <option value="italy">Italy</option>
          </select>
        </div>

        {/* Description Textarea */}
        <div className="w-full flex flex-col gap-1">
          <label className="text-pink-900 font-semibold text-sm">Description</label>
          <textarea 
            value={data.desc}
            onChange={(e) => {
              setData((prev) => ({ ...prev, desc: e.target.value }))
            }}
            className="w-full border-2 border-pink-200 focus:border-pink-500 p-2.5 rounded-lg outline-none bg-pink-50/30 transition"
            placeholder="Write something..."
            rows="3"
          />
        </div>

        <button className="bg-pink-600 hover:bg-pink-700 text-white py-2.5 rounded-lg font-bold text-base cursor-pointer px-8 self-end shadow-md transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Step1PersonalInfo;