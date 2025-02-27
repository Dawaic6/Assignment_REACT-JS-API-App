import React,{memo} from "react";

const MemorizedComplement = () => {
    return (
        <div>
          <p>{data.message}</p>
          {/*Render other components based on data */}
        </div>
    );
}
export default memo(MemorizedComplement);