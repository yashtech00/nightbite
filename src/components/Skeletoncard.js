import Skeleton from "react-loading-skeleton";

const Skeletoncard = () => {
    return (
        <>
            <div className="Mainbody">
                <div className="Onediv">

                    <Skeleton count={2} height={30} width={300}/>

                </div>
               

            </div>




        <div className="res-card">
            <Skeleton count={2} height={30} width={300}/>
            </div>
            </>
    );
};  