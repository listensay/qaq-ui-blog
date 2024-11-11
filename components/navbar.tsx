interface navbar {
  tabs: tabs[];
}

interface tabs {
  name: string;
  to: string;
}

function changeTab(tab: string) {
  console.log(tab);
}

export default function Navbar(props: navbar) {
  const { tabs } = props;
  const currentTab = tabs[0].to;

  return (
    <div className="flex justify-center items-center px-4 h-16">
      <div className="text-xl">
        <nav>
          <ul className="flex items-center">
            {tabs.map((item) => {
              return (
                <li
                  className={`mr-4 cursor-pointer ${currentTab === item.to ? 'text-blue-500' : ''}`}
                  key={item.to}
                  onClick={() => changeTab(item.to)}
                >
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
