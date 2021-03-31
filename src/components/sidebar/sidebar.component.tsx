import "./sidebar.styles.scss";
import { ReactNode } from "react";
import LogoImage from "../../assets/logos/imagotype/foxbel-music.png";

type Props = {
  children: ReactNode;
};

export function Sidebar({ children }: Props) {
  return (
    <>
      <aside className="sidebar">
        <img src={LogoImage} alt="Logo" className="sidebar__logo" />

        <div className="sidebar__list">
          <h6 className="sidebar__title">Mi librería</h6>
          <div>
            <div className="sidebar__item selected">Recientes</div>
            <div className="sidebar__item">Artistas</div>
            <div className="sidebar__item">Albums</div>
            <div className="sidebar__item">Canciones</div>
            <div className="sidebar__item">Estaciones</div>
          </div>
        </div>

        <div className="sidebar__list">
          <h6 className="sidebar__title">Playlist</h6>
          <div>
            <div className="sidebar__item">Metal</div>
            <div className="sidebar__item">Para bailar</div>
            <div className="sidebar__item">Rock 90s</div>
            <div className="sidebar__item">Baladas</div>
          </div>
        </div>
      </aside>

      <div className="page">{children}</div>
    </>
  );
}
