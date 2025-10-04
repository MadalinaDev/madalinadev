"use client";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-2">
      <div>madalina.dev</div>
      <div className="flex flex-row justify-around gap-x-6">
        <div>Who am I</div>{" "}
        <div>Projects</div>{" "}
      </div>
    </header>
  );
};

export default Header;
