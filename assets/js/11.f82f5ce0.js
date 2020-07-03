(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{355:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("软件的设计是为了服务理念，我们只有懂了设计理念，才能明白为了实现这样的理念需要如何架构。所以，在我们深入源码架构之前，先来聊聊"),s("code",[t._v("React")]),t._v("理念。")]),t._v(" "),s("h2",{attrs:{id:"react理念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react理念"}},[t._v("#")]),t._v(" React理念")]),t._v(" "),s("p",[t._v("我们可以从"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/thinking-in-react.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v("看到"),s("code",[t._v("React")]),t._v("的理念：")]),t._v(" "),s("blockquote",[s("p",[t._v("我们认为，React 是用 JavaScript 构建"),s("strong",[t._v("快速响应")]),t._v("的大型 Web 应用程序的首选方式。它在 Facebook 和 Instagram 上表现优秀。")])]),t._v(" "),s("p",[t._v("那么该如何理解"),s("strong",[t._v("快速响应")]),t._v("？可以从两个角度来看：")]),t._v(" "),s("ul",[s("li",[t._v("速度快")]),t._v(" "),s("li",[t._v("响应自然")])]),t._v(" "),s("p",[s("code",[t._v("React")]),t._v("是如何实现这两点的呢？")]),t._v(" "),s("h2",{attrs:{id:"理解-速度快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解-速度快"}},[t._v("#")]),t._v(" 理解“速度快”")]),t._v(" "),s("p",[t._v("每当聊到一款前端框架，拉出来比比渲染速度成了老生常谈。")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://stefankrause.net/js-frameworks-benchmark8/table.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("提供了各种框架渲染速度的对比")])]),t._v(" "),s("p",[t._v("我们经常用“前端三大框架”指"),s("code",[t._v("React")]),t._v("、"),s("code",[t._v("Vue")]),t._v("和"),s("code",[t._v("Angular")]),t._v("。相比于使用模版语言的"),s("code",[t._v("Vue")]),t._v("、"),s("code",[t._v("Angular")]),t._v("，使用原生js（"),s("code",[t._v("JSX")]),t._v("仅仅是js的语法糖）开发UI的"),s("code",[t._v("React")]),t._v("在语法层面有更多灵活性。")]),t._v(" "),s("p",[t._v("然而，高灵活性意味着高不确定性。考虑如下"),s("code",[t._v("Vue")]),t._v("模版语句：")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ name }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("当编译时，由于模版语法的约束，"),s("code",[t._v("Vue")]),t._v("可以明确知道在"),s("code",[t._v("li")]),t._v("中，只有"),s("code",[t._v("name")]),t._v("是变量，这可以提供一些优化线索。")]),t._v(" "),s("p",[t._v("而在"),s("code",[t._v("React")]),t._v("中，以上代码可以写成如下"),s("code",[t._v("JSX")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("由于语法的灵活，在编译时无法区分可能变化的部分。所以在运行时，"),s("code",[t._v("React")]),t._v("需要遍历每个"),s("code",[t._v("li")]),t._v("，判断其数据是否更新。")]),t._v(" "),s("p",[t._v("基于以上原因，相比于"),s("code",[t._v("Vue")]),t._v("、"),s("code",[t._v("Angular")]),t._v("，缺少编译时优化手段的"),s("code",[t._v("React")]),t._v("为了"),s("strong",[t._v("速度快")]),t._v("需要在运行时做出更多努力。")]),t._v(" "),s("p",[t._v("比如")]),t._v(" "),s("ul",[s("li",[t._v("使用"),s("code",[t._v("PureComponent")]),t._v("或"),s("code",[t._v("React.memo")]),t._v("构建组件")]),t._v(" "),s("li",[t._v("使用"),s("code",[t._v("shouldComponentUpdate")]),t._v("生命周期钩子")]),t._v(" "),s("li",[t._v("渲染列表时使用"),s("code",[t._v("key")])]),t._v(" "),s("li",[t._v("使用"),s("code",[t._v("useCallback")]),t._v("和"),s("code",[t._v("useMemo")]),t._v("缓存函数和变量")])]),t._v(" "),s("p",[t._v("由开发者来显式的告诉"),s("code",[t._v("React")]),t._v("哪些组件不需要重复计算、可以复用。")]),t._v(" "),s("p",[t._v("在后面源码的学习中，我们会看到这些优化手段是如何起作用的。比如经过优化后，"),s("code",[t._v("React")]),t._v("会通过"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberBeginWork.new.js#L2937",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个方法"),s("OutboundLink")],1),t._v("跳过一些本次更新不需要处理的任务。")]),t._v(" "),s("h2",{attrs:{id:"理解-响应自然"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解-响应自然"}},[t._v("#")]),t._v(" 理解“响应自然”")]),t._v(" "),s("p",[t._v("该如何理解“响应自然”？React给出的答案是"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html#putting-research-into-production",target:"_blank",rel:"noopener noreferrer"}},[t._v("将人机交互研究的结果整合到真实的 UI 中"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("设想以下场景：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/searchbox.gif"),alt:"搜索框"}}),t._v(" "),s("p",[t._v("有一个地址搜索框，在输入字符时会实时显示地址匹配结果。")]),t._v(" "),s("p",[t._v("当用户输入过快时可能输入变得不是那么流畅。这是由于下拉列表的更新会阻塞线程。我们一般是通过"),s("code",[t._v("debounce")]),t._v("或 "),s("code",[t._v("throttle")]),t._v("来减少输入内容时触发回调的次数来解决这个问题。")]),t._v(" "),s("p",[t._v("但这只是治标不治本。只要组件的更新操作是同步的，那么当更新开始直到渲染完毕前，组件中总会有一定数量的工作占用线程，浏览器没有空闲时间绘制UI，造成卡顿。")]),t._v(" "),s("blockquote",[s("p",[t._v("React核心团队成员Dan在介绍React为什么会并发（"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Concurrent Mode"),s("OutboundLink")],1),t._v("）更新组件时说：\n"),s("img",{attrs:{src:t.$withBase("/img/update.png"),alt:"Dan关于用户体验的思考"}})])]),t._v(" "),s("p",[t._v("让我们从“响应自然”的角度考虑：当输入字符时，用户是否在意下拉框能在一瞬间就更新？")]),t._v(" "),s("p",[t._v("事实是：并不在意。")]),t._v(" "),s("p",[t._v("如果我们能稍稍延迟下拉框更新的时间，为浏览器留出时间渲染UI，让输入不卡顿。这样的体验是更"),s("strong",[t._v("自然")]),t._v("的。")]),t._v(" "),s("p",[t._v("为了实现这个目标，需要将同步的更新变为可中断的异步更新。在浏览器每一帧的时间中，预留一些时间给JS线程，"),s("code",[t._v("React")]),t._v("利用这部分时间更新组件（可以看到，在"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/4c7036e807fa18a3e21a5182983c7c0f05c5936e/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L119",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1),t._v("中，预留的初始时间是5ms）。")]),t._v(" "),s("p",[t._v("当预留的时间不够用时，"),s("code",[t._v("React")]),t._v("将线程控制权交还给浏览器使其有时间渲染UI，"),s("code",[t._v("React")]),t._v("则等待下一帧时间到来继续被中断的工作。")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("同步更新 vs 异步更新 Demo")]),t._v(" "),s("p",[t._v("我们有个更新很耗时的大列表，让我们看看"),s("strong",[t._v("同步更新")]),t._v("和"),s("strong",[t._v("异步更新")]),t._v("时，输入框的响应速度")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codesandbox.io/s/pensive-shirley-wkp46",target:"_blank",rel:"noopener noreferrer"}},[t._v("同步更新"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codesandbox.io/s/infallible-dewdney-9fkv9",target:"_blank",rel:"noopener noreferrer"}},[t._v("异步更新"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("可以从Demo看到，当牺牲了列表的更新速度，"),s("code",[t._v("React")]),t._v("大幅提高了输入响应速度，使交互更自然。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("通过以上内容，我们可以看到，"),s("code",[t._v("React")]),t._v("为了践行“构建"),s("strong",[t._v("快速响应")]),t._v("的大型 Web 应用程序”理念做出的努力。这其中有些优化手段可以在现有架构上增加，而有些（如：异步可中断更新）只能重构整个架构实现。")]),t._v(" "),s("p",[t._v("即使版本经历了很大更迭，从13年第一次Commit到如今2020年，"),s("code",[t._v("React")]),t._v("的主要API却很少变化。"),s("code",[t._v("this.setState")]),t._v("风采依旧，日复一日出色的完成着开发者交代的工作。")]),t._v(" "),s("blockquote",[s("p",[t._v("React 13年第一次 commit\n"),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/firstCommit.png"),alt:"第一次commit"}}),t._v("\n最后再让我们看看，Dan回答网友关于"),s("code",[t._v("React")]),t._v("发展方向的提问\n"),s("img",{attrs:{src:t.$withBase("/img/ques1.png"),alt:"用户向Dan提问"}}),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/ans1.png"),alt:"Dan回答"}})])]),t._v(" "),s("p",[t._v("相比于新增feature，React更在意底层抽象的表现力。结合理念，相信你已经明白这意味着什么了。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV134411c7Sk?from=search&seid=17404881291635824595",target:"_blank",rel:"noopener noreferrer"}},[t._v("「英文 计划翻译」尤雨溪论JavaScript框架设计哲学：平衡"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);