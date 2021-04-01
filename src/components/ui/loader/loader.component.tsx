import logo from "../../../assets/logos/isotype/foxbel-music-icon.png";

import "./loader.styles.scss";

type Props = {
  center?: boolean;
};

export function Loader({ center = false }: Props) {
  return (
    <img
      src={logo}
      alt="loader-logo"
      className={`loader__image${center ? " center" : ""}`}
    />
  );
}
