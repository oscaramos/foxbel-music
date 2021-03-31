import { Form } from "react-bootstrap";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./searcher.styles.scss";

type Props = {
  value?: string;
  onChange?: (newValue: string) => void;
};

export function Searcher({ value, onChange }: Props) {
  return (
    <div className="searcher">
      <Form>
        <Form.Group controlId="searcher">
          <Form.Control
            type="text"
            placeholder="Buscar"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="searcher__input"
          />
        </Form.Group>
      </Form>

      <FontAwesomeIcon icon={faSearch} className="searcher__append" />
    </div>
  );
}
