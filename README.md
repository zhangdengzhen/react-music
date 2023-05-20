# 出错了 解决办法

```bash

i ｢wds｣: Project is running at http://192.168.137.1/
i ｢wds｣: webpack output is served from
i ｢wds｣: Content not from webpack is served from D:\Program Files (x86)\桌面\学习\react\music\public
i ｢wds｣: 404s will fallback to /
Starting the development server...

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (D:\Program Files (x86)\桌面\学习\react\music\node_modules\webpack\lib\util\createHash.js:135:53)
    at NormalModule._initBuildHash (D:\Program Files (x86)\桌面\学习\react\music\node_modules\webpack\lib\NormalModule.js:417:16)
    at handleParseError (D:\Program Files (x86)\桌面\学习\react\music\node_modules\webpack\lib\NormalModule.js:471:10)
    at D:\Program Files (x86)\桌面\学习\react\music\node_modules\webpack\lib\NormalModule.js:503:5
    at D:\Program Files (x86)\桌面\学习\react\music\node_modules\webpack\lib\NormalModule.js:358:12
    at D:\Program Files (x86)\桌面\学习\react\music\node_modules\loader-runner\lib\LoaderRunner.js:373:3
    at iterateNormalLoaders (D:\Program Files (x86)\桌面\学习\react\music\node_modules\loader-runner\lib\LoaderRunner.js:214:10)
    at iterateNormalLoaders (D:\Program Files (x86)\桌面\学习\react\music\node_modules\loader-runner\lib\LoaderRunner.js:221:10)
D:\Program Files (x86)\桌面\学习\react\music\node_modules\react-scripts\scripts\start.js:19
  throw err;
  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (D:\Program Files (x86)\桌面\学习\react\music\node_modules\webpack\lib\util\createHash.js:135:53)
    at NormalModule._initBuildHash (D:\Program Files (x86)\桌面\学习\react\music\node_modules\webpack\lib\NormalModule.js:417:16)
    at D:\Program Files (x86)\桌面\学习\react\music\node_modules\webpack\lib\NormalModule.js:452:10
    at D:\Program Files (x86)\桌面\学习\react\music\node_modules\webpack\lib\NormalModule.js:323:13
    at D:\Program Files (x86)\桌面\学习\react\music\node_modules\loader-runner\lib\LoaderRunner.js:367:11
    at D:\Program Files (x86)\桌面\学习\react\music\node_modules\loader-runner\lib\LoaderRunner.js:233:18
    at context.callback (D:\Program Files (x86)\桌面\学习\react\music\node_modules\loader-runner\lib\LoaderRunner.js:111:13)
    at D:\Program Files (x86)\桌面\学习\react\music\node_modules\babel-loader\lib\index.js:59:103 {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v18.14.2
```

[参考](https://blog.csdn.net/ForestK/article/details/128641013?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-128641013-blog-127173968.235%5Ev28%5Epc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-128641013-blog-127173968.235%5Ev28%5Epc_relevant_default&utm_relevant_index=3)


什么是不可变数据
不可变数据 (Immutable Data )就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是持久化数据结构（ Persistent Data Structure），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的s性能损耗，Immutable 使用了 结构共享（Structural Sharing），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。



immutable.js的优缺点
优点：

降低mutable带来的复杂度
节省内存
历史追溯性（时间旅行）：时间旅行指的是，每时每刻的值都被保留了，想回退到哪一步只要简单的将数据取出就行，想一下如果现在页面有个撤销的操作，撤销前的数据被保留了，只需要取出就行，这个特性在redux或者flux中特别有用
拥抱函数式编程：immutable本来就是函数式编程的概念，纯函数式编程的特点就是，只要输入一致，输出必然一致，相比于面向对象，这样开发组件和调试更方便。推荐一本函数式编程的在线免费书《JS 函数式编程指南》, 此书可以推荐给学生做为课外补充阅读。

```js
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
  
// useSelector() 这个 hook，它的参数就是 selector 并返回 selector 的计算结果。
  // 最重要的是，这个 hook 会订阅 redux store(牢记这点)，所以每次 redux state有更新，useSelector() 里的 selector 就会重新计算一次，返回新的结果，并重新渲染当前组件。（如下面展示的）

  const { topBanners } = useSelector((state) => {
    return {
      // topBanners:state.get("recommend").get("topBanners")
      topBanners: state.getIn(["recommend", "topBanners"]),
    };
  }, shallowEqual); //浅层比较

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

```
