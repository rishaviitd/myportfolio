import Button from "../reusable/Button";
import contact from "../../images/contact.png";
import sendIcon from "../../images/send.png";

const ContactForm = () => {
  return (
    <div className="w-full lg:w-1/2 shadow-md rounded-lg">
      <div className="leading-loose p-4">
        <img src={contact} alt="Contact" className="rounded-lg" />

        <form>
          <div className="flex items-center gap-8 mt-2">
            <a href="https://www.linkedin.com/in/rishav-kumar-06091b227/">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-1.5 text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-full duration-500"
                aria-label="Connect"
              >
                <img
                  src={sendIcon}
                  alt=""
                  height="20"
                  width="20"
                  className="mr-1"
                />
                <span className="text-sm font-medium tracking-wider">
                  Message
                </span>
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
