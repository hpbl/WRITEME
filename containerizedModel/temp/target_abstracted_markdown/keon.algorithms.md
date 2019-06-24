@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

# Pythonic Data Structures and Algorithms

Minimal and clean example implementations of data structures and algorithms in Python @abstr_number .

## Contributing

Thanks for your interest in contributing! There are many ways to contribute to this project. Get started here

## Tests

### Use unittest

For running all tests write down:
    
    
    $ python @abstr_number  -m unittest discover tests
    

For running some specific tests you can do this as following (Ex: sort):
    
    
    $ python @abstr_number  -m unittest tests.test_sort
    

### Use pytest

For running all tests write down:
    
    
    $ python @abstr_number  -m pytest tests
    

## Install

If you want to use the API algorithms in your code, it is as simple as:
    
    
    $ pip @abstr_number  install algorithms
    

You can test by creating a python file: (Ex: use `merge_sort` in `sort`)

```python @abstr_number from algorithms.sort import merge_sort

if __name__ == "__main__": my_list = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] my_list = merge_sort(my_list) print(my_list) ```

## Uninstall

If you want to uninstall algorithms, it is as simple as:
    
    
    $ pip @abstr_number  uninstall -y algorithms
    

## List of Implementations

  * arrays 
    * delete_nth
    * flatten
    * garage
    * josephus_problem
    * limit
    * longest_non_repeat
    * max_ones_index
    * merge_intervals
    * missing_ranges
    * plus_one
    * rotate
    * summarize_ranges
    * three_sum
    * trimmean
    * top_ @abstr_number 
    * two_sum
    * move_zeros
    * n_sum
  * backtrack 
    * general_solution.md
    * add_operators
    * anagram
    * array_sum_combinations
    * combination_sum
    * factor_combinations
    * generate_abbreviations
    * generate_parenthesis
    * letter_combination
    * palindrome_partitioning
    * pattern_match
    * permute
    * permute_unique
    * subsets
    * subsets_unique
  * bfs 
    * maze_search
    * shortest_distance_from_all_buildings
    * word_ladder
  * bit 
    * add_bitwise_operator
    * bit_operation
    * bytes_int_conversion
    * count_flips_to_convert
    * count_ones
    * find_difference
    * find_missing_number
    * flip_bit_longest_sequence
    * power_of_two
    * reverse_bits
    * single_number
    * single_number @abstr_number 
    * single_number @abstr_number 
    * subsets
    * swap_pair
    * has_alternative_bit
    * insert_bit
    * remove_bit
    * binary_gap
  * calculator 
    * math_parser
  * compression 
    * huffman_coding
  * dfs 
    * all_factors
    * count_islands
    * pacific_atlantic
    * sudoku_solver
    * walls_and_gates
  * dp 
    * buy_sell_stock
    * climbing_stairs
    * coin_change
    * combination_sum
    * egg_drop
    * house_robber
    * job_scheduling
    * knapsack
    * longest_increasing
    * matrix_chain_order
    * max_product_subarray
    * max_subarray
    * min_cost_path
    * num_decodings
    * regex_matching
    * rod_cut
    * word_break
    * fibonacci
    * hosoya triangle
  * graph 
    * check_bipartite
    * strongly_connected
    * clone_graph
    * cycle_detection
    * find_all_cliques
    * find_path
    * graph
    * markov_chain
    * minimum_spanning_tree
    * satisfiability
    * tarjan
    * traversal
  * heap 
    * merge_sorted_k_lists
    * skyline
    * sliding_window_max
    * binary_heap
  * iterables 
    * convolved
    * k_closest_points
  * linkedlist 
    * add_two_numbers
    * copy_random_pointer
    * delete_node
    * first_cyclic_node
    * is_cyclic
    * is_palindrome
    * kth_to_last
    * linkedlist
    * remove_duplicates
    * reverse
    * rotate_list
    * swap_in_pairs
    * is_sorted
    * remove_range
  * map 
    * hashtable
    * separate_chaining_hashtable
    * longest_common_subsequence
    * randomized_set
    * valid_sudoku
    * word_pattern
    * is_isomorphic
    * is_anagram 
  * maths 
    * base_conversion
    * combination
    * decimal_to_binary_ip
    * euler_totient
    * extended_gcd
    * factorial 
    * gcd/lcm
    * generate_strobogrammtic
    * is_strobogrammatic
    * modular_exponential
    * next_bigger
    * next_perfect_square
    * nth_digit
    * prime_check
    * primes_sieve_of_eratosthenes
    * pythagoras
    * rabin_miller
    * rsa
    * sqrt_precision_factor
    * summing_digits
    * hailstone
  * matrix 
    * sudoku_validator
    * bomb_enemy
    * copy_transform
    * count_paths
    * matrix_rotation.txt
    * matrix_multiplication
    * rotate_image
    * search_in_sorted_matrix
    * sparse_dot_vector
    * sparse_mul
    * spiral_traversal
    * crout_matrix_decomposition
  * queues 
    * max_sliding_window
    * moving_average
    * queue
    * reconstruct_queue
    * zigzagiterator
  * search 
    * binary_search
    * first_occurrence
    * last_occurrence
    * linear_search
    * search_insert
    * two_sum
    * search_range
    * find_min_rotate
    * search_rotate
    * jump_search
    * next_greatest_letter
  * set 
    * randomized_set
    * set_covering
    * find_keyboard_row
  * sort 
    * bitonic_sort
    * bogo_sort
    * bubble_sort
    * bucket_sort
    * cocktail_shaker_sort
    * comb_sort
    * counting_sort
    * cycle_sort
    * gnome_sort
    * heap_sort
    * insertion_sort
    * meeting_rooms
    * merge_sort
    * pancake_sort
    * quick_sort
    * radix_sort
    * selection_sort
    * shell_sort
    * sort_colors
    * top_sort
    * wiggle_sort
  * stack 
    * longest_abs_path
    * simplify_path
    * stack
    * valid_parenthesis
    * stutter
    * switch_pairs
    * is_consecutive
    * remove_min
    * is_sorted
  * strings 
    * fizzbuzz
    * delete_reoccurring
    * strip_url_params
    * validate_coordinates
    * domain_extractor
    * merge_string_checker
    * add_binary
    * breaking_bad
    * decode_string
    * encode_decode
    * group_anagrams
    * int_to_roman
    * is_palindrome
    * license_number
    * make_sentence
    * multiply_strings
    * one_edit_distance
    * rabin_karp
    * reverse_string
    * reverse_vowel
    * reverse_words
    * roman_to_int
    * word_squares
    * unique_morse
    * judge_circle
    * strong_password
    * caesar_cipher
    * contain_string
    * count_binary_substring
    * repeat_string
    * min_distance
    * longest_common_prefix
    * rotate
    * first_unique_char
    * repeat_substring 
    * atbash_cipher
  * tree 
    * bst 
      * array_to_bst
      * bst_closest_value
      * BSTIterator
      * delete_node
      * is_bst
      * kth_smallest
      * lowest_common_ancestor
      * predecessor
      * serialize_deserialize
      * successor
      * unique_bst
      * depth_sum
      * count_left_node
      * num_empty
      * height
    * red_black_tree 
      * red_black_tree
    * segment_tree 
      * segment_tree
    * traversal 
      * inorder
      * level_order
      * postorder
      * preorder
      * zigzag
    * trie 
      * add_and_search
      * trie
    * b_tree
    * binary_tree_paths
    * bin_tree_to_list
    * deepest_left
    * invert_tree
    * is_balanced
    * is_subtree
    * is_symmetric
    * longest_consecutive
    * lowest_common_ancestor
    * max_height
    * max_path_sum
    * min_height
    * path_sum
    * path_sum @abstr_number 
    * pretty_print
    * same_tree
    * tree
  * unix 
    * path 
      * join_with_slash
      * full_path
      * split
      * simplify_path
  * union-find 
    * count_islands
  * machine-learning 
    * nearest neighbor classification



## Contributors

Thanks to @abstr_hyperlink who helped in building the repo.
