function NewForm() {
  return (
    <form
      id="addPropertyFile"
      className="flex flex-col items-center gap-5 w-full"
    >
      <button className="w-fit mx-auto py-2 px-8 cursor-pointer rounded-2xl text-md hover:text-white  bg-gray-100 border-gray-800 border hover:bg-gray-800">
        Add property
      </button>
    </form>
  );
}

export default NewForm;
