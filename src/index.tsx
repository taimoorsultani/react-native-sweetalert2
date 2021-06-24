/**
 * @providesModule Sweetalert2
 * @author Muhammad Taimoor Sultani
 * @flow
 */

import { NativeModules } from 'react-native';

const { Sweetalert2 } = NativeModules;

interface Sweetalert2Options {
  type: string;
  title: string;
  subTitle: string;
  barColor: string;
  cancellable: boolean;
  dismissOnClick: boolean;
  showConfirmButton: boolean;
  showCancelButton: boolean;
  confirmButtonText: string;
  cancelButtonText: string;
  confirmButtonTextColor: string;
  cancelButtonTextColor: string;
  confirmButtonBackgroundColor: string;
  cancelButtonBackgroundColor: string;
  titleSize: number;
  subTitleSize: number;
  showContentText: boolean;
}

type Sweetalert2Type = {
  initAlert(): void;
  showAlert(
    options: Sweetalert2Options,
    acceptCallback: Function,
    cancelCallback: Function
  ): Promise<Object>;
  setType(type: string): void;
  dismiss(): void;
  show(): void;
  setTitle(title: string): void;
  setContentText(subTitle: string): void;
  setCancelable(isCancellable: boolean): void;
  setBarColor(barColor: string): void;
  showConfirmButton(show: boolean): void;
  showCancelButton(show: boolean): void;
  setConfirmButtonText(text: string): void;
  setCancelButtonText(text: string): void;
  setConfirmCallback(acceptCallback: Function, dismissOnClick: boolean): void;
  setCancelCallback(cancelCallback: Function, dismissOnClick: boolean): void;
  setConfirmButtonTextColor(color: string): void;
  setCancelButtonTextColor(color: string): void;
  setConfirmButtonBackgroundColor(color: string): void;
  setCancelButtonBackgroundColor(color: string): void;
  setTitleSize(size: number): void;
  setSubTitleSize(size: number): void;
  showContentText(show: boolean): void;
};

export default Sweetalert2 as Sweetalert2Type;
