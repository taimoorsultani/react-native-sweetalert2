import { NativeModules } from 'react-native';

type Sweetalert2Type = {
  multiply(a: number, b: number): Promise<number>;
};

const { Sweetalert2 } = NativeModules;

export default Sweetalert2 as Sweetalert2Type;
