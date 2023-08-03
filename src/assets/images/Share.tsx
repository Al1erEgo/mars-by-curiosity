import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type SvgProps = {
    stroke?: string
}

export default function Share ({stroke = 'black'}: SvgProps) {
    return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
        <Path d="M12.0215 2.19051V14.2315" stroke={stroke} stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
        <Path d="M9.10632 5.11884L12.0213 2.19084L14.9373 5.11884" stroke={stroke} stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"/>
        <Path
            d="M7.5 9H7C5.89543 9 5 9.89543 5 11V19.5C5 20.6046 5.89543 21.5 7 21.5H17C18.1046 21.5 19 20.6046 19 19.5V11C19 9.89543 18.1046 9 17 9H16.5"
            stroke={stroke} stroke-width="1.5" stroke-linecap="round"/>
    </Svg>
    )
}