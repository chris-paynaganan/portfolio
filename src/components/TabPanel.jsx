import { useState } from 'react'
import styles from './TabPanel.module.css'

function TabPanel({ tabs }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabList}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default TabPanel