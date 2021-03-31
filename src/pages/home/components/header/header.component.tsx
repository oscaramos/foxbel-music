import { useState } from "react";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Searcher } from "./components/searcher/searcher.component";

import "./header.styles.scss";

export function Header() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="header">
      <Searcher value={keyword} onChange={(newValue) => setKeyword(newValue)} />

      <div>
        <FontAwesomeIcon icon={faUser} className="header__icon" />
        <span>Francisco M.</span>
      </div>
    </div>
  );
}
