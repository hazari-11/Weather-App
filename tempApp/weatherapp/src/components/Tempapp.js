import React,{useEffect, useState} from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Dhanbad");

    useEffect( () =>{
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c9c0fe8cd97f3df3b55ff145693ada62`
            const response =await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();
    },[search] )

    return(
        <>
        <div className="box">
            <div className="inputData">
                <input
                type="search"
                value={search}
                className="inputField" 
                onChange={(event) =>{
                    setSearch(event.target.value)
                }}/>
            </div>

        {
            !city ? (
                <p className="errorMsg"> No Data Found </p>
            ) : ( 
                <div>

        <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">
                {city.temp}℃
            </h1>
            <h3 className="tempmin_max">
                Min : {city.temp_min}℃ | Max : {city.temp_min}℃</h3>
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
            )}
        </div>
        </>
    )
}

export default Tempapp;

