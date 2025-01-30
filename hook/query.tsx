import React, { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
export default function hook() {
    const urlData = useLocation();
    if(!urlData.search || urlData.search == '?') return {};
    // ?a=b&c=d -> a=b&c=d -> [a=b, c=d] -> [[a,b],[c,d]]
    const datas = urlData.search.substring(1).split('&').map(v=>v.split("="));
    let result:any = {};
    for(let data of datas) {
        result[data[0]] = 
        parseInt(data[1]) ? parseInt(data[1]) : 
        (
            parseFloat(data[1]) ? parseFloat(data[1]) : 
            result[data[0]] = data[1]
        );
    }
    return result;
}