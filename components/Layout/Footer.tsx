export type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center mt-[5%]">
        <div className="flex flex-col items-center justify-center">
          <p className="poppins-medium text-sm md:text-lg text-primary text-center md:text-start">
            © 2024 <span className="poppins-bold">Tristan Hourtoulle</span>
          </p>
          <p className="poppins-medium text-sm md:text-lg text-primary text-center md:text-start order-first">
            Designed and built with ❤️ by Tristan Hourtoulle
          </p>
        </div>
      </div>
    </div>
  );
};
