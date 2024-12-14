import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);  // Reset status message before sending
    setStatusType(null);  // Reset status type before sending

    // Access EmailJS credentials from environment variables using Vite's import.meta.env
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;


    if (!serviceID || !templateID || !userID) {
      console.error("Missing EmailJS credentials");
      setStatusMessage("Failed to send message: Missing credentials");
      setStatusType("error");
      setIsSending(false);
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log("Success!", response.status, response.text);
          setStatusMessage("Message sent successfully!");
          setStatusType("success");
        },
        (error) => {
          console.log("Failed...", error);
          setStatusMessage(`Failed to send message: ${error.text || error.message}`);
          setStatusType("error");
        }
      )
      .finally(() => {
        setIsSending(false); // Reset loading state
      });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Hero Section with Title, Description */}
      <div
        className="w-full bg-cover bg-center relative h-96"
        style={{ backgroundImage: 'url("/contact-us.jpeg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white flex items-center justify-center h-full py-16">
          <div>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We would love to hear from you. Whether you have questions,
              feedback, or need assistance, feel free to get in touch with us.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            disabled={isSending} // Disable button while sending
          >
            {isSending ? "Sending..." : "Send Message"}
            <Send className="ml-2 h-5 w-5" />
          </button>

          {/* Show success or failure message */}
          {statusMessage && (
            <div
              className={`mt-4 text-center text-lg font-medium ${
                statusType === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
