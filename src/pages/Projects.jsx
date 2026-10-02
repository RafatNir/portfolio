const projects = [
  ["/assets/project-hub.svg", "Ontario Region Hub Redesign", "Redesigned an internal communications site for 250+ staff at the Canada Revenue Agency using HTML, CSS, and JavaScript with accessibility in mind."],
  ["/assets/project-reporting.svg", "Automated Reporting Tools", "Built Excel macros and automated VLOOKUP workflows to streamline operational KPI reporting, reducing manual effort and improving accuracy."],
  ["/assets/project-portfolio.svg", "Portfolio Site", "A React portfolio with reusable components, six navigable pages, responsive styling, and a contact form."],
];

export default function Projects() {
  return <section className="page-shell"><div className="section-heading"><p className="eyebrow">Selected work</p><h1>Projects with a practical outcome.</h1><p className="lead">A few examples of design, development, and automation work I am proud to discuss.</p></div><div className="card-grid">{projects.map(([image, title, description]) => <article className="card" key={title}><img className="card-image" src={image} alt={`${title} project visual`} /><h3>{title}</h3><p>{description}</p></article>)}</div></section>;
}
