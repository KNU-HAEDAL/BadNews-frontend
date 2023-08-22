import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../components/Sidebar';
import '../components/Contents/CategoriesResult';
import ReturnArticles from './Categories/returnArticles';
import { useLocation, Route,Routes } from 'react-router-dom';

const title = '상온 초전도체??? 대박일까?';


const header_height = '101px';

const ReturnPage = () => {
    const [txtvalue,settxtValue] = useState("변경전");

    function propFunction(text){
        settxtValue(text);
    }
    return (
        <div className="MainPage" style={{display: 'flex', justifyContent: 'space-between', 
                                            height: `calc(100% - ${header_height})`}}>
            <Sidebar propFunction = {propFunction} />
            <ReturnArticles title1={txtvalue} />
            
        </div>
    );
};

export default ReturnPage;
