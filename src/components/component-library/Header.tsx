// We aren't adding any unique prop to this component, so it's okay to use an emtpy object type
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      className={`flex h-20 w-full flex-row content-center border-b border-solid border-[#E7E9EF] bg-white px-4 ${className}`}
      {...rest}
    />
  );
}
