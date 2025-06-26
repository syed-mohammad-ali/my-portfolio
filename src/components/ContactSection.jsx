import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("xqabgnzp"); // ✅ Formspree ID
  const formRef = useRef(null);
  useEffect(() => {
    if (state.succeeded) {
      formRef.current.reset(); // reset the form fields
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Got a project or want to team up? Reach out anytime — I’d love to
          connect and explore new opportunities together.
        </p>

        {/* Contact Information */}
        <div className="p-10 rounded-lg shadow-xs space-y-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-8">
            {/* Wrapper div that contains the icon column and text column */}
            <div className="flex items-center justify-center space-x-8">
              {/* Column for Icons */}
              <div className="flex flex-col space-y-8">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Column for Text */}
              <div className="flex flex-col justify-between space-y-8 text-center">
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:syed.mohammad.ali2000@outlook.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    syed.mohammad.ali2000@outlook.com
                  </a>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+91789**244**2"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +91 789**244**2
                  </a>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=India,MP,Bhopal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors underline"
                  >
                    India, MP, Bhopal
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/syed-mohammad-ali-206050215/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="https://x.com/asyedmali"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

          {state.succeeded && (
            <div className="flex justify-end mb-4">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-md text-sm">
                ✅ Message sent successfully!
              </span>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Syed..."
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="syed.mohammad.ali2000@outlook.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer"
            >
              {state.submitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
