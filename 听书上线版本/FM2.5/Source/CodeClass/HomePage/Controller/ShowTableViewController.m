//
//  ShowTableViewController.m
//  FM2.5
//
//  Created by Xcord-LS on 15/11/11.
//  Copyright © 2015年 李帅. All rights reserved.
//

#import "ShowTableViewController.h"
#import "ShowTableViewCell.h"
#import "ListModel.h"
#import "GetDataTools.h"
#import "ContentTableViewController.h"

@interface ShowTableViewController ()<MBProgressHUDDelegate>
@property (nonatomic,strong)NSMutableArray *dataArr;
@property (nonatomic,strong)MBProgressHUD *hud;
@property (nonatomic,assign)NSInteger  aIndex;
@end

@implementation ShowTableViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.hud = [[MBProgressHUD alloc]init];
    self.hud = [MBProgressHUD showHUDAddedTo:self.tableView animated:YES];
    self.hud.delegate = self;

    self.aIndex = 0;
    
    [self.tableView registerClass:[ShowTableViewCell class] forCellReuseIdentifier:@"cell"];
    
    self.dataArr = [NSMutableArray array];
    
    [self setBackgroundImageView];
    
    [self setupReFresh];
    
}

-(void)setBackgroundImageView
{
    UIImageView  * imageView = [[UIImageView alloc]initWithFrame:self.view.bounds];
    [imageView setImage:[UIImage imageNamed:@"xingkong2.jpg"]];
    
    self.tableView.backgroundView = imageView;
}

-(void)getData
{
    
    if (self.aIndex <10)
    {
         [self.strUrl replaceCharactersInRange:NSMakeRange(115, 1) withString:[NSString stringWithFormat:@"%ld",self.aIndex]];
    }
    else
    {
         [self.strUrl replaceCharactersInRange:NSMakeRange(115, 2) withString:[NSString stringWithFormat:@"%ld",self.aIndex]];
    }
   

    
    
    [[GetDataTools shareGetData] getDataWithURL:self.strUrl PassValue:^(NSArray *array) {
        
        if (self.aIndex == 1) {
            self.dataArr = [NSMutableArray arrayWithArray:array];
        }else
        {
            for (ListModel * list in array) {
                [self.dataArr addObject:list];
            }
        }
        
        
        
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.tableView reloadData];
        });
        [self.tableView headerEndRefreshing];
        [self.tableView footerEndRefreshing];
        
    }];

}
-(void)setupReFresh
{
    //下拉刷新
    [self.tableView addHeaderWithTarget:self action:@selector(headerRereshing) dateKey:@"table"];
    [self.tableView headerBeginRefreshing];
    
    // 2.上拉加载更多(进入刷新状态就会调用self的footerRereshing)
    [self.tableView addFooterWithTarget:self action:@selector(footerRereshing)];
    //一些设置
    // 设置文字(也可以不设置,默认的文字在MJRefreshConst中修改)
    self.tableView.headerPullToRefreshText = @"下拉可以刷新了";
    self.tableView.headerReleaseToRefreshText = @"松开马上刷新了";
    self.tableView.headerRefreshingText = @"刷新中。。。";
    
    self.tableView.footerPullToRefreshText = @"上拉可以加载更多数据了";
    self.tableView.footerReleaseToRefreshText = @"松开马上加载更多数据了";
    self.tableView.footerRefreshingText = @"加载中。。。";
    
}
//下拉刷新
- (void)headerRereshing
{
    self.aIndex = 1;
    NSUserDefaults * ud = [NSUserDefaults standardUserDefaults];
    
    if ([[ud valueForKey:@"NetWorkStatus"]isEqualToString:@"NotReachable"]) {
        [self  tanchu];
    }else
    {
        [self getData];
    }
    
    
    // 请求数据
    
    
    
    
}
//上拉加载
- (void)footerRereshing
{
    self.aIndex ++;
    if (self.aIndex < 26)
    {
        NSUserDefaults * ud = [NSUserDefaults standardUserDefaults];
        
        if ([[ud valueForKey:@"NetWorkStatus"]isEqualToString:@"NotReachable"]) {
            [self  tanchu];
        }else
        {
            [self getData];
        }

    }
    else
    {
        [self.tableView footerEndRefreshing];
    }
    
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {

    return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {

    return self.dataArr.count;
}


- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    ShowTableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"cell" forIndexPath:indexPath];
    cell.backgroundColor = [UIColor clearColor];
    ListModel *list = self.dataArr[indexPath.row];
    [cell.picView  sd_setImageWithURL:[NSURL URLWithString:list.albumCoverUrl290]];
    cell.titLab.text = list.title;
    cell.detailLab.text = list.nickname;
    
    
    [self.hud hide:YES];//小菊花
    return cell;
}

-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
     ListModel *list = self.dataArr[indexPath.row];
    NSString *str = list.albumId;
   
    NSString *str2 = [NSString stringWithFormat:@"http://mobile.ximalaya.com/mobile/others/ca/album/track/%@/true/1/30?device=iPhone",str];
    ContentTableViewController *contentVC = [[ContentTableViewController alloc]init];
    contentVC.Url = str2;
  
    [self.navigationController pushViewController:contentVC animated:YES];
    
}




-(CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath
{
    return 80;
}

// 无网络时候,弹出提示框
-(void)tanchu
{
    UIAlertView * alert = [[UIAlertView alloc]initWithTitle:@"提示" message:@"当前网络有误,请检查网络连接..." delegate:nil cancelButtonTitle:nil otherButtonTitles:nil, nil];
    [alert show];
    [self performSelector:@selector(myaction:) withObject:alert afterDelay:2];
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
