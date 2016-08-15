//
//  HomePageTableViewController.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/11.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "HomePageTableViewController.h"
#import "HomePageTableViewCell.h"
#import "GetDataTools.h"
#import "ListModel.h"
#import "ShowTableViewController.h"
@interface HomePageTableViewController ()
//私有变量

@end

@implementation HomePageTableViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    NSUserDefaults * ud = [NSUserDefaults standardUserDefaults];
    
    [ud setValue:@"no" forKey:@"bool"];
    
    [self.tableView registerClass:[HomePageTableViewCell class] forCellReuseIdentifier:@"cell"];
    
    self.navigationItem.title = @"我们爱听书";
    
    // 设置背景图片
    
    [self setBackgroundImageView];
    
    
}
// 设置背景图片
-(void)setBackgroundImageView
{
    UIImageView * backImageView = [[UIImageView alloc]initWithFrame:self.view.bounds];
    [backImageView setImage:[UIImage imageNamed:@"xingkong2.jpg"]];
    
    self.tableView.backgroundView = backImageView;
    
    
    self.tableView.backgroundColor = [UIColor colorWithPatternImage:[UIImage imageNamed:@"xingkong2.jpg"]];
}





- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView
{

    return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{

    return 15;
  
}


- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    
    
    HomePageTableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"cell" forIndexPath:indexPath];
    
    
    
    if (indexPath.row == 0)
    {
        cell.titLab.text = @"浪漫言情";
        cell.titPic.image = [UIImage imageNamed:@"langman.jpg"];
    }
    if (indexPath.row == 1)
    {
        cell.titLab.text = @"恐怖悬疑";
        cell.titPic.image = [UIImage imageNamed:@"kongbu.jpg"];
    }
    if (indexPath.row == 2)
    {
        cell.titLab.text = @"玄幻奇幻";
        cell.titPic.image = [UIImage imageNamed:@"xuanhuan.jpg"];
    }
    if (indexPath.row == 3)
    {
        cell.titLab.text = @"历史军事";
        cell.titPic.image = [UIImage imageNamed:@"lishi.jpg"];
    }
    if (indexPath.row == 4)
    {
        cell.titLab.text = @"古言宫斗";
        cell.titPic.image = [UIImage imageNamed:@"guyangongdou.jpg"];
    }
    if (indexPath.row == 5)
    {
        cell.titLab.text = @"探案推理";
        cell.titPic.image = [UIImage imageNamed:@"tuili.jpg"];
    }
    if (indexPath.row == 6)
    {
        cell.titLab.text = @"青春校园";
        cell.titPic.image = [UIImage imageNamed:@"qingchunxiaoyuan.jpg"];
    }
    if (indexPath.row == 7)
    {
        cell.titLab.text = @"都市生活";
        cell.titPic.image = [UIImage imageNamed:@"doshi.jpg"];
    }
    if (indexPath.row == 8)
    {
        cell.titLab.text = @"穿越架空";
        cell.titPic.image = [UIImage imageNamed:@"chuanyue.jpg"];
    }
    if (indexPath.row == 9)
    {
        cell.titLab.text = @"武侠仙侠";
        cell.titPic.image = [UIImage imageNamed:@"wuxia.jpg"];
    }
    if (indexPath.row == 10)
    {
        cell.titLab.text = @"文学名著";
        cell.titPic.image = [UIImage imageNamed:@"wenxue.jpg"];
    }
    
    if (indexPath.row == 11)
    {
        cell.titLab.text = @"官场商战";
        cell.titPic.image = [UIImage imageNamed:@"guanchang.jpg"];
    }
    if (indexPath.row == 12)
    {
        cell.titLab.text = @"科幻游戏";
        cell.titPic.image = [UIImage imageNamed:@"kehuan.jpg"];
    }
    if (indexPath.row == 13)
    {
        cell.titLab.text = @"正能量";
        cell.titPic.image = [UIImage imageNamed:@"zhengnengliang.jpg"];
    }
    if (indexPath.row == 14)
    {
        cell.titLab.text = @"侦探推理";
        cell.titPic.image = [UIImage imageNamed:@"zhantantuili.jpg"];
    }
    
    cell.backgroundColor = [UIColor clearColor];
    return cell;
}

-(CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath
{
    return 100;
}

-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    ShowTableViewController *showVC = [[ShowTableViewController alloc]init];
    
    NSUserDefaults * ud = [NSUserDefaults standardUserDefaults];
    
    if ([[ud valueForKey:@"NetWorkStatus"] isEqualToString:@"NotReachable"] ) {
        UIAlertView * alert =[[UIAlertView alloc]initWithTitle:@"提示" message:@"当前网络错误,请检查网络连接..." delegate:nil cancelButtonTitle:nil otherButtonTitles:nil, nil];
        [alert show ];
        [self performSelector:@selector(myaction:) withObject:alert afterDelay:2];
        return;
    }else
    {
        
        if (indexPath.row == 0)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E6%B5%AA%E6%BC%AB%E8%A8%80%E6%83%85".mutableCopy;
            
            
        }
        if (indexPath.row == 1)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E6%81%90%E6%80%96%E6%82%AC%E7%96%91".mutableCopy;
            
        }
        if (indexPath.row == 2)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E7%8E%84%E5%B9%BB%E5%A5%87%E5%B9%BB".mutableCopy;
            
        }
        if (indexPath.row == 3)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E5%8E%86%E5%8F%B2%E5%86%9B%E4%BA%8B".mutableCopy;
            
        }
        if (indexPath.row == 4)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E5%8F%A4%E8%A8%80%E5%AE%AB%E6%96%97".mutableCopy;
            
        }
        if (indexPath.row == 5)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E6%8E%A2%E6%A1%88%E6%8E%A8%E7%90%86".mutableCopy;
            
        }
        if (indexPath.row == 6)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E9%9D%92%E6%98%A5%E6%A0%A1%E5%9B%AD".mutableCopy;
            
        }
        if (indexPath.row == 7)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E9%83%BD%E5%B8%82%E7%94%9F%E6%B4%BB".mutableCopy;
            
        }
        if (indexPath.row == 8)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E7%A9%BF%E8%B6%8A%E6%9E%B6%E7%A9%BA".mutableCopy;
            
        }
        if (indexPath.row == 9)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E6%AD%A6%E4%BE%A0%E4%BB%99%E4%BE%A0".mutableCopy;
            
        }
        if (indexPath.row == 10)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E6%96%87%E5%AD%A6%E5%90%8D%E8%91%97".mutableCopy;
            
        }
        if (indexPath.row == 11)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E5%AE%98%E5%9C%BA%E5%95%86%E6%88%98".mutableCopy;
            
        }if (indexPath.row == 12)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E7%A7%91%E5%B9%BB%E6%B8%B8%E6%88%8F".mutableCopy;
            
        }
        if (indexPath.row == 13)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E6%AD%A3%E8%83%BD%E9%87%8F%E6%9C%89%E5%A3%B0%E4%B9%A6".mutableCopy;
            
        }
        if (indexPath.row == 14)
        {
            
            showVC.strUrl = @"http://mobile.ximalaya.com/mobile/discovery/v1/category/album?calcDimension=hot&categoryId=3&device=android&pageId=1&pageSize=20&status=0&tagName=%E6%8E%A8%E7%90%86%E4%B8%96%E7%95%8C".mutableCopy;
            
        }

    }
    
    
    
    
    
     [self.navigationController pushViewController:showVC animated:YES];
}
-(void)myaction:(UIAlertView *)sender
{
    [sender dismissWithClickedButtonIndex:0 animated:YES];
}
/*
// Override to support conditional editing of the table view.
- (BOOL)tableView:(UITableView *)tableView canEditRowAtIndexPath:(NSIndexPath *)indexPath {
    // Return NO if you do not want the specified item to be editable.
    return YES;
}
*/

/*
// Override to support editing the table view.
- (void)tableView:(UITableView *)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath {
    if (editingStyle == UITableViewCellEditingStyleDelete) {
        // Delete the row from the data source
        [tableView deleteRowsAtIndexPaths:@[indexPath] withRowAnimation:UITableViewRowAnimationFade];
    } else if (editingStyle == UITableViewCellEditingStyleInsert) {
        // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
    }   
}
*/

/*
// Override to support rearranging the table view.
- (void)tableView:(UITableView *)tableView moveRowAtIndexPath:(NSIndexPath *)fromIndexPath toIndexPath:(NSIndexPath *)toIndexPath {
}
*/

/*
// Override to support conditional rearranging of the table view.
- (BOOL)tableView:(UITableView *)tableView canMoveRowAtIndexPath:(NSIndexPath *)indexPath {
    // Return NO if you do not want the item to be re-orderable.
    return YES;
}
*/

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
