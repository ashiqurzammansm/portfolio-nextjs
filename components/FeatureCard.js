export default function FeatureCard({ title, meta, emoji }){
  return (<article className="card"><div className="text-5xl">{emoji}</div><h3 className="font-bold mt-2">{title}</h3><p className="subtle">{meta}</p></article>);
}