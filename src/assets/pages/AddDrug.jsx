import React from 'react'

const AddDrug = () => {
  return (
    <>
    <div>
      <label for="drug_name" class="block font-bold text-gray-700">Drug Name:</label>
<input type="text" id="drug_name" name="drug_name" required
       class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"/>

<label for="manufacturer" class="block font-bold text-gray-700">Brand</label>
<input type="text" id="manufacturer" name=""
       class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"/>

<label for="price" class="block font-bold text-gray-700">Price:</label>
<input type="number" id="price" name="price" step="0.01" required
       class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"/>

<label for="description" class="block font-bold text-gray-700">Description:</label>
<textarea id="description" name="description" rows="4" cols="50"
          class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"></textarea>

<input type="submit" value="Add Drug" class="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"/>

    </div>
    </>
  )
}

export default AddDrug
