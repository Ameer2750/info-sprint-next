// components/ServicesTabs.js
import { useState } from 'react';
import classes from './ServicesTabs.module.css';

export default function ServicesTabs({ categories }) {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className='grid grid-cols-4 gap-7'>
      {categories.map((category, index) => (
        <div key={index}>
          <button
            onClick={() => handleTabClick(index)}
            className={`${classes['tab-button']} rounded-3xl`}
          >
            {category.name}
          </button>
          <div
            className={`${classes['tab-content']} ${activeTab === index ? classes['active'] : ''}`}
          >
            {category.content}
          </div>
        </div>
      ))}
    </div>
  );
}
