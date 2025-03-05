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
    description: (
      <>
        <p>
          Développeur curieux, j'ai travaillé sur différentes plate-formes,
          principalement web et mobile, aussi bien coté front que back, dans
          différents languages.
        </p>
        <p>
          J’ai une forte appétence pour le design et l’ergonomie, et j’aime
          peaufiner les détails graphiques afin que les utilisateurs aient le
          meilleur ressenti possible.
        </p>
        <p>
          Et comme la vie ne se limite pas seulement à du code, je me passionne
          aussi pour le sport et la raclette.
        </p>
      </>
    ),
  },
  {
    title: "Marjorie Aubert",
    pictureUrl: "https://iili.io/3FFyGpa.md.jpg",
    description: (
      <>
        <p>
          Développeuse full-stack chez Comet Meetings, mon équipe pratique
          quotidiennement l'extrême programming et le software teaming.
        </p>
        <p>
          C'est une pratique que j'adore partager en co-animant des sessions
          mixtes et non-mixtes avec le meetup{" "}
          <a href="https://mobilizon.fr/@dev_en_equipe">mobProgFr</a>.
        </p>
      </>
    ),
  },
  {
    title: "Bastien Tran",
    pictureUrl: "https://iili.io/3FKFlou.jpg",
    description: (
      <>
        <p>
          Après une longue errance dans la monde académique je suis devenu
          développeur à la faveur d'un bootcamp. Je suis donc un vieux jeune
          développeur.
        </p>
        <p>
          J'ai grandement apprécié - après quelques expériences heureuses mais
          brouillonnes en R et en SQL dans ma vie passée - de pouvoir
          professionnaliser ma pratique du code. C'est un cheminement dans
          lequel je garde comme valeur cardinale la collaboration - séquelle de
          mes centres d'intérêt académiques - qu'elle concerne mes pairs ou mes
          collègues du métier mais aussi mon moi du passé et celui du futur.
        </p>
        <p>
          A présent j'oeuvre essentiellement sous TypeScript ce qui nourrit un
          autre de mes tropes qu'est la modélisation de domaines. Je tends à
          penser que quiconque à pris le pli de raisonner sur du systémique peut
          se risquer au code, et pour ma part je tire un peu de guidance de ma
          compréhension des systèmes biologiques.
        </p>
        <p>
          On pourrait s'attendre à ce que, familier des taxonomies, je sois
          naturellement à l'aise avec des approches orientées objet. Et si ma
          formation allait elle aussi plutôt dans ce sens, j'ai maintenant la
          chance de pouvoir expérimenter des approches plus fonctionnelles qui
          participent à mon évolution tout en me ramenant à mes premiers pas.
        </p>
        <p>
          J'ai aujourd'hui hâte de pouvoir partager ma modeste expérience de
          vieux junior avec la communauté !
        </p>
      </>
    ),
  },
];

function Feature({ title, pictureUrl, description }: FeatureItem) {
  return (
    <div className={clsx("col avatar")}>
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
        <h3 className="avatar__name">{title}</h3>
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
          <div>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
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
