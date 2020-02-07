import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import { em } from '../css/units';
import Text from '../primitives/Text';
export const P = forwardRef(({ style, ...props }, ref) => {
    return <Text {...props} style={[styles.p, style]} ref={ref}/>;
});
export const B = forwardRef(({ style, ...props }, ref) => {
    return <P {...props} style={[styles.b, style]} ref={ref}/>;
});
export const Strong = B;
const styles = StyleSheet.create({
    p: {
        marginVertical: em(1),
        fontSize: em(1),
    },
    b: {
        fontWeight: 'bold',
    },
});
//# sourceMappingURL=Text.js.map