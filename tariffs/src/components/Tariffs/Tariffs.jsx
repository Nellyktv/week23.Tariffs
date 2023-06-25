import React from "react";
import "./Tariffs.scss";


class Tariffs extends React.Component{
render(){
const {name,theme_nameTariff ,theme_tariff, price, speed, isSelected}= this.props;
    
let classCard='';
if(isSelected) classCard="selected";
    
return(   
<div className={`container-tariff  ${classCard}`}>
    <p className={theme_nameTariff}>Безлимитный {name}</p>
    <div className={theme_tariff} >
        <div className="tariff_rub">руб.</div>
        <div className="tariff_price">{price}</div>
        <div className="tariff_month">/мес</div>
    </div>
    <div className='speedStyle blocks_nameTariff'>до {speed} Мбит/сек </div>
    <div className="volumeTraffic">
        <p>Объем включенного трафика не ограничен</p>
    </div>
</div>
);}}

export default Tariffs ;
