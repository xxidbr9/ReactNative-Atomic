import { RFPercentage as rPer } from "react-native-responsive-fontsize";

/* 
 ? it is tested on iphone 8 plus 
 ? [ ] Need to tested an android device 
 */

/**
* A module for sizing text unit, it base on Aroma Design Typograph System
* @module use all above sizing, base on screen width
*/
const obj = {
    h1: rPer(6.8), // 23
    h2: rPer(5), // 20
    h3: rPer(3.8), // 18
    h4: rPer(2.9), // 16
    h5: rPer(2.2), // 14
    h6: rPer(1.6) // 12
}

// console.log(obj)
export default obj
// export default {
//     h1: rPer(3.1), // 23
//     h2: rPer(2.8), // 20
//     h3: rPer(2.4), // 18
//     h4: rPer(2.2), // 16
//     h5: rPer(1.9), // 14
//     h6: rPer(1.6) // 12
// };
