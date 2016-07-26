//
//  VoiceView.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/12.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "VoiceView.h"

@implementation VoiceView

- (instancetype)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self)
    {
        
        [self p_setup];
        
        
    }
    return self;
}




-(void)p_setup
{
    
    
    self.headImageView = [[UIImageView alloc]initWithFrame:CGRectMake(0, 64, CGRectGetWidth(self.frame), CGRectGetHeight(self.frame) *0.56) ];
    self.headImageView.backgroundColor = [UIColor orangeColor];
   
    self.headImageView.image = [UIImage imageNamed:@"tingshu.jpg"];
    self.headImageView.contentMode =  UIViewContentModeScaleToFill;
    [self addSubview:_headImageView];
    
    self.picView = [[UIImageView alloc]initWithFrame:CGRectMake(CGRectGetWidth(self.headImageView.frame)/2 -CGRectGetWidth(self.headImageView.frame) / 3  , CGRectGetHeight(self.headImageView.frame)/2 -CGRectGetWidth(self.headImageView.frame) / 3 , CGRectGetWidth(self.headImageView.frame) / 3 * 2, CGRectGetWidth(self.headImageView.frame) / 3 *2) ];
    
    self.picView.layer.cornerRadius = CGRectGetWidth(self.frame)/3;
    self.picView.layer.masksToBounds = YES;
    [self.headImageView addSubview:_picView];
    
    self.curTimeLabel = [[UILabel alloc]initWithFrame:CGRectMake(10, CGRectGetHeight(self.frame) - 150, 50, 30)];
    //self.curTimeLabel.backgroundColor = [UIColor redColor];
    [self addSubview:_curTimeLabel];
    
    self.progressSlider = [[UISlider alloc]init];
    self.progressSlider.frame = CGRectMake(CGRectGetMaxX(self.curTimeLabel.frame), CGRectGetMinY(self.curTimeLabel.frame), CGRectGetWidth(self.frame) - CGRectGetWidth(self.curTimeLabel.frame) * 2 - 20, 30);
   // self.progressSlider.backgroundColor = [UIColor blueColor];
    [self addSubview:_progressSlider];
    
    NSLog(@"%f",self.frame.size.width);
    
    self.totleTiemLabel = [[UILabel alloc]initWithFrame:CGRectMake(CGRectGetMaxX(self.progressSlider.frame), CGRectGetMinY(self.curTimeLabel.frame), 50, 30)];
   // self.totleTiemLabel.backgroundColor = [UIColor grayColor];
    
    [self addSubview:_totleTiemLabel];
    
    
    self.lastButton = [UIButton buttonWithType:UIButtonTypeSystem];
    self.lastButton.frame = CGRectMake(40 , CGRectGetHeight(self.frame) - 94 , 30, 30);
    [self.lastButton setBackgroundImage:[UIImage imageNamed:@"shangyiqu.png"] forState:UIControlStateNormal];
   [ self.lastButton  addTarget:self action:@selector(lastButtonAction:) forControlEvents:(UIControlEventTouchUpInside)];
    

    [self addSubview:_lastButton];
    
    self.playButton = [UIButton buttonWithType:UIButtonTypeSystem];
    self.playButton.frame = CGRectMake(CGRectGetWidth(self.frame)/2 -15, CGRectGetHeight(self.frame) - 100 , 40, 40);
   // self.playButton.backgroundColor = [UIColor orangeColor];
    [self addSubview:_playButton];
    
    
    self.nextButton = [UIButton buttonWithType:UIButtonTypeSystem];
    self.nextButton.frame = CGRectMake(CGRectGetWidth(self.frame) - 70, CGRectGetHeight(self.frame) - 94, 30, 30);
    [self.nextButton  setBackgroundImage:[UIImage imageNamed:@"xiayiqu.png"] forState:UIControlStateNormal];
    [self addSubview:_nextButton];
    
    
    
    
    
    
    
}

-(void)lastButtonAction:(UIButton *)sender
{
    [self.delegate lastVoiceAction];
}





@end
