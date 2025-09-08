"use client";
import { useState } from "react";
import Model from "./Model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function FormPage() {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    age: 0,
    isEmployee: false,
    salary: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState([]);

  function shAlert(event) {
    event.preventDefault();
    const validationErrors = [];

    if (!form.name) validationErrors.push("Name is required.");
    if (
      !form.phoneNumber ||
      form.phoneNumber.length < 8 ||
      form.phoneNumber.length > 10
    )
      validationErrors.push("Phone number must be between 8-10 digits.");
    if (form.age < 18 || form.age > 55)
      validationErrors.push("Age must be between 18 and 55.");
    if (!form.salary) validationErrors.push("Salary must be selected.");

    if (validationErrors.length) {
      setErrors(validationErrors);
    } else {
      setErrors([]);
      setShowAlert(true);
    }
  }

  const formValidation =
    !form.name || !form.phoneNumber || !form.age || !form.salary;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            User Registration
          </h1>
          <p className="text-gray-600">Please fill out the form below</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-3xl text-indigo-600"
                />
              </div>
            </div>

            {errors.length > 0 && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      There were {errors.length} errors with your submission
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <ul className="list-disc pl-5 space-y-1">
                        {errors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-5">
              <InputField
                label="First Name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <InputField
                label="Phone Number"
                type="tel"
                value={form.phoneNumber}
                onChange={(e) =>
                  setForm({ ...form, phoneNumber: e.target.value })
                }
              />

              <InputField
                label="Age"
                type="number"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
              />

              <div className="flex items-center">
                <input
                  id="isEmployee"
                  type="checkbox"
                  checked={form.isEmployee}
                  onChange={(e) =>
                    setForm({ ...form, isEmployee: e.target.checked })
                  }
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="isEmployee"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Are you an employee?
                </label>
              </div>

              <div>
                <label
                  htmlFor="salary"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Salary Range
                </label>
                <select
                  id="salary"
                  value={form.salary}
                  onChange={(e) => setForm({ ...form, salary: e.target.value })}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option disabled value="">
                    Select Salary Range
                  </option>
                  <option>0 To 500</option>
                  <option>500 To 1500</option>
                  <option>1500 To 3000</option>
                  <option>3000 To 6000</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  onClick={shAlert}
                  disabled={formValidation}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    formValidation
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }`}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAlert && <Model onClose={() => setShowAlert(false)} />}
    </div>
  );
}

function InputField({ label, type, value, onChange }) {
  return (
    <div>
      <label
        htmlFor={label.toLowerCase().replace(" ", "-")}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={label.toLowerCase().replace(" ", "-")}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
      />
    </div>
  );
}
