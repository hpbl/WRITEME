.. raw:: html
    
    
    <p align="center"><img src="https://user-images.githubusercontent.com/ @abstr_number / @abstr_number - @abstr_number d @abstr_number c @abstr_number c-efe @abstr_number - @abstr_number e @abstr_number - @abstr_number - @abstr_number ed @abstr_number f @abstr_number .png" alt="Logo" width=" @abstr_number "/></p>
    <br/>
    

# Horovod

.. image:: https://badge.buildkite.com/ @abstr_number f @abstr_number bc @abstr_number c @abstr_number d @abstr_number fc @abstr_number de @abstr_number b @abstr_number deb @abstr_number b @abstr_number a @abstr_number e @abstr_number e @abstr_number .svg?branch=master :target: https://buildkite.com/horovod/horovod :alt: Build Status

.. image:: https://img.shields.io/badge/License-Apache% @abstr_number . @abstr_number -blue.svg :target: https://img.shields.io/badge/License-Apache% @abstr_number . @abstr_number -blue.svg :alt: License

.. image:: https://app.fossa.com/api/projects/git% @abstr_number Bgithub.com% @abstr_number Fhorovod% @abstr_number Fhorovod.svg?type=shield :target: https://app.fossa.com/projects/git% @abstr_number Bgithub.com% @abstr_number Fhorovod% @abstr_number Fhorovod?ref=badge_shield :alt: FOSSA Status

.. image:: https://bestpractices.coreinfrastructure.org/projects/ @abstr_number /badge :target: https://bestpractices.coreinfrastructure.org/projects/ @abstr_number :alt: CII Best Practices

.. image:: https://pepy.tech/badge/horovod :target: https://pepy.tech/project/horovod :alt: Downloads

.. inclusion-marker-start-do-not-remove

|

Horovod is a distributed training framework for TensorFlow, Keras, PyTorch, and MXNet. The goal of Horovod is to make distributed Deep Learning fast and easy to use.

.. raw:: html

@abstr_image 

Horovod is hosted by the `LF AI Foundation <https://lfdl.io>`_ (LF AI). If you are a company that is deeply committed to using open source technologies in artificial intelligence, machine and deep learning, and wanting to support the communities of open source projects in these domains, consider joining the LF AI Foundation. For details about who's involved and how Horovod plays a role, read the LF AI `announcement <https://lfdl.io/press/ @abstr_number / @abstr_number / @abstr_number /lf-deep-learning-welcomes-horovod-distributed-training-framework-as-newest-project/>`_.

|

.. contents::

|

## Why not traditional Distributed TensorFlow?

The primary motivation for this project is to make it easy to take a single-GPU TensorFlow program and successfully train it on many GPUs faster. This has two aspects:

@abstr_number . How much modification does one have to make to a program to make it distributed, and how easy is it to run it? @abstr_number . How much faster would it run in distributed mode?

Internally at Uber we found the MPI model to be much more straightforward and require far less code changes than the Distributed TensorFlow with parameter servers. See the `Usage <#usage>`__ section for more details.

In addition to being easy to use, Horovod is fast. Below is a chart representing the benchmark that was done on @abstr_number servers with @abstr_number Pascal GPUs each connected by RoCE-capable @abstr_number Gbit/s network:

.. image:: https://user-images.githubusercontent.com/ @abstr_number / @abstr_number -bf @abstr_number c @abstr_number ca- @abstr_number - @abstr_number e @abstr_number - @abstr_number a-b @abstr_number c @abstr_number e @abstr_number .png :alt: @abstr_number -GPU Benchmark

Horovod achieves @abstr_number % scaling efficiency for both Inception V @abstr_number and ResNet- @abstr_number , and @abstr_number % scaling efficiency for VGG- @abstr_number . See the `Benchmarks <docs/benchmarks.rst>`_ page to find out how to reproduce these numbers.

While installing MPI and NCCL itself may seem like an extra hassle, it only needs to be done once by the team dealing with infrastructure, while everyone else in the company who builds the models can enjoy the simplicity of training them at scale.

## Install

To install Horovod:

@abstr_number . Install `Open MPI <https://www.open-mpi.org/>`_ or another MPI implementation. Learn how to install Open MPI `on this page <https://www.open-mpi.org/faq/?category=building#easy-build>`_.

**Note** : Open MPI @abstr_number . @abstr_number . @abstr_number has an issue that may cause hangs. The recommended fix is to downgrade to Open MPI @abstr_number . @abstr_number . @abstr_number or upgrade to Open MPI @abstr_number . @abstr_number . @abstr_number .

.. raw:: html
    
    
    <p/>
    

@abstr_number . If you've installed TensorFlow from `PyPI <https://pypi.org/project/tensorflow>`__, make sure that the `g++- @abstr_number . @abstr_number . @abstr_number` or `g++- @abstr_number . @abstr_number` is installed.

If you've installed PyTorch from `PyPI <https://pypi.org/project/torch>`__, make sure that the `g++- @abstr_number . @abstr_number` or above is installed.

If you've installed either package from `Conda <https://conda.io>`_, make sure that the `gxx_linux- @abstr_number` Conda package is installed.

.. raw:: html
    
    
    <p/>
    

@abstr_number . Install the `horovod` pip package.

.. code-block:: bash
    
    
    $ pip install horovod
    

This basic installation is good for laptops and for getting to know Horovod.

If you're installing Horovod on a server with GPUs, read the `Horovod on GPU <docs/gpus.rst>`_ page.

If you want to use Docker, read the `Horovod in Docker <docs/docker.rst>`_ page.

## Concepts

Horovod core principles are based on `MPI <http://mpi-forum.org/>`_ concepts such as _size_ , _rank_ , _local rank_ , **allreduce** , **allgather** and, _broadcast_. See `this page <docs/concepts.rst>`_ for more details.

## Supported frameworks

See these pages for Horovod examples and best practices:

  * `Horovod with TensorFlow <#usage>`__ (Usage section below)
  * `Horovod with Keras <docs/keras.rst>`_
  * `Horovod with PyTorch <docs/pytorch.rst>`_
  * `Horovod with MXNet <docs/mxnet.rst>`_



## Usage

To use Horovod, make the following additions to your program. This example uses TensorFlow.

@abstr_number . Run `hvd.init()`.

@abstr_number . Pin a server GPU to be used by this process using `config.gpu_options.visible_device_list`. With the typical setup of one GPU per process, this can be set to _local rank_. In that case, the first process on the server will be allocated the first GPU, second process will be allocated the second GPU and so forth.

@abstr_number . Scale the learning rate by number of workers. Effective batch size in synchronous distributed training is scaled by the number of workers. An increase in learning rate compensates for the increased batch size.

@abstr_number . Wrap optimizer in `hvd.DistributedOptimizer`. The distributed optimizer delegates gradient computation to the original optimizer, averages gradients using **allreduce** or **allgather** , and then applies those averaged gradients.

@abstr_number . Add `hvd.BroadcastGlobalVariablesHook( @abstr_number )` to broadcast initial variable states from rank @abstr_number to all other processes. This is necessary to ensure consistent initialization of all workers when training is started with random weights or restored from a checkpoint. Alternatively, if you're not using `MonitoredTrainingSession`, you can simply execute the `hvd.broadcast_global_variables` op after global variables have been initialized.

@abstr_number . Modify your code to save checkpoints only on worker @abstr_number to prevent other workers from corrupting them. This can be accomplished by passing `checkpoint_dir=None` to `tf.train.MonitoredTrainingSession` if `hvd.rank() != @abstr_number`.

Example (see the `examples <https://github.com/horovod/horovod/blob/master/examples/>`_ directory for full training examples):

.. code-block:: python
    
    
    import tensorflow as tf
    import horovod.tensorflow as hvd
    
    
    # Initialize Horovod
    hvd.init()
    
    # Pin GPU to be used to process local rank (one GPU per process)
    config = tf.ConfigProto()
    config.gpu_options.visible_device_list = str(hvd.local_rank())
    
    # Build model...
    loss = ...
    opt = tf.train.AdagradOptimizer( @abstr_number . @abstr_number  * hvd.size())
    
    # Add Horovod Distributed Optimizer
    opt = hvd.DistributedOptimizer(opt)
    
    # Add hook to broadcast variables from rank  @abstr_number  to all other processes during
    # initialization.
    hooks = [hvd.BroadcastGlobalVariablesHook( @abstr_number )]
    
    # Make training operation
    train_op = opt.minimize(loss)
    
    # Save checkpoints only on worker  @abstr_number  to prevent other workers from corrupting them.
    checkpoint_dir = '/tmp/train_logs' if hvd.rank() ==  @abstr_number  else None
    
    # The MonitoredTrainingSession takes care of session initialization,
    # restoring from a checkpoint, saving to a checkpoint, and closing when done
    # or an error occurs.
    with tf.train.MonitoredTrainingSession(checkpoint_dir=checkpoint_dir,
                                           config=config,
                                           hooks=hooks) as mon_sess:
      while not mon_sess.should_stop():
        # Perform synchronous training.
        mon_sess.run(train_op)
    

## Running Horovod

The example commands below show how to run distributed training. See the `Running Horovod <docs/running.rst>`_ page for more instructions, including RoCE/InfiniBand tweaks and tips for dealing with hangs.

@abstr_number . To run on a machine with @abstr_number GPUs:

.. code-block:: bash
    
    
     $ horovodrun -np  @abstr_number  -H localhost: @abstr_number  python train.py
    

@abstr_number . To run on @abstr_number machines with @abstr_number GPUs each:

.. code-block:: bash
    
    
    $ horovodrun -np  @abstr_number  -H server @abstr_number : @abstr_number ,server @abstr_number : @abstr_number ,server @abstr_number : @abstr_number ,server @abstr_number : @abstr_number  python train.py
    

@abstr_number . To run using Open MPI without the `horovodrun` wrapper, see the `Running Horovod with Open MPI <docs/mpirun.rst>`_ page.

@abstr_number . To run in Docker, see the `Horovod in Docker <docs/docker.rst>`_ page.

@abstr_number . To run in Kubernetes, see `Kubeflow <https://github.com/kubeflow/kubeflow/tree/master/kubeflow/mpi-job>`_, `MPI Operator <https://github.com/kubeflow/mpi-operator/>`_, `Helm Chart <https://github.com/kubernetes/charts/tree/master/stable/horovod/>`_, and `FfDL <https://github.com/IBM/FfDL/tree/master/etc/examples/horovod/>`_.

@abstr_number . To run in Spark, see the `Spark <docs/spark.rst>`_ page.

@abstr_number . To run in Singularity, see `Singularity <https://github.com/sylabs/examples/tree/master/machinelearning/horovod>`_.

## Estimator API

Horovod supports Estimator API and regular TensorFlow in similar ways.

See a full training `example <examples/tensorflow_mnist_estimator.py>`_.

## mpi @abstr_number py

Horovod supports mixing and matching Horovod collectives with other MPI libraries, such as `mpi @abstr_number py <https://mpi @abstr_number py.scipy.org>`_, provided that the MPI was built with multi-threading support.

You can check for MPI multi-threading support by querying the `hvd.mpi_threads_supported()` function.

.. code-block:: python
    
    
    import horovod.tensorflow as hvd
    
    # Initialize Horovod
    hvd.init()
    
    # Verify that MPI multi-threading is supported.
    assert hvd.mpi_threads_supported()
    
    from mpi @abstr_number py import MPI
    assert hvd.size() == MPI.COMM_WORLD.Get_size()
    

You can also initialize Horovod with an `mpi @abstr_number py` sub-communicator, in which case each sub-communicator will run an independent Horovod training.

.. code-block:: python
    
    
    from mpi @abstr_number py import MPI
    import horovod.tensorflow as hvd
    
    # Split COMM_WORLD into subcommunicators
    subcomm = MPI.COMM_WORLD.Split(color=MPI.COMM_WORLD.rank %  @abstr_number ,
                                   key=MPI.COMM_WORLD.rank)
    
    # Initialize Horovod
    hvd.init(comm=subcomm)
    
    print('COMM_WORLD rank: %d, Horovod rank: %d' % (MPI.COMM_WORLD.rank, hvd.rank()))
    

## Inference

Learn how to optimize your model for inference and remove Horovod operations from the graph `here <docs/inference.rst>`_.

## Tensor Fusion

One of the unique things about Horovod is its ability to interleave communication and computation coupled with the ability to batch small **allreduce** operations, which results in improved performance. We call this batching feature Tensor Fusion.

See `here <docs/tensor-fusion.rst>`__ for full details and tweaking instructions.

## Analyzing Horovod Performance

Horovod has the ability to record the timeline of its activity, called Horovod Timeline.

.. image:: https://user-images.githubusercontent.com/ @abstr_number / @abstr_number - @abstr_number e @abstr_number da @abstr_number - @abstr_number ac- @abstr_number e @abstr_number - @abstr_number ae @abstr_number - @abstr_number d @abstr_number a @abstr_number ac @abstr_number .png :alt: Horovod Timeline

See `here <docs/timeline.rst>`__ for full details and usage instructions.

## Guides

@abstr_number . Run distributed training in Microsoft Azure using `Batch AI and Horovod <https://github.com/Azure/BatchAI/tree/master/recipes/Horovod>`_. Send us links to any user guides you want to publish on this site

## Troubleshooting

See the `Troubleshooting <docs/troubleshooting.rst>`_ page and please submit a `ticket <https://github.com/horovod/horovod/issues/new>`_ if you can't find an answer.

## Citation

Please cite Horovod in your publications if it helps your research:

::
    
    
    @article{sergeev @abstr_number horovod,
      Author = {Alexander Sergeev and Mike Del Balso},
      Journal = {arXiv preprint arXiv: @abstr_number . @abstr_number },
      Title = {Horovod: fast and easy distributed deep learning in {TensorFlow}},
      Year = { @abstr_number }
    }
    

## Publications

@abstr_number . Sergeev, A., Del Balso, M. ( @abstr_number ) _Meet Horovod: Uber’s Open Source Distributed Deep Learning Framework for TensorFlow_. Retrieved from `https://eng.uber.com/horovod/ <https://eng.uber.com/horovod/>`_

@abstr_number . Sergeev, A. ( @abstr_number ) _Horovod - Distributed TensorFlow Made Easy_. Retrieved from `https://www.slideshare.net/AlexanderSergeev @abstr_number /horovod-distributed-tensorflow-made-easy <https://www.slideshare.net/AlexanderSergeev @abstr_number /horovod-distributed-tensorflow-made-easy>`_

@abstr_number . Sergeev, A., Del Balso, M. ( @abstr_number ) _Horovod: fast and easy distributed deep learning in TensorFlow_. Retrieved from `arXiv: @abstr_number . @abstr_number <https://arxiv.org/abs/ @abstr_number . @abstr_number >`_

## References

The Horovod source code was based off the Baidu `tensorflow-allreduce <https://github.com/baidu-research/tensorflow-allreduce>`_ repository written by Andrew Gibiansky and Joel Hestness. Their original work is described in the article `Bringing HPC Techniques to Deep Learning <http://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce/>`_.

.. inclusion-marker-end-do-not-remove Place contents above here if they should also appear in read-the-docs. Contents below are already part of the read-the-docs table of contents.
