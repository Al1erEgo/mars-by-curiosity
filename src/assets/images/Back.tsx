import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type SvgProps = {
    stroke?: string
}

export default function Back ({stroke = 'black'}: SvgProps) {
    return (
        <Svg width="7" height="13" viewBox="0 0 7 13" fill="none">
            <Path d="M5.5 1.5L1.20711 5.79289C0.816582 6.18342 0.816582 6.81658 1.20711 7.20711L5.5 11.5" stroke={stroke} stroke-width="1.5" stroke-linecap="round"/>
        </Svg>

    )
}