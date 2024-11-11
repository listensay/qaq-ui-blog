'use client';

import { memo, useState } from 'react';

interface navbar {
  tabs: tabs[];
}

interface tabs {
  name: string;
  to: string;
}

function Navbar(props: navbar) {
  const { tabs } = props;
  const [currentTab, setCurrentTab] = useState(tabs[0].to);

  return (
    <div className="fixed top-0 w-full flex justify-center items-center px-4 h-20">
      <div>
        <nav>
          <ul className="flex items-center bg-primary rounded-md bg-opacity-50 px-8 py-4 shadow-lg border border-stone-900">
            {tabs.map((item) => {
              return (
                <li
                  className={`relative w-full px-4 cursor-pointer last:mr-0 font-bold ${currentTab === item.to ? 'text-red' : ''}`}
                  key={item.to}
                  onClick={() => setCurrentTab(item.to)}
                >
                  <span>{item.name}</span>

                  {currentTab === item.to && (
                    <div className="absolute w-2 h-2 bg-yellow-400 rounded-full left-0 right-0 -bottom-2 mx-auto border-stone-900 border"></div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default memo(Navbar);
