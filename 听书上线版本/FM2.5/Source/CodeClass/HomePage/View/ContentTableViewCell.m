//
//  ContentTableViewCell.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/11.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "ContentTableViewCell.h"

@implementation ContentTableViewCell


-(UIView *)backView
{
    if (_backView == nil)
    {
        self.backView = [[UIView alloc]initWithFrame:CGRectMake(0, 0, CGRectGetWidth(self.frame),240)];
        //self.backView.backgroundColor = [UIColor redColor];
        [self addSubview:_backView];
    }
    return _backView;
}



-(UIImageView*)contPic
{
    if (_contPic == nil)
    {
        self.contPic = [[UIImageView alloc]initWithFrame:CGRectMake(10, 40, CGRectGetWidth(self.frame) *0.42,CGRectGetWidth(self.frame) *0.42)];
        //self.contPic.backgroundColor = [UIColor orangeColor];
        [self.backView addSubview:_contPic];
    }
    return _contPic;
}


-(UIImageView *)contitPic
{
    if (_contitPic == nil)
    {
        self.contitPic = [[UIImageView alloc]initWithFrame:CGRectMake(CGRectGetMaxX(self.contPic.frame) + 10, CGRectGetMinY(self.contPic.frame), 40,40)];
        self.contitPic.layer.cornerRadius = 20;
        self.contitPic.layer.masksToBounds = YES;
        //self.contitPic.backgroundColor = [UIColor orangeColor];
        [self.backView addSubview:_contitPic];
    }
    return _contitPic;
}

-(UILabel *)nameLab
{
    if (_nameLab == nil)
    {
        self.nameLab = [[UILabel alloc]initWithFrame:CGRectMake(CGRectGetMaxX(self.contitPic.frame) + 10, CGRectGetMinY(self.contPic.frame), 100,40)];
        //self.nameLab.backgroundColor = [UIColor orangeColor];
        [self.backView addSubview:_nameLab];
    }
    return _nameLab;
}

-(UIButton *)introBtn
{
    if (_introBtn == nil)
    {
        self.introBtn = [UIButton buttonWithType:UIButtonTypeSystem];
        self.introBtn.frame = CGRectMake(CGRectGetMaxX(self.contPic.frame) + 10, CGRectGetMaxY(self.nameLab.frame) + 10, 100,30);
        [self.backView addSubview:_introBtn];
    }
    return _introBtn;
}





- (void)awakeFromNib {
    // Initialization code
}

- (void)setSelected:(BOOL)selected animated:(BOOL)animated {
    [super setSelected:selected animated:animated];

    // Configure the view for the selected state
}

@end
