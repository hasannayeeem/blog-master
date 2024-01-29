import React from 'react'

function CreateSponsor() {
  return (
    <form>
      <label
        htmlFor="donor_name"
        className="block font-semibold text-3xl mt-2 mb-1"
      >
        Donor Name{" "}
      </label>
      <input
        style={{ background: "#ededed" }}
        type="text"
        id="donor_name"
        className="outline-none border-none w-full text-2xl p-4 rounded-[5px] bg-[#ededed]"
      ></input>
      <br />
      <label
        htmlFor="donor_city"
        className="block font-semibold text-3xl mt-2 mb-1"
      >
        City{" "}
      </label>
      <input
        style={{ background: "#ededed" }}
        type="text"
        id="donor_city"
        className="outline-none border-none w-full text-2xl p-4 rounded-[5px] bg-[#ededed]"
      ></input>
      <br />
      <label
        htmlFor="amount"
        className="block font-semibold text-3xl mt-2 mb-1"
      >
        Amount{" "}
      </label>
      <input
        style={{ background: "#ededed" }}
        type="text"
        id="amount"
        className="outline-none border-none w-full text-2xl p-4 rounded-[5px] bg-[#ededed]"
      ></input>
      <label htmlFor="image" className="block font-semibold text-3xl mt-2 mb-1">
        Image{" "}
      </label>
      <input
        style={{ background: "#ededed" }}
        type="file"
        id="image"
        className="outline-none border-none w-full text-2xl p-3 rounded-[5px] bg-[#ededed]"
      ></input>
    </form>
  )
}

export default CreateSponsor