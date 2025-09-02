import BurgerMenu from "./BurgerMenu";
import Title from "./Title";
import NavBar from "./NavBar";
import NavItem from "./NavItem";

// Fuer themed Header spaeter farbe als prop und weitergeben
export default function Header({ toggleSideMenu }) {
  return (
    <header
      className="bg-secondary
                  fixed top-0 left-0 right-0
                  h-20"
    >
      {/* Fur advaced header die elemente in extras div wrappen*/}
      <div
        className="relative
                            flex items-center justify-center
                            h-full pl-3 lg:px-15"
      >
        {/* BurgerMenu soll sich nicht selber positionieren */}
        <div className="absolute left-3 lg:hidden ">
          <BurgerMenu toggleSideMenu={toggleSideMenu}></BurgerMenu>
        </div>
        {/* Title wird hier bei kleinen screen abosult ohne navbar plaziert */}
        <div className="absolute lg:max-w-6xl lg:static lg:flex flex-1 lg:justify-between">
          <Title></Title>
          {/* NavBar soll sich nicht selber positionieren */}
          <div className="hidden lg:block">
            <NavBar>
              <NavItem text={"About"} to={"/about"} disabled={false}></NavItem>
              <NavItem text={"Feedback"} to={""} disabled={true}></NavItem>
            </NavBar>
          </div>
        </div>
      </div>
    </header>
  );
}
