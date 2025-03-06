import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  pictureUrl: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Johan Rouve",
    pictureUrl: "https://iili.io/5LEXeV.jpg",
    description: <>Développeur full-stack freelance</>,
  },
  {
    title: "Marjorie Aubert",
    pictureUrl: "https://iili.io/3FFyGpa.md.jpg",
    description: <>Développeuse full-stack chez Comet Meetings</>,
  },
  {
    title: "Bastien Tran",
    pictureUrl: "https://iili.io/3FKFlou.jpg",
    description: <>Développeur full-stack chez Comet Meetings</>,
  },
];

function Feature({ title, pictureUrl, description }: FeatureItem) {
  return (
    <div className={clsx("col avatar avatar--vertical")}>
      <img
        src={pictureUrl}
        className={clsx(
          "avatar__photo avatar__photo--xl",
          styles.avatar__photo
        )}
      />
      <div
        className={clsx(
          "text--center margin-top--md padding-horiz--md avatar__intro",
          styles.avatar__intro
        )}
      >
        <div className="avatar__name">{title}</div>
        <p className="avatar__subtitle">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <h3 className="text--center">Animé par</h3>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h3 className="text--center">Programme</h3>
          <p>
            Qui n’a jamais mis un type any, car il n’arrivait pas à typer comme
            il le souhaitait ? Certes, c'est rapide, mais vous perdez la
            sécurité apportée par TypeScript.
          </p>
          <p>
            Le système de type est très puissant et cet atelier vous permettra
            d’apprendre à maitriser le langage dans le langage ! Pour cela, nous
            allons nous inspirer de projets existants pour créer un builder de
            requêtes SQL. Grâce à un typage avancé, le compilateur TypeScript
            nous assurera une expérience développeur optimale avec
            autocomplétion et sécurité de type lors du développement. La
            sécurité apportée par le compilateur nous permet d’avoir une couche
            ultra-légère à l’exécution pour des performances optimales.
          </p>
          <p>
            Que vous soyez, débutant ou confirmé, vous êtes tous et toutes les
            bienvenues. À la fin de cet atelier, vous ne vous sentirez plus
            jamais démuni à la lecture d’une page de définition TypeScript.
          </p>
          <p className="">
            Prérequis :
            <ul>
              <li>Connaissances de base TypeScript</li>
              <li>Votre ordinateur 💻</li>
            </ul>
          </p>
        </div>
      </section>
      <section className={clsx("padding--xl", styles.comet)}>
        <div className="container text--center">
          <img
            src="https://cdn.prod.website-files.com/642eed47b21be33868253a0c/642eee3534abb5bc1e1552ba_logo_yellow.svg"
            alt="Comet logo"
            className={styles.logo}
          />
          <h1 className={clsx("margin-vert--lg", styles.textBlack)}>
            Des lieux dédiés à la réussite de vos évènements.
          </h1>
          <div className="row margin-vert--lg">
            <div className="col">
              <img
                src="https://res.cloudinary.com/ddyhxyc8l/image/upload/w_1600,h_1067,c_fill,g_auto/v1658133621/booking/coeur-defense/cover.jpg"
                alt="Comet La défense"
                className={styles.cometImage}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/ddyhxyc8l/image/upload/w_1600,h_1067,c_fill,g_auto/v1658133621/booking/comet-louise/1.jpg"
                alt="Comet Louise"
                className={styles.cometImage}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/ddyhxyc8l/image/upload/w_1600,h_1067,c_fill,g_auto/v1658133621/booking/comet-retiro/cover.jpg"
                alt="Comet Retiro"
                className={styles.cometImage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
