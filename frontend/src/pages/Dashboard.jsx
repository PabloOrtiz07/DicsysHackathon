import ChartOne from '../components/ChartOne.tsx';
import ChartThree from '../components/ChartThree.tsx';
import MapOne from '../components/MapOne.tsx';
import TableOne from '../components/TableOne.tsx';

export const Dashboard = () => {
    return (
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="columns-1 md:columns-2 gap-4 md:gap-6 2xl:gap-7.5">
                <ChartOne />
                <ChartThree />
            </div>
            <div className="columns-1 md:columns-2 gap-4 md:gap-6 2xl:gap-7.5">
                <MapOne />
                <div className="col-span-12 xl:col-span-8">
                    <TableOne />
                </div>
            </div>
        </div>
    )
}