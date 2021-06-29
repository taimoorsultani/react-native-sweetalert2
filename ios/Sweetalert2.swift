//
//  Sweetalert2.swift
//  Sweetalert2
//
//  Created by Muhammad Taimoor Sultani on 25/06/2021.
//  Copyright © 2021 Muhammad Taimoor Sultani. All rights reserved.
//

import Foundation

@objc(Sweetalert2)
class Sweetalert2: RCTViewManager {
    var alert = SweetAlert()
    
    /* Init Sweetalert */
    @objc
    func initAlert() {}
    
    /* Show Sweetalert */
    @objc(showAlert:withAcceptCallback:withCancelCallback:)
    func showAlert(_ options:NSDictionary, acceptCallback:RCTResponseSenderBlock, cancelCallback:RCTResponseSenderBlock) -> Void {
        /* Get all params from option */
        let type: String = options.object(forKey: "type") as! String
        var title: String = options.object(forKey: "title") as! String
        if ((title ?? "").isEmpty) {
            title = ""
        }
        var subTitle: String = options.object(forKey: "subTitle") as! String
        if ((subTitle ?? "").isEmpty) {
            subTitle = ""
        }
        var barColor: String = options.object(forKey: "barColor") as! String
        if ((barColor ?? "").isEmpty) {
            barColor = ""
        }
        
        var cancellable: Bool = options.object(forKey: "cancellable") as! Bool
        var dismissOnClick: Bool = options.object(forKey: "dismissOnClick") as! Bool
        var showConfirmButton: Bool = options.object(forKey: "showConfirmButton") as! Bool
        var showCancelButton: Bool = options.object(forKey: "showCancelButton") as! Bool
        var showContentText: Bool = options.object(forKey: "showContentText") as! Bool
        
        var confirmButtonText: String = options.object(forKey: "confirmButtonText") as! String
        var cancelButtonText: String = options.object(forKey: "cancelButtonText") as! String
        var confirmButtonTextColor: String = options.object(forKey: "confirmButtonTextColor") as! String
        var cancelButtonTextColor: String = options.object(forKey: "cancelButtonTextColor") as! String
        var confirmButtonBackgroundColor: String = options.object(forKey: "confirmButtonBackgroundColor") as! String
        var cancelButtonBackgroundColor: String = options.object(forKey: "cancelButtonBackgroundColor") as! String
        
        var titleSize: Int = options.object(forKey: "titleSize") as! Int
        var subTitleSize: Int = options.object(forKey: "subTitleSize") as! Int
        
        var convertedStyle = AlertStyle.none
        switch type {
            case "error":
                convertedStyle = AlertStyle.error
                break
            case "success":
                convertedStyle = AlertStyle.success
                break
            case "warning":
                convertedStyle = AlertStyle.warning
                break
            default:
                convertedStyle = AlertStyle.none
        }
        
        
        _ = alert.showAlert(title, subTitle: subTitle, style: convertedStyle, buttonTitle: "Button Text", buttonColor: UIColor.green, otherButtonTitle: "Other Button", otherButtonColor: UIColor.red)
    }
}
