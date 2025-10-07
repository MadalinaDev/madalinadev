"use client";


const Header = ({handleClick}: {handleClick: (id: string) => void}) => {

  const sections = [
    {
      id: "whoami",
      name: "Who Am I",
    },
    {
      id: "experience",
      name: "Experience",
    },
    {
      id: "skills",
      name: "Skills",
    },
    {
      id: "projects",
      name: "Projects",
    },
    {
      id: "contact",
      name: "Contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 flex flex-row items-center justify-between bg-gray-100/50 px-24 py-2 md:px-36">
      <div className="text-md sticky left-4 font-mono font-semibold text-gray-400/80">
        {"<madalina.dev/>"}
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-x-6">
        {sections.map((s) => (
          <button
            key={s.id}
            className="group relative overflow-hidden px-3 py-2 hover:cursor-pointer hover:text-gray-400"
            onClick={() => {
              console.log("clicked: ", s.id);
              handleClick(s.id);
            }}
          >
            <span className="relative z-10">{s.name}</span>
            <div className="absolute bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 transform bg-current text-gray-300 transition-all duration-500 group-hover:w-[80%]"></div>{" "}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
