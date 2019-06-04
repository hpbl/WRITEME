# ParallelGit

A high performance @abstr_hyperlink in-memory filesystem for Git.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Quick start

Maven:

@abstr_code_section 

Gradle:

@abstr_code_section 

## Basic usages

Copy a file from repository to hard drive: @abstr_code_section 

Copy a file to repository and commit: @abstr_code_section 

## Project purpose explained

Git is an awesome data storage. Its special data structure offers many useful features such as:

  * Keeping history snapshots at a very low cost
  * Automatic duplication detection
  * Remote backup
  * Merging and conflict resolution



Git is well known and widely used as a VCS, yet few software application uses Git as a internal data storage. One of the reasons is the lack of high level API to efficiently communicate with a Git repository.

Consider the workflow in software development, the standard steps to make changes to Git repository are:

@abstr_code_section 

While this model works sufficiently well with developers, it does not fit in the architecture diagram of a server role application. Reasons are:

  * Only one branch can be checked out at a time
  * Checking out a branch is a heavy I/O task as files need to be deleted and re-created on hard drive
  * Every context switching needs a check out



There are ways around these problems, but they usually involve manual blob and tree creations, which are verbose and error prone.

ParallelGit is a layer between application logic and Git. It abstracts away Git's low level object manipulation details and provides a friendly interface which extends the Java @abstr_number NIO filesystem API. The filesystem itself operates in memory with data pulled from hard drive on demand. 

With ParallelGit an application can control a Git repository as it were a normal filesystem. Arbitrary branch and commit can be checked out at the minimal CPU and I/O cost. Multiple filesystem instances can be hosted simultaneously with no interference. 

## Performance explained

Git is best at storing changes in many small batches. It is very rare to have a commit that updates all files in a repository. The size of I/O per request is usually very small compared to the size of the repository. Pre-loading everything into memory is usually an overkill for most tasks.

To minimise I/O and memory usage, ParallelGit loads the minimum necessary data to complete a request. Consider a scenario where a branch has the file tree below: @abstr_code_section When this branch is checked out. The information of its head commit is loaded into memory. That includes the author and committer details, the commit message and the reference to the root node of this file tree. This reference is a @abstr_number -char hash, which can be used to find the tree object representing the root directory. 

Assuming the task requires the content of `/app-core/src/main/MyFactory.java`, before this file can be reached, its parent directories (including the root directory) need to be resolved i.e: @abstr_code_section The last directory (`/app-core/src/main`) represented by a Git tree object has the reference to the blob of `MyFactory.java`. This reference is another @abstr_number -char hash value that can be used to find the byte array data of this file in constant time.

Now let's say you want to read the file `/app-core/src/main/MyProduct.java`. This file is in the same directory as the previous one. There is no need to read the directories again as they are already in memory. This time we simply read the blob reference from `/app-core/src/main` and use it to retrieve the content of the file.

Saving files to repository follows a similar pattern. Assuming you have made a change to `MyFactory.java` and you want to commit this change. ParallelGit saves the file as a blob and creates the new tree objects from bottom-up i.e: @abstr_code_section 

The whole process above involved @abstr_number out of the total @abstr_number files in the branch, and ParallelGit only focuses on reaching the @abstr_number files. The existence of the other @abstr_number files causes (nearly) zero impact to the performance. Your repository can keep on growing and your request handling time remains constant.

## Advanced features

#### Merge

@abstr_code_section 

#### Conflict resolution

@abstr_code_section 

#### Create stash

@abstr_code_section 

#### Apply stash

@abstr_code_section 

#### Reset

@abstr_code_section 

## Handy Utils

Package `com.beijunyi.parallelgit.utils` has a collection of utility classes to perform common Git tasks. 

@abstr_number . **BlobUtils** \- _Blob insertion, byte array retrieval_ @abstr_number . **BranchUtils** \- _Branch creation, branch head reference update_ @abstr_number . **CacheUtils** \- _Index cache manipulation_ @abstr_number . **CommitUtils** \- _Commit creation, commit history retrieval_ @abstr_number . **GitFileUtils** \- _Shortcuts for readonly file accesses_ @abstr_number . **RefUtils** \- _Ref name normalisation, Ref-log retrieval_ @abstr_number . **RepositoryUtils** \- _Repository creation, repository settings_ @abstr_number . **StashUtils** \- _Stash manipulation_ @abstr_number . **TagUtils** \- _Tag manipulation_ @abstr_number . **TreeUtils** \- _Tree insertion, tree/subtree retrieval_

## License

This project is licensed under @abstr_hyperlink .
