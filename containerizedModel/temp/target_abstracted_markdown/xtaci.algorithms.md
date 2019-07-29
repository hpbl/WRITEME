### Algorithms & Data Structures in C++

@abstr_hyperlink 

#### 目标 ( goal ) :
    
    
    @abstr_number . 经典的算法实现      
      (classical algorithms implementations)      
    @abstr_number . 服务器端       
      (based on linux/gcc)       
    @abstr_number . 正确，易于使用和改造, 一个头文件一个算法，并附带一个demo.       
      (correct! and ease of use, one .header file per algorithm)
    

#### 约定 ( Convention ):
    
    
    @abstr_number .  一个算法用一个.h文件表示放到include下. ( one .header file per algorithm. )
    @abstr_number .  算法演示的demo程序放到src下.  ( one demo per algorithm.  )
    @abstr_number .  程序正确通过后，请发起Pull Requests，代码被验证后入库，并在README中发布新算法实现。
       (Please Use Fork+Pull Requests !!! Correctness is the most important!)
    @abstr_number .  TAB =  @abstr_number  space.  set ts= @abstr_number  in vim
    @abstr_number .  Graph的输出格式为 [Graphviz](http://www.graphviz.org/) Dot格式.
    (the output format of the graph is in dot of graphviz.)
    eg:
    ![demograph](demo_graph.png)
    

#### 已实现 ( Implemented ):

| Name | File | |------|------| |Array shuffle|https://github.com/xtaci/algorithms/blob/master/include/shuffle.h | |Prime test(trial division)|https://github.com/xtaci/algorithms/blob/master/include/prime.h| |Prime test(Miller-Rabin's method)|https://github.com/xtaci/algorithms/blob/master/include/prime.h| | @abstr_number D Array|https://github.com/xtaci/algorithms/blob/master/include/ @abstr_number darray.h| |Arbitrary Integer|https://github.com/xtaci/algorithms/blob/master/include/integer.h| |Linear congruential generator|https://github.com/xtaci/algorithms/blob/master/include/random.h| |Maximum subarray problem|https://github.com/xtaci/algorithms/blob/master/include/max_subarray.h| |Bit-Set|https://github.com/xtaci/algorithms/blob/master/include/bitset.h| |Queue|https://github.com/xtaci/algorithms/blob/master/include/queue.h| |Stack|https://github.com/xtaci/algorithms/blob/master/include/stack.h| |Binary Heap|https://github.com/xtaci/algorithms/blob/master/include/heap.h| |Fibonacci Heap|https://github.com/xtaci/algorithms/blob/master/include/fib-heap.h| |Priority Queue (list based)|https://github.com/xtaci/algorithms/blob/master/include/priority_queue.h| |Bubble sort|https://github.com/xtaci/algorithms/blob/master/include/bubble_sort.h| |Selection sort|https://github.com/xtaci/algorithms/blob/master/include/selection_sort.h| |Insertion sort|https://github.com/xtaci/algorithms/blob/master/include/insertion_sort.h| |Shell sort|https://github.com/xtaci/algorithms/blob/master/include/shell_sort.h| |Radix sort|https://github.com/xtaci/algorithms/blob/master/include/radix_sort.h| |Quicksort|https://github.com/xtaci/algorithms/blob/master/include/quick_sort.h| |Merge sort|https://github.com/xtaci/algorithms/blob/master/include/merge_sort.h| |Double linked list|https://github.com/xtaci/algorithms/blob/master/include/double_linked_list.h| |Skip list|https://github.com/xtaci/algorithms/blob/master/include/skiplist.h| |Largest common sequence|https://github.com/xtaci/algorithms/blob/master/include/lcs.h| |Binary search tree|https://github.com/xtaci/algorithms/blob/master/include/binary_search_tree.h| |AVL tree|https://github.com/xtaci/algorithms/blob/master/include/avl.h| |Dynamic order statistics|https://github.com/xtaci/algorithms/blob/master/include/dos_tree.h| |Red-black tree|https://github.com/xtaci/algorithms/blob/master/include/rbtree.h| |Interval tree|https://github.com/xtaci/algorithms/blob/master/include/interval_tree.h| |Prefix Tree(Trie)|https://github.com/xtaci/algorithms/blob/master/include/trie.h| |Suffix Tree|https://github.com/xtaci/algorithms/blob/master/include/suffix_tree.h| |B-Tree|https://github.com/xtaci/algorithms/blob/master/include/btree.h| |Suffix Array|https://github.com/xtaci/algorithms/blob/master/include/suffix_array.h| |Hash by multiplication|https://github.com/xtaci/algorithms/blob/master/include/hash_multi.h| |Hash table|https://github.com/xtaci/algorithms/blob/master/include/hash_table.h| |Universal hash function|https://github.com/xtaci/algorithms/blob/master/include/universal_hash.h| |Perfect hash|https://github.com/xtaci/algorithms/blob/master/include/perfect_hash.h| |Java's string hash|https://github.com/xtaci/algorithms/blob/master/include/hash_string.h| |FNV- @abstr_number a string hash|https://github.com/xtaci/algorithms/blob/master/include/hash_string.h| |SimHash|https://github.com/xtaci/algorithms/blob/master/include/simhash.h| |Bloom Filter|https://github.com/xtaci/algorithms/blob/master/include/bloom_filter.h| |SHA- @abstr_number Message Digest Algorithm|https://github.com/xtaci/algorithms/blob/master/include/sha @abstr_number .h| |MD @abstr_number |https://github.com/xtaci/algorithms/blob/master/include/md @abstr_number .h| |Base @abstr_number |https://github.com/xtaci/algorithms/blob/master/include/base @abstr_number .h| |Strongly Connected Components(SCC)|https://github.com/xtaci/algorithms/blob/master/include/scc.h| |Prim's minimum spanning tree|https://github.com/xtaci/algorithms/blob/master/include/prim_mst.h| |Kruskal MST|https://github.com/xtaci/algorithms/blob/master/include/kruskal_mst.h| |Breadth First Search|https://github.com/xtaci/algorithms/blob/master/include/graph_search.h| |Depth First Search|https://github.com/xtaci/algorithms/blob/master/include/graph_search.h| |Dijkstra's algorithm|https://github.com/xtaci/algorithms/blob/master/include/dijkstra.h| |Bellman-Ford algorithm|https://github.com/xtaci/algorithms/blob/master/include/bellman_ford.h| |Edmonds-Karp Maximal Flow|https://github.com/xtaci/algorithms/blob/master/include/edmonds_karp.h| |Push–Relabel algorithm|https://github.com/xtaci/algorithms/blob/master/include/relabel_to_front.h| |Huffman Coding|https://github.com/xtaci/algorithms/blob/master/include/huffman.h| |Word segementation|https://github.com/xtaci/algorithms/blob/master/include/word_seg.h| |A* algorithm|https://github.com/xtaci/algorithms/blob/master/include/astar.h| |K-Means|https://github.com/xtaci/algorithms/blob/master/include/k-means.h| |Knuth–Morris–Pratt algorithm|https://github.com/xtaci/algorithms/blob/master/include/kmp.h| |Disjoint-Set|https://github.com/xtaci/algorithms/blob/master/include/disjoint-set.h| | @abstr_number -Queue Problem|https://github.com/xtaci/algorithms/blob/master/include/ @abstr_number queen.h| |Palindrome|https://github.com/xtaci/algorithms/blob/master/include/palindrome.h| |LCA using Binary Lifting|https://github.com/xtaci/algorithms/blob/master/include/LCA.h|

#### 贡献者 ( Contributors ) :
    
    
    Samana:  for heavy work of MSVC compatability
    wycg @abstr_number : for K-Means
    xmuliang: for HeapSort, Kruskal MST
    wyh @abstr_number : for base @abstr_number , LRU, bubble sort, selection sort
    ZhangYou @abstr_number : Push-Relabel algorithm, Suffix Tree           
    UsingtcNower: Suffix Array
    afernandez @abstr_number : AVL trees
    

#### 支持此项目 ( Donations ) :

@abstr_image   
欢迎使用支付宝扫描上面的二维码，对该项目进行捐赠。捐赠款项将用于持续优化补全及完善。 
