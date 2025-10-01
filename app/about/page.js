export const metadata = { title: "About — Personal Portfolio", description: "About me: biography, clients, and skills." };
export default function About(){
  return (<section className="mt-10"><div className="container-outer">
    <div className="border-b border-stone-900 pb-6"><h1 className="heading">About Me</h1><p className="subtle">Biography · Clients · Skills</p></div>
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      <article className="card"><h2 className="font-semibold text-xl">Personal Biography</h2>
        <p className="mt-2 text-stone-300">I'm a developer with a passion for human-centered design and robust engineering. I build responsive interfaces, scalable APIs, and optimized websites.</p>
        <p className="mt-2 text-stone-300">When I'm not coding, I contribute to open-source, write dev articles, and mentor juniors.</p></article>
      <aside className="card"><h2 className="font-semibold text-xl">Existing Clients</h2>
        <ul className="mt-2 text-stone-300 list-disc pl-5 space-y-1">
          <li>Acme Corp — E-commerce platform</li><li>BrightEdu — Learning dashboard</li><li>GreenFarm — Agri-tech mobile app</li>
        </ul></aside>
    </div>
    <div className="card mt-6"><h2 className="font-semibold text-xl">Skill Information</h2>
      <div className="mt-3 space-y-3">{["HTML5","CSS3","JavaScript","React","Node.js"].map((s,i)=>(
        <div key={i}><div className="flex justify-between text-sm"><span>{s}</span><span className="subtle">{[95,90,92,85,80][i]}%</span></div>
        <div className="h-2 bg-stone-900 border border-stone-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600" style={{width:`${[95,90,92,85,80][i]}%`}}></div></div></div>))}
      </div></div>
  </div></section>);
}