// We aren't adding any unique prop to this component, so it's okay to use an emtpy object type
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LayoutCardProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * A card for content that bleeds to the edge on mobile, but has fixed width on larger screen sizes.
 */
export const LayoutCard = ({ className, ...rest }: LayoutCardProps) => (
  <div
    className={`md:max-w-144 border-default w-full border-b border-solid bg-white px-8 md:rounded-2xl md:border-b-0 md:px-12 md:py-4 ${className}`}
    {...rest}
  />
);
