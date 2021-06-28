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
        let title: String = options.object(forKey: "title") as! String
        let subTitle: String = options.object(forKey: "subTitle") as! String
        let barColor: String = options.object(forKey: "barColor") as! String
        
        let cancellable: Bool = options.object(forKey: "cancellable") as! Bool
        let dismissOnClick: Bool = options.object(forKey: "dismissOnClick") as! Bool
        let showConfirmButton: Bool = options.object(forKey: "showConfirmButton") as! Bool
        let showCancelButton: Bool = options.object(forKey: "showCancelButton") as! Bool
        let showContentText: Bool = options.object(forKey: "showContentText") as! Bool
        
        let confirmButtonText: String = options.object(forKey: "confirmButtonText") as! String
        let cancelButtonText: String = options.object(forKey: "cancelButtonText") as! String
        let confirmButtonTextColor: String = options.object(forKey: "confirmButtonTextColor") as! String
        let cancelButtonTextColor: String = options.object(forKey: "cancelButtonTextColor") as! String
        let confirmButtonBackgroundColor: String = options.object(forKey: "confirmButtonBackgroundColor") as! String
        let cancelButtonBackgroundColor: String = options.object(forKey: "cancelButtonBackgroundColor") as! String
        
        let titleSize: Int = options.object(forKey: "titleSize") as! Int
        let subTitleSize: Int = options.object(forKey: "subTitleSize") as! Int
        
        
        _ = alert.showAlert(title, subTitle: subTitle, style: convertedStyle)
    }
}
