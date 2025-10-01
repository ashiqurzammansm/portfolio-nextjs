import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import { services, testimonials } from "../data";

export default function Home(){
  return (<section id="home" className="pt-10 md:pt-14">
    <div className="container-outer grid gap-6">
      <div>
        <span className="kicker">Hello, I'm</span>
        <h1 className="heading mt-1">Your Name</h1>
        <p className="subtle max-w-2xl mt-2">A <strong>Full-Stack Developer</strong> crafting beautiful, performant web experiences.</p>
        <div className="mt-4 flex gap-3">
          <a className="btn" href="/services">View Services</a>
          <a className="btn-outline" href="/portfolio">See Portfolio</a>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <FeatureCard title="Clean Code" meta="Standards & best practices" emoji="🧼" />
        <FeatureCard title="Performance" meta="Fast loads, smooth UX" emoji="⚡" />
        <FeatureCard title="SEO" meta="Structured data & meta" emoji="🔍" />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between gap-4 mb-2">
          <h2 className="heading">Services</h2>
          <a className="subtle hover:text-stone-200" href="/services">All services →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {services.slice(0,3).map((s,i)=>(<article key={i} className="card">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="subtle">{s.category} · Delivery: {s.delivery}</p>
            <p className="mt-2 text-stone-300">{s.description}</p>
          </article>))}
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-between gap-4 mb-2">
          <h2 className="heading">Client Feedback</h2>
          <a className="subtle hover:text-stone-200" href="/services#clients">See all →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t,i)=>(<TestimonialCard key={i} t={t} />))}
        </div>
      </div>
    </div>
  </section>);
}