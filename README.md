# Binary Search Tree TOP

Building a balanced binary search tree (BTS) from a given Array in JavaScript.


<details><summary> Assignment</summary>

<h3><a href="#assignment" class="anchor-link">Assignment</a></h3>
<p>You’ll build a balanced BST in this assignment. Do not use duplicate values because they make it more complicated and result in trees that are much harder to balance. Therefore, be sure to always remove duplicate values or check for an existing value before inserting.</p>
<ol>
<li>
<p>Build a <code>Node</code> class / factory.  It should have an attribute for the data it stores as well as its left and right children.</p>
</li>
<li>
<p>Build a <code>Tree</code> class / factory which accepts an array when initialized. The <code>Tree</code> class should have a <code>root</code> attribute which uses the return value of <code>buildTree</code> which you’ll write next.</p>
</li>
<li>
<p>Write a <code>buildTree</code> function which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of <code>Node</code> objects appropriately placed (don’t forget to sort and remove duplicates!). The <code>buildTree</code> function should return the level-0 root node.</p>

<p><strong>Tip:</strong> If you would like to visualize your binary search tree, here is a <code>prettyPrint()</code> function that will <code>console.log</code> your tree in a structured format. This function will expect to receive the root of your tree as the value for the <code>node</code> parameter.</p>

<pre class="line-numbers language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> prettyPrint <span class="token operator">=</span> <span class="token punctuation">(</span>node<span class="token punctuation">,</span> prefix <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">,</span> isLeft <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">prettyPrint</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>prefix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>isLeft <span class="token operator">?</span> <span class="token string">'│   '</span> <span class="token operator">:</span> <span class="token string">'    '</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>prefix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>isLeft <span class="token operator">?</span> <span class="token string">'└── '</span> <span class="token operator">:</span> <span class="token string">'┌── '</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>node<span class="token punctuation">.</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">prettyPrint</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>prefix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>isLeft <span class="token operator">?</span> <span class="token string">'    '</span> <span class="token operator">:</span> <span class="token string">'│   '</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>
</li>
<li>
<p>Write an <code>insert</code> and <code>delete</code> functions which accepts a value to insert/delete (you’ll have to deal with several cases for delete such as when a node has children or not). If you need additional resources, check out these two articles on <a href="https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/?ref=lbp" target="_blank" rel="noopener noreferrer">inserting</a> and <a href="https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/?ref=lbp" target="_blank" rel="noopener noreferrer">deleting</a>, or <a href="https://youtu.be/wcIRPqTR3Kc" target="_blank" rel="noopener noreferrer">this video</a> with several visual examples.</p>
</li>
<li>
<p>Write a <code>find</code> function which accepts a value and returns the node with the given value.</p>
</li>
<li>
<p>Write a <code>levelOrder</code> function which accepts another function as a parameter. <code>levelOrder</code> should traverse the tree in breadth-first level order and provide each node as the argument to the provided function. This function can be implemented using either iteration or recursion (try implementing both!). The method should return an array of values if no function is given. <strong>Tip:</strong> You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list (as you saw in the <a href="https://www.youtube.com/watch?v=86g8jAQug04" target="_blank" rel="noopener noreferrer">video</a>).</p>
</li>
<li>
<p>Write <code>inorder</code>, <code>preorder</code>, and <code>postorder</code> functions that accept a function parameter. Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. The functions should return an array of values if no function is given.</p>
</li>
<li>
<p>Write a <code>height</code> function which accepts a node and returns its height. Height is defined as the number of edges in longest path from a given node to a leaf node.</p>
</li>
<li>
<p>Write a <code>depth</code> function which accepts a node and returns its depth. Depth is defined as the number of edges in path from a given node to the tree’s root node.</p>
</li>
<li>
<p>Write a <code>isBalanced</code> function which checks if the tree is balanced. A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.</p>
</li>
<li>
<p>Write a <code>rebalance</code> function which rebalances an unbalanced tree. <strong>Tip:</strong> You’ll want to use a traversal method to provide a new array to the <code>buildTree</code> function.</p>
</li>
</ol>

<h4 id="tie-it-all-together">Tie it all together</h4>
<p>Write a simple driver script that does the following:</p>

<ol>
<li>Create a binary search tree from an array of random numbers. You can create a function if you want that returns an array of random numbers each time you call it.</li>
<li>Confirm that the tree is balanced by calling <code>isBalanced</code></li>
<li>Print out all elements in level, pre, post, and in order</li>
<li>Unbalance the tree by adding several numbers &gt; 100</li>
<li>Confirm that the tree is unbalanced by calling <code>isBalanced</code></li>
<li>Balance the tree by calling <code>rebalance</code></li>
<li>Confirm that the tree is balanced by calling <code>isBalanced</code></li>
<li>Print out all elements in level, pre, post, and in order</li>
</ol>

