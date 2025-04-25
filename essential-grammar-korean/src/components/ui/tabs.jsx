
import React, { useState } from 'react';

export function Tabs({ children, defaultValue }) {
  const [active, setActive] = useState(defaultValue);
  const tabList = React.Children.toArray(children).find(child => child.type.name === 'TabsList');
  const tabContents = React.Children.toArray(children).filter(child => child.type.name === 'TabsContent');
  return (
    <div>
      {React.cloneElement(tabList, { active, setActive })}
      {tabContents.map((child) => active === child.props.value && child)}
    </div>
  );
}

export function TabsList({ children, active, setActive }) {
  return (
    <div className="flex">{React.Children.map(children, child => React.cloneElement(child, { active, setActive }))}</div>
  );
}

export function TabsTrigger({ children, value, active, setActive }) {
  return (
    <button
      onClick={() => setActive(value)}
      className={`px-4 py-2 ${active === value ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value }) {
  return <div>{children}</div>;
}
