import TextEditor from "./TextEditor";
import AddImage from "./AddImage";

const Form = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className="   mx-auto mt-8 p-6   shadow-lg " onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="text-2xl focus:outline-none text-[#ccc]"
      />

      <br />

      <AddImage />

      <br />
      <TextEditor />
      <br />
      <label>
        Author Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Author Profile Image:
        <input type="text" name="profileImage" />
      </label>
      <br />
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
