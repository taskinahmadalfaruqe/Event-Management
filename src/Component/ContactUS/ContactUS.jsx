const ContactUS = () => {
  return (
    <div className="flex my-10 mx-auto justify-center gap-5 border p-1 md:p-5 rounded-md flex-col lg:flex-row">
      <div className="rounded-md overflow-hidden flex-1 flex justify-center items-center">
        <iframe
          className="rounded-md object-cover overflow-hidden p-1"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1825.3458156368424!2d90.35668315799917!3d23.793992890440343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1696857715972!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" flex-1 text-center flex justify-center items-center flex-col text-lg md:text-2xl font-semibold font-Oswald space-y-5">
        <div>
          Call Us:<a href="tel://+6199942413"> +8801318021258</a>
        </div>
        <div className="flex flex-col space-y-3">
          <h2>Location: </h2>
          <div className="flex font-normal flex-col">
            <p>Bitul Monir Jame Mosgid Rode</p>
            <p>7-B/House-340, Ahmed Nagor,Mirpur-1, Dhaka-1200</p>
          </div>
        </div>
        <div className="flex flex-col">
          Email:
          <a href="mailto:someone@example.com">taskinahmadalfaruqe@gmial.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
