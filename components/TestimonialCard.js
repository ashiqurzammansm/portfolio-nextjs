export default function TestimonialCard({ t }){
  return (<article className="card"><p>"{t.quote}"</p><p className="subtle">— {t.name}, {t.company}</p></article>);
}