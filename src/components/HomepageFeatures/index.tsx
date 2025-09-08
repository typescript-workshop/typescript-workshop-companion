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
    description: <>CTO chez TrustCollect</>,
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
    
      <section className={clsx("padding--xl", styles.comet)}>
        <div className="container text--center">
          <img
            src="img/trustcollect.svg"
            alt="TrustCollect logo"
            className={styles.logo}
          />
          <h1 className={clsx("margin-vert--lg", styles.textBlack)}>
            Collectez des témoignages clients qui convertissent
          </h1>
          <div className="row margin-vert--lg">
            <div className="col">
             <img
                src="https://www-staging.trustcollect.io/_astro/home-video.DsgZurW6.png"
                alt="Comet La défense"
                className={styles.cometImage}
              />
            </div>
            <div className="col">
             <img
                src="https://www-staging.trustcollect.io/_astro/home-dashboard.CjLdIgtq.png"
                alt="Comet La défense"
                className={styles.cometImage}
              />
            </div>
            <div className="col">
             <img
                src="https://www-staging.trustcollect.io/_astro/home-wall.BJOiNfQg.png"
                alt="Comet La défense"
                className={styles.cometImage}
              />
            </div>
            
          </div>
        </div>
      </section>
        <section className={clsx("padding--l", styles.comet)}>
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
