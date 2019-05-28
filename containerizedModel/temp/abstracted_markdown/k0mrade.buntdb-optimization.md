# buntdb-optimization

search optimal key:value structure for buntdb

IndexString improvement

IndexString time is reduced from @abstr_number . @abstr_number s to @abstr_number . @abstr_number s. The index is based on @abstr_number rows. 

Before commit @abstr_number e @abstr_number ea @abstr_number b @abstr_number a @abstr_number f @abstr_number f @abstr_number f @abstr_number f @abstr_number c @abstr_number c @abstr_number dd @abstr_number 

bash- @abstr_number . @abstr_number $ go run bunt-optimization.go   
Reading Bunt database --> @abstr_number . @abstr_number s   
String index AD @abstr_number creation time --> @abstr_number . @abstr_number s   
String index AD @abstr_number creation time --> @abstr_number . @abstr_number s   
Indexes list --> [AD @abstr_number AD @abstr_number ]   
Reading @abstr_number rows from BuntDB was --> @abstr_number . @abstr_number s   
Reading @abstr_number rows from index AD @abstr_number was --> @abstr_number . @abstr_number s   
Reading @abstr_number rows from index AD @abstr_number was --> @abstr_number . @abstr_number ms 

After commit @abstr_number e @abstr_number ea @abstr_number b @abstr_number a @abstr_number f @abstr_number f @abstr_number f @abstr_number f @abstr_number c @abstr_number c @abstr_number dd @abstr_number 

bash- @abstr_number . @abstr_number $ go run bunt-optimization.go   
Reading Bunt database --> @abstr_number . @abstr_number s   
String index AD @abstr_number creation time --> @abstr_number . @abstr_number s   
String index AD @abstr_number creation time --> @abstr_number . @abstr_number s   
Indexes list --> [AD @abstr_number AD @abstr_number ]   
Reading @abstr_number rows from BuntDB was --> @abstr_number . @abstr_number s   
Reading @abstr_number rows from index AD @abstr_number was --> @abstr_number . @abstr_number s   
Reading @abstr_number rows from index AD @abstr_number was --> @abstr_number . @abstr_number ms 
