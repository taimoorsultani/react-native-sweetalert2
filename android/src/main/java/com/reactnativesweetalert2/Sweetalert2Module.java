package com.reactnativesweetalert2;

import android.graphics.Color;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;

import java.util.Objects;

import taimoor.sultani.sweetalert2.Sweetalert;

@ReactModule(name = Sweetalert2Module.NAME)
public class Sweetalert2Module extends ReactContextBaseJavaModule {
  public static final String NAME = "Sweetalert2";

  private Sweetalert sweetalert;

  public Sweetalert2Module(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  /* Init Sweetalert */
  @ReactMethod
  public void initAlert() {
    sweetalert = new Sweetalert(Objects.requireNonNull(getCurrentActivity()));
  }

  /* Show Sweetalert */
  @ReactMethod
  public void showAlert(ReadableMap options, final Callback acceptCallback, final Callback cancelCallback) {
    sweetalert = new Sweetalert(Objects.requireNonNull(getCurrentActivity()));
    /* Get all params from option */
    String type = options.hasKey("type") ? options.getString("type") : "normal";
    String title = options.hasKey("title") ? options.getString("title") : "";
    String contentText = options.hasKey("subTitle") ? options.getString("subTitle") : "";
    String barColor = options.hasKey("barColor") ? options.getString("barColor") : "";
    boolean cancellable = !options.hasKey("cancellable") || options.getBoolean("cancellable");
    boolean dismissOnClick = !options.hasKey("dismissOnClick") || options.getBoolean("dismissOnClick");
    boolean showConfirmButton = !options.hasKey("showConfirmButton") || options.getBoolean("showConfirmButton");
    boolean showCancelButton = !options.hasKey("showCancelButton") || options.getBoolean("showCancelButton");
    boolean showContentText = !options.hasKey("showContentText") || options.getBoolean("showContentText");

    String confirmButtonText = options.hasKey("confirmButtonText") ? options.getString("confirmButtonText") : "";
    String cancelButtonText = options.hasKey("cancelButtonText") ? options.getString("cancelButtonText") : "";
    String confirmButtonTextColor = options.hasKey("confirmButtonTextColor") ? options.getString("confirmButtonTextColor") : "";
    String cancelButtonTextColor = options.hasKey("cancelButtonTextColor") ? options.getString("cancelButtonTextColor") : "";
    String confirmButtonBackgroundColor = options.hasKey("confirmButtonBackgroundColor") ? options.getString("confirmButtonBackgroundColor") : "";
    String cancelButtonBackgroundColor = options.hasKey("cancelButtonBackgroundColor") ? options.getString("cancelButtonBackgroundColor") : "";

    int titleSize = options.hasKey("titleSize") ? options.getInt("titleSize") : 16;
    int subTitleSize = options.hasKey("subTitleSize") ? options.getInt("subTitleSize") : 14;

    setType(type == null ? "normal" : type);
    setTitle(title);
    setContentText(contentText);
    setCancelable(cancellable);
    setBarColor(barColor == null ? "" : barColor);
    showConfirmButton(showConfirmButton);
    showCancelButton(showCancelButton);
    setConfirmButtonText(confirmButtonText);
    setCancelButtonText(cancelButtonText);
    if (showConfirmButton && acceptCallback != null) {
      setConfirmCallback(acceptCallback, dismissOnClick);
    }
    if (showCancelButton && cancelCallback != null) {
      setCancelCallback(cancelCallback, dismissOnClick);
    }
    setConfirmButtonTextColor(confirmButtonTextColor);
    setCancelButtonTextColor(cancelButtonTextColor);
    setConfirmButtonBackgroundColor(confirmButtonBackgroundColor);
    setCancelButtonBackgroundColor(cancelButtonBackgroundColor);
    setTitleSize(titleSize);
    setSubTitleSize(subTitleSize);
    showContentText(showContentText);
    show();
  }

  /* Set alert type */
  @ReactMethod
  public void setType(String type) {
    switch (type) {
      case "error":
        sweetalert.changeAlertType(Sweetalert.ERROR_TYPE);
        break;
      case "success":
        sweetalert.changeAlertType(Sweetalert.SUCCESS_TYPE);
        break;
      case "warning":
        sweetalert.changeAlertType(Sweetalert.WARNING_TYPE);
        break;
      case "progress":
        sweetalert.changeAlertType(Sweetalert.PROGRESS_TYPE);
        break;
      case "normal":
      default:
        sweetalert.changeAlertType(Sweetalert.NORMAL_TYPE);
        break;
    }
  }

  /* Dismiss Alert */
  @ReactMethod
  public void dismiss() {
    sweetalert.dismissWithAnimation();
  }

  /* Show Alert */
  @ReactMethod
  public void show() {
    sweetalert.show();
  }

  /* Set alert title */
  @ReactMethod
  public void setTitle(String title) {
    sweetalert.setTitle(title);
  }

  /* Set alert subTitle */
  @ReactMethod
  public void setContentText(String subTitle) {
    sweetalert.setContentText(subTitle);
  }

  /* Set alert cancelable */
  @ReactMethod
  public void setCancelable(boolean isCancellable) {
    sweetalert.setCancelable(isCancellable);
  }

  /* Set progress alert barColor */
  @ReactMethod
  public void setBarColor(String barColor) {
    if (!barColor.equals("")) {
      sweetalert.getProgressHelper().setBarColor(Color.parseColor(barColor));
    }
  }

  /* Change visibility confirm button */
  @ReactMethod
  public void showConfirmButton(boolean isVisible) {
    sweetalert.showConfirmButton(isVisible);
  }

  /* Change visibility cancel button */
  @ReactMethod
  public void showCancelButton(boolean isVisible) {
    sweetalert.showCancelButton(isVisible);
  }

  /* Set alert confirm button text */
  @ReactMethod
  public void setConfirmButtonText(String text) {
    sweetalert.setConfirmText(text);
  }

  /* Set alert cancel button text */
  @ReactMethod
  public void setCancelButtonText(String text) {
    sweetalert.setCancelText(text);
  }

  /* Set alert confirm callback */
  @ReactMethod
  public void setConfirmCallback(final Callback acceptCallback, boolean dismissOnClick) {
    sweetalert.setConfirmClickListener(sweetAlertDialog -> {
      if (acceptCallback != null) {
        acceptCallback.invoke("accepted");
      }
      if (dismissOnClick && sweetAlertDialog.isShowing()) {
        dismiss();
      }
    });
  }

  /* Set alert confirm callback */
  @ReactMethod
  public void setCancelCallback(final Callback cancelCallback, boolean dismissOnClick) {
    sweetalert.setCancelClickListener(sweetAlertDialog -> {
      if (cancelCallback != null) {
        cancelCallback.invoke("accepted");
      }
      if (dismissOnClick && sweetAlertDialog.isShowing()) {
        dismiss();
      }
    });
  }

  /* Set confirm button text color */
  @ReactMethod
  public void setConfirmButtonTextColor(String confirmButtonTextColor) {
    if (confirmButtonTextColor != null && !confirmButtonTextColor.equals("")) {
      sweetalert.setConfirmButtonTextColor(confirmButtonTextColor);
    }
  }

  /* Set cancel button text color */
  @ReactMethod
  public void setCancelButtonTextColor(String cancelButtonTextColor) {
    if (cancelButtonTextColor != null && !cancelButtonTextColor.equals("")) {
      sweetalert.setCancelButtonTextColor(cancelButtonTextColor);
    }
  }

  /* Set confirm button background color */
  @ReactMethod
  public void setConfirmButtonBackgroundColor(String confirmButtonBackgroundColor) {
    if (confirmButtonBackgroundColor != null && !confirmButtonBackgroundColor.equals("")) {
      sweetalert.setConfirmButtonBackgroundColor(confirmButtonBackgroundColor);
    }
  }

  /* Set cancel button background color */
  @ReactMethod
  public void setCancelButtonBackgroundColor(String cancelButtonBackgroundColor) {
    if (cancelButtonBackgroundColor != null && !cancelButtonBackgroundColor.equals("")) {
      sweetalert.setCancelButtonBackgroundColor(cancelButtonBackgroundColor);
    }
  }

  /* Set title text size */
  @ReactMethod
  public void setTitleSize(int size) {
    sweetalert.setTitleTextSize(size);
  }

  /* Set subTitle text size */
  @ReactMethod
  public void setSubTitleSize(int size) {
    sweetalert.setContentTextSize(size);
  }

  @ReactMethod
  public void showContentText(boolean show) {
    sweetalert.showContentText(show);
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(int a, int b, Promise promise) {
    promise.resolve(a * b * 2);
  }
}
