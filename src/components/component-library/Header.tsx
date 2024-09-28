export interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="flex h-20 w-full flex-row content-center border-b border-solid border-[#E7E9EF] bg-white px-4">
      {children}
    </header>
  );
}
