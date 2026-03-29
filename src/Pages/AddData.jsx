import { useState } from "react";
import { feedTypes } from "../data/mockData";
function AddData() {
    const [formData, setFormData] = useState({
        farmName: "",
        location: "",
        flockSize: "",
        feedType: feedTypes[0],
        quantity: "",
    })

    const handleSubmit = () => {
        setFormData({
            ...formData,
            farmName: "",
            location: "",
            flockSize: "",
            feedType: feedTypes[0],
            quantity: "",
        })
    }

    return (
        <div className="min-h-screen bg-[#f7f5f0] py-10 px-4">
            <div className="mx-auto max-w-2xl px-4 py-8 rounded-lg shadow bg-white">
                <h1 className="mb-2 text-3xl font-bold">Add Farm Data</h1>
                <p className="mb-8">Record your feed production data to track and optimize farm performance.</p>

                <div>
                    <h2>Feed Record Form</h2>
                    <p>Fill in the details below. All fields are required.</p>

                    <form className="flex flex-col space-y-5" onSubmit={(e) => { e.preventDefault() }}>
                        <div className="flex flex-col">
                            <label htmlFor="farmName">Farm Name</label>
                            <input id="farmName" value={formData.farmName} className="bg-[#f7f5f0] py-2 px-4 rounded-md mt-2 text-[#52c790] border border-gray-300" placeholder="e.g. Green Valley Farm" onChange={(e) => { setFormData({ ...formData, farmName: e.target.value }) }} />
                        </div>


                        <div className="flex flex-col">
                            <label htmlFor="location">Location</label>
                            <input id="location" value={formData.location} className="bg-[#f7f5f0] py-2 px-4 rounded-md mt-2 text-[#52c790] border border-gray-300" placeholder="e.g. Nairobi, Kenya" onChange={(e) => { setFormData({ ...formData, location: e.target.value }) }} />
                        </div>


                        <div className="flex flex-col">
                            <label htmlFor="flockSize">Flock Size</label>
                            <input id="flockSize"  value={formData.flockSize} className="bg-[#f7f5f0] py-2 px-4 rounded-md mt-2 text-[#52c790] border border-gray-300" type="number" placeholder="e.g. 250" onChange={(e) => { setFormData({ ...formData, flockSize: e.target.value }) }} />
                        </div>



                        <div className="flex flex-col">
                            <label htmlFor="feedType">Feed Type</label>
                            <select id="feedType" className="bg-[#f7f5f0] py-2 px-4 rounded-md mt-2 text-[#52c790] border border-gray-300" onChange={(e) => { setFormData({ ...formData, feedType: e.target.value }) }}>
                                {feedTypes.map((ft) => (
                                    <option key={ft} value={ft}>{ft}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col">

                            <label htmlFor="quantity">Quantity (kg)</label>
                            <input id="quantity" value={formData.quantity} className="bg-[#f7f5f0] py-2 px-4 rounded-md mt-2 text-[#52c790] border border-gray-300" type="number" step="0.1" placeholder="e.g. 50" onChange={(e) => { setFormData({ ...formData, quantity: e.target.value }) }} />
                        </div>

                        <button type="submit" className="w-full text-base font-semibold bg-[#246b3e] text-white py-1 rounded-md" onClick={handleSubmit}>
                            Submit Record
                        </button>
                    </form>
                </div >
            </div>
        </div>
    );
}

export default AddData;