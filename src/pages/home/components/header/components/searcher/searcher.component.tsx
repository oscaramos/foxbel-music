import { Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./searcher.styles.scss";

type FormValues = {
  searcher: string;
};

type Props = {
  value: string;
  onSubmit: (newValue: string) => void;
};

export function Searcher({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmitInternal: SubmitHandler<FormValues> = (data) => {
    onSubmit(data.searcher);
  };

  return (
    <div className="searcher">
      <Form onSubmit={handleSubmit(onSubmitInternal)}>
        <Form.Group controlId="searcher">
          <Form.Control
            type="text"
            name="searcher"
            placeholder="Buscar"
            className="searcher__input"
            ref={register}
          />
        </Form.Group>
      </Form>

      <FontAwesomeIcon icon={faSearch} className="searcher__append" />
    </div>
  );
}
