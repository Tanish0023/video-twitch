import { getStreams } from "@/lib/feed-service";
import ResultsCard, { ResultsCardSkeleton } from "./results-card";
import { Skeleton } from "@/components/ui/skeleton";

const Results = async () => {
    const data = await getStreams();

    return ( 
        <div>
            <h2 className="text-lg font-semibold mb-4">
                Steams we think you&apos;ll like
            </h2>
            {data.length === 0 && (
                <div className="text-muted-foreground text-sm">
                    No streams found
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {data.map(( result ) => (
                    <ResultsCard 
                        key={result.id}
                        data={result}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Results;

export const ResultsSkeleton = () => {
    return ( 
        <div>
            <Skeleton className="h-8 w-[290px] mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {[...Array(4)].map((_,i) => (
                    <ResultsCardSkeleton key={i} />
                ))}
            </div>
        </div>
     );
}