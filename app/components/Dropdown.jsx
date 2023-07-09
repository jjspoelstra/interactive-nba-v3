import { useState } from 'react';
import Link from "next/link";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <span onMouseOver={toggleDropdown} onClick={toggleDropdown}>
        Brackets
      </span>
      <span onClick={toggleDropdown} className="dropdown-icon">&#9662;</span>
      {isOpen && (
        <div id="myDropdown" className="dropdown-content">
          {Array.from({ length: 33 }, (_, i) => {
            const year = 2023 - i;
            return (
              <Link key={year} href={`/brackets/${year}`} className="linkStyle">
                {year}
              </Link>
            );
          })}
          {/* Add more items as needed */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
