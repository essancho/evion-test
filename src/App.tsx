import React from "react";
import styles from "./App.module.scss";

import "./App.css";
import CarShop from "./components/CarShop/CarShop";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <CarShop />
    </div>
  );
};

export default App;
