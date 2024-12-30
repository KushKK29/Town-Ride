import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Field, Label, Switch } from "@headlessui/react";

const ContactUs = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
      <p className="mt-4 text-gray-600">Feel free to reach out to us!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Section 1: Contact Form */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900">Contact Sales</h2>
          <p className="mt-2 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
          <form action="#" method="POST" className="mt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  className="block w-full rounded-md border-gray-300 p-2 mt-2"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  className="block w-full rounded-md border-gray-300 p-2 mt-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-gray-300 p-2 mt-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 p-2 mt-2"
                />
              </div>
              <Field className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out"
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className="transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                    />
                  </Switch>
                </div>
                <Label className="text-sm text-gray-600">
                  By selecting this, you agree to our{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    privacy&nbsp;policy
                  </a>
                  .
                </Label>
              </Field>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 mt-4 rounded-md hover:bg-indigo-500"
            >
              Let's talk
            </button>
          </form>
        </div>

        {/* Section 2: Contact Information */}
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900">
            Our Contact Information
          </h2>
          <p className="mt-2 text-gray-600">
            You can reach us through any of the following:
          </p>
          <ul className="mt-4 space-y-4">
            <li>
              <strong className="text-gray-800">
                Registered Office Address:
              </strong>
              <br />
              Roppen Transportation Services Pvt Ltd, 3rd Floor, Sai Prithvi
              Arcade, Megha Hills, Sri Rama Colony, Madhapur, Hyderabad -
              500081.
            </li>
            <li>
              <strong className="text-gray-800">CIN:</strong>
              <br />
              U52210TG2015PTC097115
            </li>
            <li>
              <strong className="text-gray-800">City Office:</strong>
              <br />
              Roppen Transportation Services Pvt Ltd, #148, 1st Floor, SLV
              Nilaya, 5th Main 80ft road, HSR Layout 7th Sector, Bangalore
              560102.
            </li>
            <li>
              <strong className="text-gray-800">Corporate Office:</strong>
              <br />
              Mantri Commercio - Spatium Tower A, Sy No 51/2, 51/3, 51/4, Of
              Devarabeesanahalli Village And Hjem 39/5 Of Kariyammana Agrahara
              Village Varthur Hobli, Bangalore East Taluk, Bangalore.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
