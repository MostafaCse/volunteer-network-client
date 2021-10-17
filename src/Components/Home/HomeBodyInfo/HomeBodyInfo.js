import React from 'react';
import './HomeBodyInfo.css';
const HomeBodyInfo = ({ info, i,btnHandle }) => {
    const colorCode = ['#ffbd3e', '#ff7044', '#3f90fc', '#421fcf', '#3f90fc', '#421fcf', '#ffbd3e', '#ff7044', '#ffbd3e', '#3f90fc', '#ff7044', '#421fcf', '#421fcf'
        , '#ffbd3e', '#ff7044', '#3f90fc'];

    const EventTitle = info.EventTitle;
    const imageInfo = info.Images.data;
    const normalImage = `data:image/jpeg;base64,${imageInfo}`;
    return (
        <div className="col-md-3 mt-3">
            <div>
                <img className="img-fluid" src={normalImage} alt="" />
                <button onClick={()=>btnHandle({EventTitle})} style={{ backgroundColor: `${colorCode[i]}` }} id="highlightBtn">{EventTitle}</button>
            </div>
        </div>
    );
};

export default HomeBodyInfo;