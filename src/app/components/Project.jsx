import data from "../data/project-list.json";
import Reveal from '../style-components/Reveal'
import '../styles/project.css'

export function Card({ item }) {
    return (
        <div className="card__container">
            <Reveal>
                <div
                    className="card"
                    style={{
                        '--bgImg': `url(/${item.img}.png)`,
                        '--bgHoverImg': `url(/${item.img}-hover.png)`,
                        'filter': item.done ? 'none' : 'blur(10px)'
                    }}
                >
                    <div className="details">
                        <div className="card__title">
                            <h3 >{item.name}</h3>
                        </div>
                        <div className="card__description">
                            <p >{item.description}</p>
                        </div>
                        <div className="card__links">
                            <a href={item.github} className="card__link">
                                Github
                            </a>
                            {item.live ? (
                                <a href={item.live} className="card__link">
                                    Live
                                </a>
                            ) : <a></a>}
                        </div>
                    </div>
                    <div className="img" >
                        {/* <img src={`/${bgImg}.png`} typeof="png" /> */}
                    </div>
                </div>
                {!item.done && <div className="not-done">
                    <div className="marquee"></div>
                    <div className="last marquee"></div>
                </div>}
            </Reveal>
        </div>
    );
}
export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__list">
                {data.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
