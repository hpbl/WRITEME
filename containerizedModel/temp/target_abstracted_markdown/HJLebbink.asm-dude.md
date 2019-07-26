# Asm-Dude

Assembly syntax highlighting and code assistance for assembly source files and the disassembly window for Visual Studio @abstr_number , @abstr_number and @abstr_number . This extension can be found in the @abstr_hyperlink or download latest installer @abstr_hyperlink . If assembly is too much of a hassle but you still want access to specific machine instructions, consider @abstr_hyperlink .

### Features

#### Syntax highlighting and Descriptions

The following architectures are supported: the instruction sets of the x @abstr_number and the x @abstr_number , but also SSE, AVX, AVX @abstr_number , Xeon-Phi (Knights Corner) instructions with their descriptions are provided. Most of the regularly used Masm directives are supported and some Nasm directives. 

Highlighting and descriptions are also provided for labels.

@abstr_image 

If you are not happy with highlighting or the descriptions. Mnemonics and descriptions can be added and changed by updating the AsmDudeData.xml file that will be stored next to the binaries when installing the plugin (.vsix). The directory where plugins are installed can be difficult to find, try something as C:\Users\\AppData\Local\Microsoft\VisualStudio\ @abstr_number . @abstr_number \Extensions. Please consider sharing your updates.

#### Documentation Links

If you hover the mouse over a mnemonic when the CTRL button is down, mnemonics may become underlined, indicating that an html reference exists that points to a documentation webpage.

@abstr_image 

#### Code Completion

While typing texts completion lists will narrow down to the relevant language keywords. This works for all keywords and labels. Code suggestion may not be perfect yet, in the sense that only valid code completions should be suggested. For example, after a call or jump mnemonic you expect a label, thus the list of completions will only show labels to choose from. 

@abstr_image 

#### Code Folding

The keywords _#region_ and _#endregion_ lets you specify a block of code that you can expand or collapse when using the outlining feature of the Visual Studio Code Editor. In longer code files, it is convenient to be able to collapse or hide one or more regions so that you can focus on the part of the file that you are currently working on. 

#### Signature Help

Signature Help (also known as Parameter Info) displays the signature of a method in a tooltip when a user types the parameter list start character (eg in c++ an opening parenthesis). As a parameter and parameter separator (typically a comma) are typed, the tooltip is updated to show the next parameter in bold.

@abstr_image 

#### Label Analysis

Quick info tooltips for labels allow you to see where labels are defined. If labels are not defined, red error squiggles appear and an corresponding entry in the error list is added.

@abstr_image 

If labels are incorrectly defined more than once, quick info tooltips also provide information about these clashing label definitions. Red error squiggles appear and entries in the error list are added.

@abstr_image 

## Disassembly Window in VS

QuickInfo tooltips, documentation links and syntax highlighting is available for the disassembly window.

@abstr_image 

## Assembly Simulator (Available in version @abstr_number . @abstr_number )

The assembly simulator interprets assembly code and allows to reason about assembly programs.

#### Multi-Valued Logics

The value of a flag or the value of a single bit in a register can either take the Boolean value of @abstr_number , we say the value is set, or it can take the Boolean value of @abstr_number , we say that the value is cleared. We assume that these two values are the only two values a bit may assume. When reasoning about these two values, other useful truth-values can be distinguished. These values represent the epistemic state a reasoner has about the value @abstr_number and @abstr_number . Three types of ignorance, and an inconsistent state:

@abstr_number . When you reason about the truth-value of a bit you try to determine in which world you live: a world in which the bit is set, or one in which the bit is cleared. You may conclude that you lack necessary information to determine the truth-value. In such a situation we say that the bit is UNKNOWN, denoted by a question mark '?'. The instruction "IN" retrieves a byte from I/O, the bits in that byte are UNKNOWN.

@abstr_number . Another type of ignorance is introduced by instructions themselves. The specification may state that, for example, a flag is undefined after the execution of a specific instruction. The instruction AND sets the value of the auxiliary flag AF (obviously) either to a @abstr_number or to a @abstr_number , yet the specification does not tell which one. In such a situation we say that a bit has the truth-value UNDEFINED, denoted by the letter 'U'.

@abstr_number . Yet another type of ignorance is introduced by the bounded capacities of the reasoner. The theorem prover Z @abstr_number is used to establish the truth-value of bits. After a certain timeout the theorem prover gives up. In such a situation we say that the bit has the truth-value UNDETERMINED, denoted by a hyphen '-'.

@abstr_number . The last truth-value indicates an inconsistent state (of the reasoner) when the reasoner establishes that a bit is set and at the same time it has information to conclude that the bit is cleared. This signals a state that cannot be reached. We say that a bit can have the truth-value INCONSISTENT, denoted by the letter 'X'.

#### Show Register Content

The register content before and after the current line is shown in QuickInfo tooltips when hovering over registers. "RCL EAX, @abstr_number " shifts the carry flag into position @abstr_number . The carry flag is undefined due to the previous BSF.

@abstr_image 

#### Semantic warning when using Undefined Values

Using undefined flags or registers in instruction most often signals a bug. Although it is conceivable that using undefined values is intended (For example in "XOR RAX, RAX"), still, you may want be warned about it. For example, the carry flag is used by RCL but CF has an undefined value.

@abstr_image 

#### Semantic warning for Redundant Instructions

When an instruction does not change the state of the registers and flags it writes to, give a redundancy warning. 

@abstr_image 

#### Semantic warning for Unreachable Instructions

Instructions can be unreachable due to conditional jumps that are never taken. If you were to request the truth-values of a register in an unreachable instruction the reasoner would conclude that you need an inconsistent state to reach the instruction. Something that cannot happen.

@abstr_image 

#### Syntax Errors (found by the assembly simulator)

The Simulator was not build to find syntax errors, yet it does find some when traversing the file. Would be a waste not to feedback these errors.

@abstr_image 

#### Register Content in Code Completions

When something is known about the register content, this information is shown in code completions.

@abstr_image 

## Where is the Source (Are you sure this is not a honeypot?!)

If you are reading this you are most likely an assembly programmer, if you are still interested in some dirty c#, or you are just cautious, you can run the extension from source code. To do that, Visual Studio @abstr_number SDK needs to be installed. To run the extension, hit F @abstr_number or choose the Debug > Start Debugging menu command. A new instance of Visual Studio will launch under the experimental hive.

### Currently in development:

  * Considering @abstr_hyperlink for proper parsing and error handling.
  * ~~Considering @abstr_hyperlink for proof tree induction to track propagation of register and flag state-change trough time.~~



### Known Issues:

  * ~~Incomplete descriptions. E.g. PMOVSX, the source @abstr_hyperlink has a split table and only the first table is used as source.~~
  * ~~MASM versions @abstr_number . @abstr_number and later treat all statement labels inside a procedure as local. AsmDude however does not yet honor this freedom, and will diligently complain about label clashes.~~



### Feature Requests: (desire something - let me know)

  * ~~Documentation for opcodes. Hit F @abstr_number to get full official documentation of the selected opcode~~.
  * ~~Proper Register Highlighting. E.g. When you select GPR rax, GPR al is also highlighted.~~
  * ~~No code completion in remarks.~~
  * ~~Improved syntax highlighting. Add label highlights.~~
  * ~~Code completion for labels in jumps. Provide a list of existing labels from which one can choose.~~
  * ~~Support for segment registers, debug registers and control registers.~~
  * ~~Label analysis. When jumping to a label, check if the label exists. Check if labels are unique. Provide error squiggles if something is wrong.~~
  * ~~Code folding for documentation blocks, folding for Masm procedure blocks and and Masm segments definitions.~~ 
  * ~~Code completion restrictions. E.g. opcode movss can only be followed by an xmm register and not by a GPR such as rax.~~
  * ~~Signature Help. Provide help which operands (type of registers, mem etc) are allowed for a given mnemonic).~~
  * ~~Add syntax highlighting for AT&T syntax.~~
  * ~~Syntax highlighting for the Debug/Windows/Disassembly view.~~
  * Label rename assistance.
  * Create new file item with .asm extension.
  * Syntax highlighting in quickinfo tooltips, code folding block previews.
  * Code formatting.
  * Track flag influence. Select an opcode that uses a flag (as input), find the opcodes that produce this flag (as output). E.g. select opcode cmovc or setc , highlight all opcodes such as btr, sal, sar, shl, shr, etc.
  * Register rename assistance. Highly desirable but very challenging. E.g. rename GPR rdx to rbx, find which rdx, edx, dx, dl and dh will need to be renamed, check if renames will clash with existing occurances of rbx, ebx, bx, bl and bh.
  * Arm support.
  * Nasm macros syntax highlighting.
  * Provide one (large) label graph for the complete solution such that label usage can be tracked throughout the solution.
  * Add pragmas to disable warnings such as "#pragma AsmDude warning disable/restore".
  * Add support for MASM keyword "comment".
  * Add syntax highlighting, statement completion and syntax checks for struct member fields.
  * Disassembly window: show memory content from selected address (see @abstr_hyperlink ).
  * Disassembly window: show memory content of the stack frame and stack pointer (see @abstr_hyperlink ).
  * Add comment/uncomment functionality (see @abstr_hyperlink ).



### Updates:

  * @abstr_number February @abstr_number : Initial alpha release. Basic highlighting and descriptions for i @abstr_number instructions are available.
  * @abstr_number February @abstr_number : Added highlighting and descriptions for SSE, AVX, AVX @abstr_number instructions.
  * @abstr_number February @abstr_number : Added .vsix installer
  * @abstr_number February @abstr_number : Added .vsix installer to the visual studio extensions gallery
  * @abstr_number February @abstr_number : Added code completion [v @abstr_number . @abstr_number ]
  * @abstr_number February @abstr_number : Added code folding [v @abstr_number . @abstr_number ]
  * @abstr_number March @abstr_number : Added option pages for customizations. [v @abstr_number . @abstr_number ]
  * @abstr_number March @abstr_number : Added documentation for opcodes for CTRL + left mouse. [v @abstr_number . @abstr_number . @abstr_number ]
  * @abstr_number March @abstr_number : Added register highlighting. [v @abstr_number . @abstr_number . @abstr_number ]
  * @abstr_number March @abstr_number : bugfixes and anoyances fixes [v @abstr_number . @abstr_number . @abstr_number ]
  * @abstr_number March @abstr_number : Added code completion for labels in jumps [v @abstr_number . @abstr_number . @abstr_number ]
  * @abstr_number May @abstr_number : Added Label analysis [v @abstr_number . @abstr_number . @abstr_number . @abstr_number ]
  * @abstr_number July @abstr_number : Added Signature Help [v @abstr_number . @abstr_number . @abstr_number . @abstr_number ]
  * @abstr_number Feb @abstr_number : Added Performance Data for Skylake & Broadwell (Data from Agner Fog) [v @abstr_number . @abstr_number . @abstr_number . @abstr_number ] 
  * @abstr_number June @abstr_number : Added AT&T syntax support [v @abstr_number . @abstr_number . @abstr_number . @abstr_number ]
  * @abstr_number Juli @abstr_number : Added support for the VS Disassembly Window [v @abstr_number . @abstr_number . @abstr_number . @abstr_number ]
  * @abstr_number June @abstr_number : added Performance Data for Skylake-X [v @abstr_number . @abstr_number . @abstr_number . @abstr_number ]
  * @abstr_number Januari @abstr_number : Added support for VS @abstr_number [v @abstr_number . @abstr_number . @abstr_number . @abstr_number ]


