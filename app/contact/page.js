import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact — Personal Portfolio",
  description: "Direct contact info, contact form, and Google Map.",
};

export default function Contact() {
  return (
    <section className="mt-10">
      <div className="container-outer">
        <div className="border-b border-stone-900 pb-6">
          <h1 className="heading">Contact</h1>
          <p className="subtle">Get in touch</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <article className="card">
            <h2 className="font-semibold text-xl">Direct Contact Information</h2>
            <ul className="mt-2 space-y-2 text-stone-300">
              <li><strong>Email:</strong> <a className="text-emerald-400" href="mailto:you@example.com">you@example.com</a></li>
              <li><strong>Phone:</strong> <a className="text-emerald-400" href="tel:+8801000000000">+880 10-0000-0000</a></li>
              <li><strong>Location:</strong> Dhaka, Bangladesh</li>
            </ul>
          </article>

          <ContactForm />
        </div>

        <div className="card mt-6">
          <h2 className="font-semibold text-xl">Find Me</h2>
          <div className="mt-3 border border-stone-800 rounded-2xl overflow-hidden shadow-soft">
            <iframe
              title="Map"
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=Dhaka%2C%20Bangladesh&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
