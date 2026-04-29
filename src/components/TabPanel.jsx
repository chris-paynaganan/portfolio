import { useState, useRef, useEffect } from 'react'
import styles from './TabPanel.module.css'

function TabPanel({ tabs }) {
  const [activeTab, setActiveTab] = useState(0)
  const tabListRef = useRef(null)
  const activeTabRef = useRef(null)

  // Scroll active tab into view on mobile — anchored left
  useEffect(() => {
    if (activeTabRef.current && tabListRef.current) {
      const tabList = tabListRef.current
      const tab = activeTabRef.current
      tabList.scrollTo({
        left: tab.offsetLeft - 16,
        behavior: 'smooth',
      })
    }
  }, [activeTab])

  return (
    <div className={styles.wrapper}>

      {/* Tab pill container */}
      <div className={styles.tabList} ref={tabListRef}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={activeTab === index ? activeTabRef : null}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {tabs[activeTab].content}
      </div>

    </div>
  )
}

export default TabPanel