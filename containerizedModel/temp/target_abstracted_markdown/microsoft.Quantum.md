# Microsoft Quantum Development Kit Samples # @abstr_hyperlink 

These samples demonstrate the use of the Quantum Development Kit for a variety of different quantum computing tasks. Most samples are provided as a Visual Studio @abstr_number C# or F# project under the QsharpSamples.sln solution.

Each sample is self-contained in a folder. Most of the samples consist of a Q# source file with detailed comments explaining the sample and a short classical program (either `Program.cs` (C#), `Program.fs` (F#), or `host.py` (Python)) that calls into the Q# operations and functions. There are some samples that are written as an interactive Jupyter notebook thus require no classical host.

A small number of the samples have additional installation requirements beyond those for the rest of the Quantum Development Kit. These are noted in the README.md files for each sample, along with complete installation instructions.

You can find instructions on how to install the Quantum Development Kit in @abstr_hyperlink , which also includes an introduction to @abstr_hyperlink . A @abstr_hyperlink image definition is also provided for your convenience, see below for instructions on how to build and use it.

The samples are broken down into four broad categories, each of which is described below.

## @abstr_number . Introductory Samples

  * **TeleportationSample** : This sample documents how to write quantum programs with Q#, C#, and Visual Studio, using the @abstr_hyperlink covered in the main documentation. It also shows how to simulate the same algorithms from Python and Jupyter.
  * **Measurement** : This sample goes into more detail about how single- and multiple-qubit measurements are represented in Q#, and how to measure in interesting bases such as the Bell basis.
  * **SimpleAlgorithms** : This sample covers several different basic quantum algorithms, and how each can be written in Q#.
  * **IntroToIQSharp** : This samples explains how to create interactive notebooks using Jupyter and IQ#.



## @abstr_number . Algorithm Samples

  * **DatabaseSearch** : This sample demonstrates how to use Grover's algorithm to efficiently search a database represented as a quantum register.
  * **IntegerFactorization** : This sample demonstrates how to use Shor's algorithm to efficiently factor integers.
  * **ReversibleLogicSynthesis** : This sample demonstrates how to use reversible logic synthesis to solve the hidden shift problem.
  * **CHSHGame** : This sample demonstrates a famous nonlocal game which proves that no theory of local hidden variables can ever reproduce all the predictions of quantum mechanics.



## @abstr_number . Characterization and Testing Samples

  * **UnitTesting** : This sample demonstrates how to use the Quantum Development Kit together with the @abstr_hyperlink framework to check the correctness of quantum programs by testing the correctness and computing the metrics of various small quantum circuits.
  * **BitFlipCode** : This sample shows how to use a simple quantum error correcting code to protect against errors in a quantum device.
  * **PhaseEstimation** : This sample introduces iterative phase estimation, an important statistical problem in analyzing the output of quantum programs.



## @abstr_number . Hamiltonian Simulation Samples

  * _H₂ Simulation_
    * **H @abstr_number SimulationCmdLine** : This sample walks through the simulation of molecular hydrogen using the Trotter–Suzuki decomposition.
    * **H @abstr_number SimulationGUI** : This sample builds on _H @abstr_number SimulationCmdLine_ by using the @abstr_hyperlink framework and the @abstr_hyperlink package to plot results asynchronously in a cross-platform application.
  * _Ising Model Simulation_
    * **SimpleIsing** : This sample walks through constructing the time-evolution operator for the Ising model.
    * **IsingGenerators** : This sample describes how Hamiltonians may be represented using Microsoft.Quantum.Canon functions.
    * **AdiabaticIsing** : This sample converts a representation of a Hamiltonian using library data types into unitary time-evolution by the Hamiltonian on qubits.
    * **IsingPhaseEstimation** : This sample adiabatically prepares the ground state of the Ising model Hamiltonian, and then perform phase estimation to obtain an estimate of the ground state energy. 
    * **IsingTrotterEvolution** : This sample walks through constructing the time-evolution operator for the Ising model using the Trotterization library feature.
  * **HubbardSimulation** : This sample walks through constructing the time-evolution operator for the @abstr_number D Hubbard Simulation model.



## @abstr_number . Interoperability

  * **PythonInterop** (Windows-only preview): This sample walks through using Python to perform quantum process tomography on an operation written in Q#.
  * **FSharpWithQSharp** : This sample shows how to use Q# operations with an F# driver.



## @abstr_number . Qasm (Quantum Assembler Language)

  * **OpenQasm** : This sample shows that one can output a subset of the quantum operations of a Q# application in OpenQASM.
  * **Qiskit** : This sample shows that one can run the quantum operations of a Q# application by using the OpenQASM output on the IBMQuantumExperience by changing the driver.
  * **OpenQasmReader** : This sample shows that one can convert OpenQasm @abstr_number . @abstr_number specifications to Q# methods. This allows one to import algorithms written in OpenQasm @abstr_number . @abstr_number to be used on the Microsoft Q# Simulator. Apart of the barrier gate (which has no meaning in Q#) all gates are converted to Q# constructions.



## Docker image

You can use the included Dockerfile to create a docker image with all the necessary libraries to use the Quantum Development Kit to build quantum applications in C#, Python or Jupyter.

Once you have installed @abstr_hyperlink , you can use the following commands to get you started:

To build the docker image and tag it `iqsharp`: @abstr_code_section 

To run the image in the container named `iqsharp-container` with interactive command-line and redirect container port @abstr_number to local port @abstr_number (needed to run jupyter): @abstr_code_section 

From the corresponding container command line, you can run the C# version of the Teleportation sample using: @abstr_code_section 

Similarly, you can run the Python version of the Teleportation sample using: @abstr_code_section 

Finally, to start jupyter notebook within the image for the Teleportation sample, use: @abstr_code_section 

Once Jupyter has started, you can open in your browser the Teleportation notebook (you will need a token generated by jupyter when it started on the previous step):

> http://localhost: @abstr_number /notebooks/Notebook.ipynb

Once you're done, to remove container named `iqsharp-container`: @abstr_code_section 
