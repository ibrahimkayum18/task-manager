import {  Controller, useForm } from 'react-hook-form';


const Contact = () => {
    const { control, handleSubmit, register } = useForm();

    const onSubmit = (data) => {
      console.log(data.title); // Access form data here
    };
    return (
        <div>
<form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          {...register('title')}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          {...register('description')}
          rows="4"
          className="mt-1 p-2 w-full border rounded-md"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block text-sm font-medium text-gray-600">
          Priority
        </label>
        <Controller
          name="priority"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field} className="mt-1 p-2 w-full border rounded-md">
              <option value="" disabled>
                Select Priority
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          )}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>        </div>
    );
};

export default Contact;