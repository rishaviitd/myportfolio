import Button from "../reusable/Button";
import contact from "../../images/contact.png";

const ContactForm = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <img src={contact} alt="Contact" />

        <form>
          {/* Your form input fields go here */}

          <div className="flex gap-10 mt-2">
            <div className="font-general-medium w-20 h-15 px-4 py-2 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500">
              <Button title="Connect" type="submit" aria-label="Connect" />
            </div>
            <div className="font-general-medium w-20 h-15 px-4 py-2 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500 ml-4">
              <Button title="Message" type="button" aria-label="Message" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
