
import React, { useState } from 'react';

export function Accordion({ children }) {
  return <div>{children}</div>;
}

export function AccordionItem({ children, value }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-2">
      {React.Children.map(children, child =>
        React.cloneElement(child, { open, setOpen })
      )}
    </div>
  );
}

export function AccordionTrigger({ children, open, setOpen }) {
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left font-bold py-2">
      {children}
    </button>
  );
}

export function AccordionContent({ children, open }) {
  return open ? <div className="px-4 py-2 bg-gray-100">{children}</div> : null;
}
