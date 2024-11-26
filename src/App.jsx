import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    country: "",
    zipCode: "",
    vatNumber: "",
  });

  const [fData, setFData] = useState([]);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validateForm() {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip code is required";
    if (!formData.vatNumber) newErrors.vatNumber = "VAT number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      setFData([...fData, formData]);
      setFormData({
        name: "",
        email: "",
        address: "",
        contact: "",
        country: "",
        zipCode: "",
        vatNumber: "",
      });
    }
  }

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-[586px] container mx-auto h-[554px] p-[16px] bg-white rounded-[12px] shadow-md"
        >
          <div className="flex justify-between mb-8">
            <h2 className="font-medium text-base text-[#353535]">
              Edit address
            </h2>
            <button className="btn text-slate-500 text-base">X</button>
          </div>
          <div className="flex justify-between">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="text-[#353535] text-sm font-medium cursor-pointer"
              >
                Name
              </label>
              <br />
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                className="w-[269px] h-[46px] border border-solid-[#CACACA] rounded-lg py-[11px] px-[16px]"
                placeholder="John Doe"
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-[#353535] text-sm font-medium cursor-pointer"
              >
                Email
              </label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                className="w-[269px] h-[46px] border border-solid-[#CACACA] rounded-lg py-[11px] px-[16px]"
                placeholder="JohnDoe@gmail.com"
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="text-[#353535] text-sm font-medium cursor-pointer"
            >
              Billing address
            </label>
            <br />
            <textarea
              name="address"
              id="address"
              value={formData.address}
              className="mb-2 w-full p-2 border border-solid-[#CACACA] rounded-lg h-[86px]"
              placeholder="Address"
              onChange={handleChange}
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          <div className="flex justify-between mb-4">
            <div>
              <label
                className="text-[#353535] text-sm font-medium cursor-pointer"
                htmlFor="contact"
              >
                Contact
              </label>
              <br />
              <input
                id="contact"
                name="contact"
                value={formData.contact}
                placeholder="+44 0000 0000000"
                className="w-[269px] h-[46px] border border-solid-[#CACACA] rounded-lg py-[11px] px-[16px]"
                type="tel"
                onChange={handleChange}
              />
              {errors.contact && (
                <p className="text-red-500 text-sm">{errors.contact}</p>
              )}
            </div>
            <div>
              <label
                className="text-[#353535] text-sm font-medium cursor-pointer"
                htmlFor="country"
              >
                Country
              </label>
              <br />
              <select
                id="country"
                name="country"
                value={formData.country}
                className="w-[269px] h-[46px] border border-solid-[#CACACA] rounded-lg py-[11px] px-[16px]"
                onChange={handleChange}
              >
                <option value="Davlat">Davlatni tanlang</option>
                <option value="England">England</option>
                <option value="Uzbek">Uzbek</option>
                <option value="Russian">Russian</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between mb-8">
            <div>
              <label htmlFor="zipCode" className="cursor-pointer">
                Zip code
              </label>
              <br />
              <input
                id="zipCode"
                name="zipCode"
                type="number"
                value={formData.zipCode}
                placeholder="123456"
                className="w-[269px] h-[46px] border border-solid-[#CACACA] rounded-lg py-[11px] px-[16px]"
                onChange={handleChange}
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm">{errors.zipCode}</p>
              )}
            </div>
            <div>
              <label htmlFor="vatNumber" className="cursor-pointer">
                Vat Number
              </label>
              <br />
              <input
                id="vatNumber"
                name="vatNumber"
                type="number"
                value={formData.vatNumber}
                placeholder="123456"
                className="w-[269px] h-[46px] border border-solid-[#CACACA] rounded-lg py-[11px] px-[16px]"
                onChange={handleChange}
              />
              {errors.vatNumber && (
                <p className="text-red-500 text-sm">{errors.vatNumber}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="font-medium text-base rounded-lg w-[269px] h-[46px] p-[11px 105px] border border-solid-[#353535]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="font-medium text-base rounded-lg w-[269px] h-[46px] p-[11px 105px] bg-[#A020F0] text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {fData.length > 0 && (
        <div className="flex flex-wrap gap-10 container mx-auto w-[1250px] mb-2">
          {fData.map((el, index) => (
            <div key={index}>
              <div className="card bg-base-100 w-96 shadow-xl p-5">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-2 font-bold text-center">
                    Ism: {el.name}
                  </h2>
                  <i className="font-medium text-lg">
                    Shaxsiy email: <br /> {el.email}
                  </i>
                  <h4 className="text-base font-semibold mb-2">
                    Siz tanlagan "Davlat": {el.country}
                  </h4>
                  <div className="card-actions justify-end">
                    <p className="font-semibold text-lg mt-2 overflow-x-auto">
                      Sizning shaxsiy addressingiz: <br /> {el.address}
                    </p>
                    <h4 className="font-bold text-lg mt-2">
                      Sizning aloqa raqamingiz: {el.contact}
                    </h4>
                  </div>
                  <div className="mt-2">
                    <p className="text-lg mb-2 font-bold">
                      Pochta indeksingiz: {el.zipCode}
                    </p>
                    <h2 className="text-lg mb-2 font-bold">
                      QQS raqamingiz: {el.vatNumber}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
