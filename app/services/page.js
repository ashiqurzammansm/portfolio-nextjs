import { clients } from "../../data";
import ClientServices from "../../components/ClientServices";

export const metadata = {
  title: "Services — Personal Portfolio",
  description: "All services and client section with ordering.",
};

export default function Services() {
  return (
    <section className="mt-10">
      <div className="container-outer">
        <div className="border-b border-stone-900 pb-6">
          <h1 className="heading">Services</h1>
          <p className="subtle">What I offer</p>
        </div>

        <ClientServices />

        <div className="mt-10">
          <h2 className="heading">Clients</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-3">
            {clients.map((c, i) => (
              <div key={i} className="card text-center py-8 text-stone-300">{c.name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
