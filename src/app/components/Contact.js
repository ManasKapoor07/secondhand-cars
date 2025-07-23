export default function ContactUs() {
    return (
      <div className="min-h-screen bg-white px-6 py-12 md:px-24">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
  
        <div className="bg-white shadow rounded-xl p-6 md:p-10">
          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Address:</span>{" "}
              Near Shankar Hospital, Rampur Road, Haldwani – 263139
            </p>
            <p>
              <span className="font-semibold">Phone Numbers:</span><br />
              <a href="tel:9837027172" className="text-blue-600 hover:underline">9837027172</a><br />
              <a href="tel:9897424583" className="text-blue-600 hover:underline">9897424583</a>
            </p>
            <p>
              <span className="font-semibold">Contact Person:</span>{" "}
              Mayank Kapoor
            </p>
          </div>
  
          {/* Optional: Google Map Embed */}
          <div className="mt-8">
            
            <iframe
              title="Maa Bahawani Car Bazar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.496972968453!2d79.52053257481226!3d29.208933175354915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09bbc35a27175%3A0x7dcaf46d2bfd1f08!2sMaa%20Bhawani%20Car%20Bazar!5e0!3m2!1sen!2sin!4v1753020675196!5m2!1sen!2sin"
              width="100%"
              height="300"
              loading="lazy"
              className="rounded-xl border"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
  