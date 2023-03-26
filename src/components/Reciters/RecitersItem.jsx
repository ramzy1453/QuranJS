import { Link } from "react-router-dom";

export default function RecitersItem({ reciter }) {
  return (
    <Link
      to={`/reciters/${reciter.identifier} `}
      className="toggle cursor-pointer h-16 px-6 text-center flex items-center justify-center border dark:border-white rounded dark:text-white border-black text-black hover:border-[#D4AF37] group"
    >
      <div className="group-hover:text-[#D4AF37]">{reciter.name}</div>
    </Link>
  );
}
