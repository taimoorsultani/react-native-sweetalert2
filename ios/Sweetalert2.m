//
//  Sweetalert2.m
//  Sweetalert2
//
//  Created by Muhammad Taimoor Sultani on 25/06/2021.
//  Copyright © 2021 Muhammad Taimoor Sultani. All rights reserved.
//

#import <React/RCTBridgeModule.h>

#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(Sweetalert2, NSObject)

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

/* Init Sweetalert */
RCT_EXTERN_METHOD(initAlert);

/* Show Sweetalert */
RCT_EXTERN_METHOD(showAlert:(NSDictionary *)options withAcceptCallback:(RCTResponseSenderBlock)acceptCallback withCancelCallback:(RCTResponseSenderBlock)cancelCallback)

@end
