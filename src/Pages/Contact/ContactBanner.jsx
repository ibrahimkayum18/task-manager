import { FaFacebook, FaMailBulk, FaPhone } from "react-icons/fa";

const ContactBanner = () => {
  return (
    <div>
      <div
      data-aos="fade-up"
        className="bg-cover bg-center"
        style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}
      >
        <div className="bg-black bg-opacity-50 text-white text-center p-16">
          <h2 className="text-2xl font-bold mb-2">Contact Us Today!</h2>
          <p className="text-sm">
            We're here to help. Reach out to us for any inquiries or assistance.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
            {/* Facebook Section */}
            <a href="https://www.facebook.com/" data-aos="flip-right">
              <div className="flex flex-col items-center bg-white p-5 lg:p-10 mx-5 md:mx-0 rounded-tl-3xl rounded-br-3xl">
                <FaFacebook className="text-3xl text-blue-700" />
                <i className="fab fa-facebook text-4xl mb-2"></i>
                <h3 className="text-xl font-semibold mb-2">Facebook</h3>
                <p className="text-gray-600">
                  Connect with us on Facebook for updates.
                </p>
              </div>
            </a>

            {/* Phone Section */}
            <div  data-aos="flip-right" className="flex flex-col items-center bg-white p-5 lg:p-10 mx-5 md:mx-0 rounded-tl-3xl rounded-br-3xl">
              <FaPhone className="text-3xl text-green-600" />
              <i className="fas fa-phone-alt text-4xl mb-2"></i>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">Call us at: 01640099847</p>
            </div>

            {/* Email Section */}
            <a href="https://mail.google.com/mail/u/0/#sent?compose=new"  data-aos="flip-right">
              <div className="flex flex-col items-center bg-white p-5 lg:p-10 mx-5 md:mx-0 rounded-tl-3xl rounded-br-3xl">
                <FaMailBulk className="text-3xl text-yellow-600" />
                <i className="fas fa-envelope text-4xl mb-2"></i>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  Send us an email at: ibrahimkayum017@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
