interface LayoutCardProps {
  children: React.ReactNode;
}

/**
 * A card for content that bleeds to the edge on mobile, but has fixed width on larger screen sizes.
 */
export const LayoutCard = ({ children }: LayoutCardProps) => {
  return (
    <div className="md:w-144 w-full border-b border-solid border-[#E7E9EF] bg-white px-8 md:rounded-2xl md:border-b-0 md:px-12 md:py-4">
      {children}
    </div>
  );
};
