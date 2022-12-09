import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import { setTheme } from '../../store/slices/themeSlice';
import styles from './Header.module.scss';
const { THEMES } = CONSTANTS;

function Header(props) {
  const theme = useSelector((state) => state.theme);
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
          <li className={styles.navListItem}>Link 1</li>
          <li className={styles.navListItem}>Link 2</li>
          <li className={styles.navListItem}>Link 3</li>
        </ul>
      </nav>
      <div>
        <button onClick={() => dispatch(setTheme())}>Switch Theme</button>
      </div>
    </header>
  );
}

export default Header;
