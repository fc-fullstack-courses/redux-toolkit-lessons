import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import { setTheme } from '../../store/slices/themeSlice';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
const { THEMES } = CONSTANTS;

function Header(props) {
  const theme = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const className = cx(styles.header, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHTL,
  });

  return (
    <header className={className}>
      <h1>My Site</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navListItem}>
            <Link to="/registration">Register</Link>
          </li>
          <li className={styles.navListItem}>
            <Link to="/login">Login</Link>
          </li>
          <li className={styles.navListItem}>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button onClick={() => dispatch(setTheme())}>Switch Theme</button>
        {user && <p>Hello {user.nickName}</p>}
      </div>
    </header>
  );
}

export default Header;
