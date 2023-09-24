/* eslint-disable -- coz I want to */

'use client'

import { Sticky } from "ui"
import { useState } from 'react';
import styles from './page.module.css'

const getContentItems = (length: number) => {
  const contentItems = Array.from({ length }, (_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
    description: `Description of Item ${i + 1}`,
  }));
  return contentItems;
}

const getSidebarItems = (length: number) => {
  const sidebarItems = Array.from({ length }, (_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
    description: `Description of Item ${i + 1}`,
  }));
  return sidebarItems;
}

export default function Page(): JSX.Element {
  const [contentItemsLength, setContentItemsLength] = useState(50);
  const [sidebarItemsLength, setSidebarItemsLength] = useState(20);
  const [showHeader, setShowHeader] = useState(true);

  return (
    <>
      {showHeader && <header className={styles.header} >
        <h1>Header</h1>
      </header>}
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.buttonStack}>
            <button className={styles.button} onClick={() => setContentItemsLength(5)}>5 items</button>
            <button className={styles.button} onClick={() => setContentItemsLength(20)}>20 items</button>
            <button className={styles.button} onClick={() => setContentItemsLength(50)}>50 items</button>
            <button className={styles.button} onClick={() => setContentItemsLength(100)}>100 items</button>
            <button className={styles.button} onClick={() => setContentItemsLength(Math.floor(Math.random() * 150))}><span>Randomize items ({contentItemsLength}) </span> </button>
            <button className={styles.button} onClick={() => setShowHeader(!showHeader)}>Toggle Header</button>
          </div>
          {getContentItems(contentItemsLength).map((item) => (
            <div key={item.id} className={styles.item}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          ))
          }
        </section>
        <Sticky key={
          `sidebar-with-header-${showHeader}`
        } as='aside' className={styles.sidebar}>
          <div className={styles.buttonStack}>
            <button className={styles.button} onClick={() => setSidebarItemsLength(5)}>5 items</button>
            <button className={styles.button} onClick={() => setSidebarItemsLength(20)}>20 items</button>
            <button className={styles.button} onClick={() => setSidebarItemsLength(50)}>50 items</button>
          </div>
          {getSidebarItems(sidebarItemsLength).map((item) => (
            <div key={item.id} className={styles.item}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </Sticky>
      </main>
    </>
  );
}
