import { burgerIconPath } from "../assets/data/iconPath";

export default function BurgerMenu({ toggleSideMenu }) {
  return (
    <button onClick={toggleSideMenu} className="">
      <svg
        className="fill-primary
                   size-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        {/*Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license/free Copyright 2025
          Fonticons, Inc.*/}
        <path d={burgerIconPath} />
      </svg>
    </button>
  );
}
