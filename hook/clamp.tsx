import React, { useState, useCallback } from 'react'; // React에서 useState와 useCallback 훅을 가져옴
export default function hook(
    min:number | 'infinite' = 0, // 최소값, 기본값은 0이며 숫자 또는 'infinite'로 설정 가능
    max:number | 'infinite' = 'infinite',  // 최대값, 기본값은 'infinite', 숫자 또는 'infinite' 가능
    now:number | 'min' | 'max' = 'min' // 현재 값의 초기 상태를 설정. 기본값은 'min'. 'min', 'max' 또는 숫자 가능
) {
    // 상태를 설정하는 useState. 'min', 'max', 또는 직접 숫자로 현재 값을 설정.
    const [value, valueChanger] = useState(
        now == 'min' ? (min != 'infinite' ? min : (max != 'infinite' ? max - 1 : 0)) // 'min'이면 min을 사용하되, min이 'infinite'면 max를 참고
        : (now == 'max' ? (max != 'infinite' ? max : (min != 'infinite' ? min + 1 : 0)) // 'max'이면 max를 사용하되, max가 'infinite'면 min을 참고
        : (now)) // 'min', 'max'가 아니면 현재 값을 그대로 사용
    );

    // 특정 값으로 상태를 업데이트하는 함수. 
    // useCallback을 사용해 메모이제이션하고, 비어있는 배열로 의존성을 설정해 최초 렌더링 후 함수가 재생성되지 않도록 함.
    const Update = useCallback((target:number)=>{
        if(min != 'infinite' && target < min) valueChanger(min); // target이 min보다 작으면 min으로 설정
        else if(max != 'infinite' && target > max) valueChanger(max); // target이 max보다 크면 max로 설정
        else valueChanger(target); // 그 외에는 target 값을 그대로 설정
    },[]);  // 빈 배열이므로, 이 함수는 컴포넌트가 처음 렌더링될 때 한 번만 생성됨

    // 증가 함수: 현재 값에 인자로 받은 increment를 더해 상태를 변경함.
    // useCallback의 두 번째 인자로 'value'를 설정해, value가 변경될 때마다 함수가 재생성되도록 함.
    const Increment = useCallback((increment:number)=>{
        if(max != 'infinite' && (value + increment) > max) valueChanger(max); // 값이 max를 넘으면 max로 설정
        else valueChanger(value + increment);  // 넘지 않으면 increment를 더해 값 변경
    },[value]); // value가 변경될 때마다 이 함수가 재생성됨

    // 감소 함수: 현재 값에 인자로 받은 decrement를 빼서 상태를 변경함.
    // useCallback의 두 번째 인자로 'value'를 설정해, value가 변경될 때마다 함수가 재생성되도록 함.
    const Decrement = useCallback((decrement:number)=>{
        if(min != 'infinite' && (value - decrement) < min) valueChanger(min); // 값이 min보다 작으면 min으로 설정
        else valueChanger(value - decrement); // 넘지 않으면 decrement를 빼서 값 변경
    },[value]); // value가 변경될 때마다 이 함수가 재생성됨

    // Hook에서 반환할 객체. 현재 상태값과 이를 업데이트하는 함수들(Update, Increment, Decrement)을 반환
    return {value, Update, Increment, Decrement};
}