// AppProvider
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [teamStats, setTeamStats] = useState(null);
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const [socialsSide, setSocialsSide] = useState(null);
  const [lastClickedLogo, setLastClickedLogo] = useState(null);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const getTeamStats = (data) => {
    setTeamStats(data);
  };

  const toggleSocials = (clickedLogo, side) => {
    setSocialsSide(side); // Set side

    if (lastClickedLogo === clickedLogo) {
      setIsSocialsOpen(!isSocialsOpen);
    } else {
      setIsSocialsOpen(true);
      setLastClickedLogo(clickedLogo);
    }
  };

  const contextValue = {
    isHidden,
    toggleHidden,
    teamStats,
    getTeamStats,
    isSocialsOpen,
    setIsSocialsOpen,
    toggleSocials,
    socialsSide,
    lastClickedLogo,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
