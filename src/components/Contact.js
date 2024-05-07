const Contact = () => {
  return (
    <div className="w-full md:w-96 md:max-w-full mx-auto">
      <div className=" p-6 border border-gray-300 sm:rounded-md">
        <h1 className=" font-bold text-3xl text-center p-2 ">CONTACT</h1>
        <form>
          <label className="block mb-6">
            <span>Your name </span>
            <input
              type="text"
              className="block w-full mt-1
                                                     p-2
                                                     border-gray-300
                                                     rounded-md
                                                    shadow-sm"
              placeholder="Tom Holland"
            />
          </label>
          <label className="block mb-6">
            <span>Email address</span>
            <input
              type="text"
              className="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            shadow-sm
           "
              placeholder="tomholland@email.com"
            />
          </label>
          <label className="block mb-6">
            <span>Message</span>
            <textarea
              type="text"
              className="
            block
            w-full
             mt-1
             p-2
            border-gray-300
            rounded-md
            shadow-sm"
              placeholder="tell us what are you thinking about..."
              rows="3"
            ></textarea>
          </label>
          <button className=" rounded-lg bg-blue-700 text-white p-4 m-4">
            contact Us
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
