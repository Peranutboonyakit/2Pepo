import { CONTACT } from "../../public/constants/constants";

const Contact = () => {
  return (
    <div className="pb-24">
      <h2
        className="my-10 text-center text-4xl bg-gradient-to-br from-neutral-500 to-purple-500
          bg-clip-text text-transparent"
      >
        Contact
      </h2>

      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">{CONTACT.email}</p>
      </div>
    </div>
  );
};

export default Contact;
