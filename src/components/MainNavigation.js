import { NavLink } from "react-router-dom";
import Button from "@mui/joy/Button";
import classes from "./MainNavigation.module.css";
import CV from "../img/CV.pdf";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav style={{ display: "flex" }}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div style={{ paddingLeft: "1rem" }}>
          <Button
            color="success"
            disabled={false}
            loading={false}
            onClick={function () {}}
            size="lg"
            variant="soft"
            style={{ borderRadius: "20px", padding: "1rem" }}
          >
            <a
              style={{ textDecoration: "none", color: "rgb(2,78,68)" }}
              href={CV}
              download="CV.pdf"
            >
              Resume
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
