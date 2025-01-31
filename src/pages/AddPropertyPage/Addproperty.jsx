import React from 'react'
import DashbordWrapper from '../../Components/DashBordWrapper/index';
import './Addproperty.css';
import AddPropertyForm from '../../Components/AddProperty/AddPropertyForm';


function Addproperty() {
  return (
    <DashbordWrapper>
        <div className="flex-center" style={{height:'80vh'}}>
            <div className="addform">
                <AddPropertyForm/>
            </div>
        </div>
    </DashbordWrapper>
  )
}
export default Addproperty
