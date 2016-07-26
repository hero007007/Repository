//
//  ShowTableViewCell.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/11.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "ShowTableViewCell.h"

@implementation ShowTableViewCell


-(UIImageView *)picView
{
    if (_picView == nil)
    {
        self.picView = [[UIImageView alloc]initWithFrame:CGRectMake(10, 10, 60, 60)];
       // self.picView.backgroundColor = [UIColor redColor];
        [self.contentView addSubview:_picView];
    }
    return _picView;
}


-(UILabel *)titLab
{
    if (_titLab == nil)
    {
        self.titLab = [[UILabel alloc]initWithFrame:CGRectMake(CGRectGetMaxX(self.picView.frame) + 10, 10, CGRectGetWidth(self.frame) - 90, 30)];
        //self.titLab.backgroundColor = [UIColor yellowColor];
        [self.contentView addSubview:_titLab];
    }
    return _titLab;
}


-(UILabel *)detailLab
{
    if (_detailLab == nil)
    {
        self.detailLab = [[UILabel alloc]initWithFrame:CGRectMake(CGRectGetMaxX(self.picView.frame) + 10, CGRectGetMaxY(self.titLab.frame), CGRectGetWidth(self.frame) - 80, 20)];
        //self.detailLab.backgroundColor = [UIColor yellowColor];
        self.detailLab.font = [UIFont systemFontOfSize:12];
        [self.contentView addSubview:_detailLab];
    }
    return _detailLab;
}




- (void)awakeFromNib {
    // Initialization code
}

- (void)setSelected:(BOOL)selected animated:(BOOL)animated {
    [super setSelected:selected animated:animated];

    // Configure the view for the selected state
}

@end
