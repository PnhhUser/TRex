import Logo from "./logo";

export default function Header() {
  return (
    <div className="flex w-full">
      <div className="w-1/2 h-[56px] flex items-center">
        <Logo />
      </div>
      <div className="w-1/2 flex items-center justify-end"></div>
    </div>
  );
}
