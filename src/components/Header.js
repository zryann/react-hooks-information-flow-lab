// const Header = ({ onDarkModeClick, btnName }) => {
//   const clickHandler = () => {
//     onDarkModeClick((prev) => !prev);
//   };
//   return (
//     <header>
//       <h2>Shopster</h2>
//       <button onClick={clickHandler}>{btnName} Mode</button>
//     </header>
//   );
// };
// export default Header;
function Header({ onDarkModeClick, isDark }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDark ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
