import "./Footer.css";

const Footer = () => {
  const technologies = [
    "React",
    "Redux",
    "PostgreSQL",
    "ExpressJS",
    "Sequelize",
    "Heroku",
  ];

  const aboutLinks = [
    {
      url: "https://github.com/brandonvicc",
      title: "Github",
    },
    {
      url: "https://www.linkedin.com/in/brandon-vicchiollo-5a4786217/",
      title: "LinkedIn",
    },
  ];
  return (
    <div className="footer-container">
      <ul className="tech-list">
        {technologies.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
      <ul className="link-list">
        <li>Brandon Vicchiollo</li>
        <li>vicchiollo.brandon@gmail.com</li>
        {aboutLinks.map((link, idx) => (
          <li key={idx}>
            <a
              className="foot-link-item"
              rel="noreferrer"
              target="_blank"
              href={link.url}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
