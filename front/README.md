

# 9点35回来

1. 打开淘宝首页，console里写代码，统计出现了多少种html标签
2. 出现次数前5的html标签 各出现多少次


全栈
  node
  数据库增删改查
  功能的设计 一对多 多对多

  日志
  部署


文章详情页 有用户关注的接口

一个用户 发表多个文章 新建一个文档存储文章数据
一个用户可以关注多个用户，一个用户也可以被多个用户关注 ，典型多对多


用户关注用户，使用follow字段



1. 新建文章。 一对多关系
2. 用户关注  多对多关系
3. 如何实现关注的人列表，和粉丝列表
4. restful
   1. get /xx 列表
   2. get /xx/:id 详情
   3. post /xx 新增
   4. put /xx 更新
   5. delete /xx 删除数据
   6. restful的设计 大家可以参考github 的api



5. 下次课内容
   1. 用户的粉丝列表和关系的人
6. 文章列表
7. 文章赞和踩