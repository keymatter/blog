import{_ as s,k as n,l as a,W as l}from"./chunks/framework.e27c521f.js";const D=JSON.parse('{"title":"事件循环","description":"了解离不开的事件循环","frontmatter":{"title":"事件循环","description":"了解离不开的事件循环","category":"javascript","tags":["EventLoop"]},"headers":[],"relativePath":"frontend/javascript/EventLoop.md","filePath":"frontend/javascript/EventLoop.md","lastUpdated":1690265295000}'),o={name:"frontend/javascript/EventLoop.md"},e=l(`<h1 id="事件循环-eventloop" tabindex="-1">事件循环 EventLoop <a class="header-anchor" href="#事件循环-eventloop" aria-label="Permalink to &quot;事件循环 EventLoop&quot;">​</a></h1><p>事件循环指的是 <code>js</code> 代码所在运行环境（浏览器、<code>nodejs</code>）编译器的<strong>一种解析执行规则</strong>。事件循环不属于 <code>js</code> 代码本身的范畴，而是属于 <code>js</code> 编译器的范畴</p><blockquote><p>js代码可以理解为是一个人在公司中具体做的事情， 而 <strong>事件循环</strong> 相当于是公司的一种规章制度。两者不是一个层面的概念。</p></blockquote><p>事件循环又叫事件队列，两者是同一个概念</p><p><strong><code>JS</code> 是单线程的</strong>，有一个 主进程 和 调用栈，主进程就是JS的运行时进程，调用栈是解释器（比如浏览器中的 <code>JavaScript</code> 解释器）追踪函数执行流的一种机制</p><p><strong>同步任务</strong>：即主线程上的任务，按照顺序由上至下依次执行，当前一个任务执行完毕后，才能执行下一个任务</p><p><strong>异步任务</strong>：进入异步处理模块，执行完毕后会产生一个回调函数放入任务队列，当主线程上的任务执行完后，事件队列中的任务其进入主线程中执行</p><h2 id="代码执行特点" tabindex="-1">代码执行特点 <a class="header-anchor" href="#代码执行特点" aria-label="Permalink to &quot;代码执行特点&quot;">​</a></h2><ul><li><p>所有代码都要经过 <code>JS</code> 调用栈执行</p></li><li><p>代码从上到下执行，遇到错误停止执行</p></li><li><p>先执行同步代码，再执行异步代码</p></li><li><p>同步代码，当前一个任务执行完毕后，才能执行下一个任务，调用栈执行后直接出栈</p></li><li><p>异步代码，放到异步处理模块，等到合适(例如延时结束、获取到数据返回)的时候回调函数放入任务队列，调用栈中的任务执行完，再放事件队列中的任务进入</p></li><li><p>微任务执行时机要比宏任务早</p></li><li><p>微任务在 <code>DOM</code> 渲染前触发，宏任务在 <code>DOM</code> 渲染后触发</p></li></ul><h2 id="异步代码" tabindex="-1">异步代码 <a class="header-anchor" href="#异步代码" aria-label="Permalink to &quot;异步代码&quot;">​</a></h2><ul><li>宏任务（macro-task）</li></ul><p>script、setTimeout、SetInterval、setImmediate(node)、requestAnimationFrame、Ajax、fetch、I/O流、UI渲染</p><ul><li>微任务（micro-task）</li></ul><p>process.nextTick(node)、Promise、Object.observer(废弃)、MutationObserver</p><h2 id="事件循环执行机制" tabindex="-1">事件循环执行机制 <a class="header-anchor" href="#事件循环执行机制" aria-label="Permalink to &quot;事件循环执行机制&quot;">​</a></h2><ol><li><p>进入到 <code>script</code> 标签，就进入第一次事件循环，执行宏任务</p></li><li><p>顺序从上向下执行当前上下文</p></li><li><p>遇到同步代码，立即执行</p></li><li><p>遇到异步代码，交给对应的异步处理模块，模块处理完之后，宏任务放入宏任务队列，微任务放入微任务队列</p></li><li><p>执行完所有同步代码，函数调用栈清空，开始执行任务队列</p></li><li><p>先执行微任务代码</p></li><li><p>微任务代码执行完毕，本次队列清空</p></li><li><p>寻找下一个宏任务，重复步骤一，以此反复，直到清空所有任务</p></li></ol><p>这种不断重复的执行机制，叫做事件循环</p><blockquote><p>当执行任务队列时，可以认为重新开了一个空的宏任务队列和空的微任务队列，将新产生的异步任务最终放入新的任务队列，当前任务队列执行完成后，当前宏队列和微队列就清除，然后再去执行新的微任务队列，新的宏任务队列， 新开微队列、新开宏队列。。。一直循环下去，直到任务队列全部为空。</p></blockquote><h2 id="浏览器中" tabindex="-1">浏览器中 <a class="header-anchor" href="#浏览器中" aria-label="Permalink to &quot;浏览器中&quot;">​</a></h2><p>浏览器内核是多线程的，有很多模块，事件队列就是浏览器的一个事件处理模块 ，其中有一个很重要的 <code>webcore</code> 模块， 对JS中的<strong>大多异步操作</strong>进行处理</p><p>当 <code>JS</code> 的调用栈遇到异步操作时，会将任务交给浏览器的异步处理模块，这些模块都是一个独立的线程，例如：</p><ul><li><code>DOM操作</code> 会交给 <code>webcore</code> 中的 <code>DOM Binding</code> 模块处理</li><li><code>Ajax请求</code> 会交给 <code>webcore</code> 中的 <code>network</code> 模块处理</li><li><code>setTimeout等定时器</code> 会交给 <code>webcore中</code> 的 <code>timer</code> 模块处理</li></ul><h2 id="node中" tabindex="-1">Node中 <a class="header-anchor" href="#node中" aria-label="Permalink to &quot;Node中&quot;">​</a></h2><p><code>Node</code> 是单线程，在处理 <code>EventLoop</code> 上与浏览器稍微有些不同</p><ul><li><code>setImmediate</code> 为一次 <code>EventLoop</code> 执行完毕后调用</li><li><code>process.nextTick</code> 为下一个宏任务开始之前执行</li></ul><h2 id="易错点" tabindex="-1">易错点 <a class="header-anchor" href="#易错点" aria-label="Permalink to &quot;易错点&quot;">​</a></h2><ul><li><code>Promise</code> 本身是一个同步的代码(只是容器)，只有它后面调用的 <code>then()</code> 方法里面的<strong>回调</strong>才是微任务</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">_</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1 3 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><code>await</code> 右边的表达式还是会立即执行，表达式之后的代码才是微任务。<code>await</code> 微任务可以转换成等价的 <code>promise</code> 微任务分析</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">async1</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">async2</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">async2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">async1</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1 3 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li><code>script</code> 标签本事是一个宏任务，当页面出现多个 <code>script</code> 标签的时候，浏览器会把 <code>script</code> 标签作为宏任务来解析</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 1 3 2 --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="代码执行分析" tabindex="-1">代码执行分析 <a class="header-anchor" href="#代码执行分析" aria-label="Permalink to &quot;代码执行分析&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol><li><p>首先，这段代码的执行上下文进入调用栈，通俗的说，执行上下文就是标志当前作用域的，当作用域的语句执行完就会出栈</p></li><li><p>然后，<code>console.log(1)</code> 进入调用栈，因为他并不是异步语句，直接打印 <code>1</code>，此时栈内剩下执行上下文</p></li><li><p>然后，函数进入调用栈，发现他是异步（坏人，上交国家）的，需要交给其他模块处理，于是，立刻将其出栈，并把它送到浏览器的 <code>timer</code> 模块。<code>timer</code> 模块发现送来一个 <code>setTimeout</code> 函数，参数是 <code>5</code> 秒，心想，又有犯人（<code>function f(){console.log(2)}</code>）来了，这次是关 <code>5</code> 秒。此时，调用栈中还是只有执行上下文</p></li><li><p>然后，<code>console.log(3)</code> 进入调用栈，不是异步，直接打印 <code>3</code>，此时栈内剩下执行上下文</p></li><li><p>然后，主进程发现程序语句执行完了，而且异步的函数中也没有使用作用域内的某个变量，那就说明这个作用域没事事了，执行上下文出栈，内存清空，等待异步内容</p></li><li><p><code>5</code> 秒过去了，此时，<code>timer</code> 模块想，时间到了，犯人（<code>function f(){console.log(2)}</code>）你得出狱了，出去吧！于是，<code>setTimeout</code> 中的回调函数被关了五秒终于被放出来了，然后，他得回家啊，家是哪儿？JS的调用栈啊，那是函数的归宿，怎么回去呢？ 来的时候是直接仍过来的，回去只有走路（事件队列）了，发现这条路的出口只有在家里没人进（调用栈没有语句进栈）的时候才开，而且路很窄，一次只能过一个人，不过运气好的是前面没有人，不用排队，然后就走，走到路口，路口还开着，运气真好， 然后就走出了那条路，站到了家门口（还没进去）</p></li><li><p>然后，<code>f</code> 是一个函数，那他就是一个作用域，也是其内部语句的执行上下文，所以 标志作用域的 执行上下文 <code>f</code> 进栈。</p></li><li><p>最后，<code>console.log(2)</code> 进栈，不是异步的，立即执行，然后 <code>f</code> 作用域也执行完了，出栈、清除内存，结束。</p></li></ol>`,35),p=[e];function c(t,r,i,d,y,F){return n(),a("div",null,p)}const C=s(o,[["render",c]]);export{D as __pageData,C as default};
