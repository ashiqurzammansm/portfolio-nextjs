export const metadata = { title: "Portfolio — Personal Portfolio", description: "Personal info, education, special skills, training, working experience." };
export default function Portfolio(){
  return (<section className="mt-10"><div className="container-outer">
    <div className="border-b border-stone-900 pb-6"><h1 className="heading">Portfolio</h1><p className="subtle">Personal details · Education · Skills · Training · Experience</p></div>
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      <article className="card"><h2 className="font-semibold text-xl">Personal Information</h2>
        <ul className="mt-2 space-y-1 text-stone-300">
          <li><strong>Name:</strong> Your Name</li><li><strong>Location:</strong> Dhaka, Bangladesh</li>
          <li><strong>Email:</strong> <a className="text-emerald-400" href="mailto:you@example.com">you@example.com</a></li>
          <li><strong>Website:</strong> <a className="text-emerald-400" href="https://example.com">example.com</a></li></ul></article>
      <article className="card"><h2 className="font-semibold text-xl">Special Skills</h2>
        <div className="mt-2 grid md:grid-cols-2 gap-2">{["UI Engineering","Performance Optimization","API Design","Accessibility (a11y)","Testing & QA","SEO"].map((s,i)=>(<span key={i} className="tag">{s}</span>))}</div>
      </article>
    </div>
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      <article className="card"><h2 className="font-semibold text-xl">Education</h2>
        <ul className="mt-2 space-y-2"><li><span className="subtle">2018–2022</span> — <strong>BSc in CSE</strong>, ABC University</li>
        <li><span className="subtle">2016–2018</span> — <strong>HSC</strong>, XYZ College</li></ul></article>
      <article className="card"><h2 className="font-semibold text-xl">Training</h2>
        <ul className="mt-2 space-y-2"><li><span className="subtle">2024</span> — <strong>Advanced React</strong>, Coursera</li>
        <li><span className="subtle">2023</span> — <strong>Node.js Microservices</strong>, Udemy</li></ul></article>
    </div>
    <div className="card mt-6"><h2 className="font-semibold text-xl">Working Experience</h2>
      <ul className="mt-2 space-y-2"><li><span className="subtle">2023–Present</span> — <strong>Frontend Engineer</strong> at Acme Corp — Built design system & SPA</li>
      <li><span className="subtle">2021–2023</span> — <strong>Full-Stack Developer</strong> at BrightEdu — LMS & analytics</li></ul></div>
  </div></section>);
}