import { SvgXml } from "react-native-svg";
import { styles } from './styles';

export const Clipboard = () => {

    const clipboard = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="56" height="56" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_43_191" transform="scale(0.01)"/>
    </pattern>
    <image id="image0_43_191" width="100" height="100" xlink:href="data:image/png;base64,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"/>
    </defs>
    </svg>`; 

    return <SvgXml style={styles.clip} xml={clipboard} width="50" height="50" />
    
}