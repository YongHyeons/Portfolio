import React from 'react'; // React를 임포트
import { useToggle } from '../hook'; // 커스텀 훅(useToggle)을 외부에서 임포트

// 컴포넌트의 Props 타입 정의
interface Props {
    className?:string, // className은 선택적 문자열
    style?:any,  // style은 임의의 스타일 객체
    children:JSX.Element | JSX.Element[] | string // children은 JSX 엘리먼트, JSX 엘리먼트 배열, 또는 문자열일 수 있음
}

// 커스텀 훅을 정의하는 함수. 'div' 또는 'span' 태그 중 하나를 인자로 받음
export default function hook(
    tagName:'div'|'span' // 'div' 또는 'span' 태그를 매개변수로 받음
) {
    const { value, Toggle } = useToggle(); // useToggle 훅을 사용하여 value와 Toggle 함수 가져옴
    return function (props:Props) { // 해당 함수는 컴포넌트를 반환하는 또 다른 함수를 리턴
        if(tagName == 'div') { // tagName이 'div'인 경우
            return <div className={props.className} style={props.style} onClick={(e)=>{
                if(e.target == e.currentTarget) // 클릭된 대상이 div 자체인지 확인
                    Toggle(); // Toggle 함수를 호출하여 value 상태를 토글
            }}>
                <div style={{
                    display:value ? "block" : "none" // value 값에 따라 자식 요소 표시 여부 결정    
                }}>{props.children}</div> 
            </div>
        } else if(tagName == 'span') {
            return <span className={props.className} style={props.style} onClick={(e)=>{
                if(e.target == e.currentTarget)
                    Toggle();
            }}>
                <span style={{
                    display:value ? "block" : "none"
                }}>{props.children}</span>
            </span>
        }
    };
}