import RecitersItem from "./RecitersItem";
import { sort } from "fast-sort";
export default function RecitersList({ reciters }) {
  const sortedReciters = sort(reciters).asc(({ identifier }) => identifier);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {sortedReciters.map((reciter) => (
        <RecitersItem reciter={reciter} key={reciter.identifier} />
      ))}
    </div>
  );
}
