import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Sweetalert2 from 'react-native-sweetalert2';

const App = () => {
  const loadingDialog = (): void => {
    Sweetalert2.showAlert(
      {
        type: 'progress',
        title: 'LOADING',
        subTitle: 'Please wait...',
        barColor: '',
        cancellable: true,
        dismissOnClick: true,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'OKAY',
        cancelButtonText: 'CLOSE',
        confirmButtonTextColor: '',
        cancelButtonTextColor: '',
        confirmButtonBackgroundColor: '',
        cancelButtonBackgroundColor: '',
        titleSize: 16,
        subTitleSize: 14,
        showContentText: false,
      },
      acceptCallback,
      cancelCallback
    );
    setToSuccess();
  };

  const setToSuccess = () => {
    setTimeout(() => {
      Sweetalert2.setType('success');
      Sweetalert2.setTitle('YAHOOOOO!');
      Sweetalert2.setContentText('Request Completed');
      Sweetalert2.showCancelButton(true);
      Sweetalert2.showConfirmButton(true);
      setToError();
    }, 1500);
  };

  const setToError = () => {
    setTimeout(() => {
      Sweetalert2.setType('error');
    }, 1500);
  };

  const simpleAlert = (): void => {
    Sweetalert2.showAlert(
      {
        type: 'success',
        title: 'Hi, Title',
        subTitle: 'Simple Sweetalert2',
        barColor: '',
        cancellable: false,
        dismissOnClick: true,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirm Text',
        cancelButtonText: 'Cancel Button',
        confirmButtonTextColor: '',
        cancelButtonTextColor: '',
        confirmButtonBackgroundColor: '',
        cancelButtonBackgroundColor: '',
        titleSize: 16,
        subTitleSize: 14,
        showContentText: false,
      },
      acceptCallback,
      cancelCallback
    );
  };

  const customTitleAndSubtitleSize = (): void => {
    Sweetalert2.showAlert(
      {
        type: 'success',
        title: 'Custom Sweetalert2',
        subTitle: 'Custom title & subtitle size',
        barColor: '',
        cancellable: false,
        dismissOnClick: true,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirm Text',
        cancelButtonText: 'Cancel Button',
        confirmButtonTextColor: '',
        cancelButtonTextColor: '',
        confirmButtonBackgroundColor: '',
        cancelButtonBackgroundColor: '',
        titleSize: 20,
        subTitleSize: 18,
        showContentText: false,
      },
      acceptCallback,
      cancelCallback
    );
  };

  const customButtonTextColor = (): void => {
    Sweetalert2.showAlert(
      {
        type: 'success',
        title: 'Custom Sweetalert2',
        subTitle: 'Custom Button text & background colors',
        barColor: '',
        cancellable: false,
        dismissOnClick: true,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirm Text',
        cancelButtonText: 'Cancel Button',
        titleSize: 16,
        subTitleSize: 13,
        confirmButtonTextColor: '#303030',
        cancelButtonTextColor: '#303030',
        confirmButtonBackgroundColor: '#F0F0F0',
        cancelButtonBackgroundColor: '#F0F0F0',
        showContentText: false,
      },
      acceptCallback,
      cancelCallback
    );
  };

  const styledTitleSubTitle = (): void => {
    Sweetalert2.showAlert(
      {
        type: 'success',
        title:
          '<font color="red">Red</font> <font color="blue">Blue</font> title',
        subTitle:
          'Big <font color="green">green </font><b> bold</b><i> italic</i><b><i> bold italic</i></b>',
        barColor: '',
        cancellable: false,
        dismissOnClick: true,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirm Text',
        cancelButtonText: 'Cancel Button',
        titleSize: 16,
        subTitleSize: 13,
        confirmButtonTextColor: '',
        cancelButtonTextColor: '',
        confirmButtonBackgroundColor: '',
        cancelButtonBackgroundColor: '',
        showContentText: false,
      },
      acceptCallback,
      cancelCallback
    );
  };

  const acceptCallback = () => {
    console.log('Accept Callback');
  };

  const cancelCallback = () => {
    console.log('Cancel Callback');
  };

  const deleteConfirmation = () => {
    Sweetalert2.showAlert(
      {
        type: 'warning',
        title: 'ARE YOU SURE?',
        subTitle:
          'Are you sure to <font color="red">delete</font> this file?<br/><b>This action cannot be rollbacked.</b>',
        barColor: '',
        cancellable: true,
        dismissOnClick: false,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'YES, Delete',
        cancelButtonText: 'NO, Cancel',
        titleSize: 16,
        subTitleSize: 13,
        confirmButtonTextColor: '',
        cancelButtonTextColor: '',
        confirmButtonBackgroundColor: '',
        cancelButtonBackgroundColor: '',
        showContentText: false,
      },
      deleteConfirm,
      deleteCancel
    );
  };

  const deleteConfirm = () => {
    Sweetalert2.setType('progress');
    Sweetalert2.setTitle('DELETING');
    Sweetalert2.setContentText('Please wait...');
    setTimeout(() => {
      Sweetalert2.setType('success');
      Sweetalert2.setTitle('DELETED');
      Sweetalert2.setContentText('Your imaginary file has been deleted');
      Sweetalert2.showCancelButton(false);
      Sweetalert2.setConfirmButtonText('OKAY');
      // Sweetalert2.setConfirmCallback(acceptCallback, true);
    }, 1500);
  };

  const deleteCancel = () => {
    Sweetalert2.setType('error');
    Sweetalert2.setTitle('CANCELLED');
    Sweetalert2.setContentText('Your imaginary file is safe. Nothing happened');
    Sweetalert2.showCancelButton(false);
    Sweetalert2.setConfirmButtonText('OKAY');
    // Sweetalert2.setConfirmCallback(acceptCallback, true);
  };

  const alertWithoutButtons = () => {
    Sweetalert2.initAlert();
    Sweetalert2.setTitle('HELLO ALERT');
    Sweetalert2.setTitleSize(15);
    Sweetalert2.setContentText('Subtitle goes here');
    Sweetalert2.setSubTitleSize(12);
    Sweetalert2.showConfirmButton(false);
    Sweetalert2.showCancelButton(false);
    Sweetalert2.show();
  };

  return (
    <View style={styles.container}>
      <CustomButton title={'Loading Dialog'} onButtonPress={loadingDialog} />
      <CustomButton title={'Simple Sweetalert2'} onButtonPress={simpleAlert} />
      <CustomButton
        title={'Custom Title & Subtitle Size'}
        onButtonPress={customTitleAndSubtitleSize}
      />
      <CustomButton
        title={'Custom Button text & background colors'}
        onButtonPress={customButtonTextColor}
      />
      <CustomButton
        title={'Styled Title & Subtitle'}
        onButtonPress={styledTitleSubTitle}
      />
      <CustomButton
        title={'Delete Confirmation'}
        onButtonPress={deleteConfirmation}
      />
      <CustomButton
        title={'Alert without buttons'}
        onButtonPress={alertWithoutButtons}
      />
    </View>
  );
};

interface CustomButtonProps {
  onButtonPress: () => void;
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onButtonPress,
  title,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onButtonPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    borderColor: '#F0F0F0',
    backgroundColor: '#F0F0F0',
    borderWidth: 3,
  },
});

export default App;
