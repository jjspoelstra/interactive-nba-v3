import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const [teamStats, setTeamStats] = useState(null);

  const getTeamStats = (data) => {
    setTeamStats(data);
  };

  const contextValue = {
    isHidden,
    toggleHidden,
    teamStats,
    getTeamStats,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
