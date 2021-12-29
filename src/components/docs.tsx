/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./docs.module.css";
import { Link } from "@docusaurus/router";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  path: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Leaf Loans",
    image: "/img/logo.png",
    path: "/docs/leaf-loans/intro/",
    description: (
      <>
        Leaf Loans allows Leaf customers to apply for, obtain, and pay off
        microloans. It works in conjunction with Leaf’s core wallet to support
        the storage and transport of assets across borders.
      </>
    ),
  },
  {
    title: "Forex Tool",
    image: "/img/logo.png",
    path: "/docs/forex-docs/project-intro/intro/",
    description: (
      <>
        This open source project helps systems get up to date real time exchange
        rates from any currency they might support
      </>
    ),
  },
];

function Feature({ title, image, description, path }: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <Link to={path} className={styles.bareLink}>
        <div className={`card shadow--tl padding--lg ${styles.sectionCard}`}>
          <div className="text--center">
            <img className={styles.featureSvg} alt={title} src={image} />
          </div>
          <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features} id="docs">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
