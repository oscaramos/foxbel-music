import { ReactNode, useEffect, useState } from "react";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LogoImage from "../../assets/logos/imagotype/foxbel-music.png";

import { useBreakpoint } from "../../hooks/breakpoint.hook";

import "./sidebar.styles.scss";

type Props = {
  children: ReactNode;
};

export function Sidebar({ children }: Props) {
  const breakpoint = useBreakpoint();

  const [collapsed, setCollapsed] = useState(false);

  const [width, setWidth] = useState(250);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  useEffect(() => {
    if (breakpoint === "sm" || breakpoint === "xs") {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [breakpoint]);

  useEffect(() => {
    if (collapsed) {
      setWidth(80);
    } else {
      setWidth(250);
    }
  }, [collapsed]);

  return (
    <>
      <aside className="sidebar" style={{ width }}>
        {collapsed ? (
          <div className="sidebar__collapsed">
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              color="white"
              onClick={toggleCollapsed}
              className="sidebar__collapsed-bars"
            />
          </div>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faTimes}
              size="lg"
              color="white"
              onClick={toggleCollapsed}
              className="sidebar__close"
            />

            <img src={LogoImage} alt="Logo" className="sidebar__logo" />

            <div className="sidebar__list">
              <h6 className="sidebar__title">Mi librería</h6>
              <div>
                <div className="sidebar__item">Recientes</div>
                <div className="sidebar__item">Artistas</div>
                <div className="sidebar__item">Albums</div>
                <div className="sidebar__item selected">Canciones</div>
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
          </>
        )}
      </aside>

      <div className="page" style={{ paddingLeft: width }}>
        {children}
      </div>
    </>
  );
}
