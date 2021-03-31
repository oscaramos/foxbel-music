import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Searcher } from "./components/searcher/searcher.component";

import "./header.styles.scss";

type IProps = {
  keyword: string;
  setKeyword: (newKeyword: string) => void;
};

export function Header({ keyword, setKeyword }: IProps) {
  return (
    <header className="header">
      <Searcher value={keyword} onSubmit={(newValue) => setKeyword(newValue)} />

      <div className="header__profile">
        <FontAwesomeIcon icon={faUser} className="header__icon" />
        <span>Francisco M.</span>
      </div>
    </header>
  );
}
