中文版

@abstr_hyperlink 

#  @abstr_image 

An industrial-grade RPC framework used throughout @abstr_hyperlink , with @abstr_number , @abstr_number , @abstr_number + instances(not counting clients) and thousands kinds of services, called " **baidu-rpc** " inside Baidu. Only C++ implementation is opensourced right now.

You can use it to: * Build a server that can talk in multiple protocols ( **on same port** ), or access all sorts of services * restful http/https, @abstr_hyperlink / @abstr_hyperlink . using http/h @abstr_number in brpc is much more friendly than @abstr_hyperlink . Access protobuf-based protocols with HTTP/h @abstr_number +json, probably from another language. * redis and memcached, thread-safe, more friendly and performant than the official clients. * @abstr_hyperlink / @abstr_hyperlink / @abstr_hyperlink , for building @abstr_hyperlink . * hadoop_rpc (may be opensourced) * @abstr_hyperlink support (will be opensourced) * thrift support, thread-safe, more friendly and performant than the official clients. * all sorts of protocols used in Baidu: baidu_std, streaming_rpc, hulu_pbrpc, @abstr_hyperlink , nova_pbrpc, public_pbrpc, ubrpc and nshead-based ones. * Build @abstr_hyperlink distributed services using an industrial-grade implementation of @abstr_hyperlink which is opensourced at @abstr_hyperlink * Servers can handle requests synchronously or asynchronously. * Clients can access servers synchronously, asynchronously, semi-synchronously, or use combo channels to simplify sharded or parallel accesses declaratively. * Debug services via http, and run cpu, heap and contention profilers. * Get better latency and throughput. * Extend brpc with the protocols used in your organization quickly, or customize components, including naming services (dns, zk, etcd), load balancers (rr, random, consistent hashing)

# Try it!

  * Read overview to know where brpc can be used and its advantages.
  * Read getting started for building steps and play with @abstr_hyperlink .
  * Docs: 
    * Performance benchmark
    * bvar
    * bvar_c++
    * bthread
    * bthread or not
    * thread-local
    * Execution Queue
    * Client
    * Basics
    * Error code
    * Combo channels
    * Access http/h @abstr_number 
    * Access gRPC
    * Access thrift 
    * Access UB
    * Streaming RPC
    * Access redis
    * Access memcached
    * Backup request
    * Dummy server
    * Server
    * Basics
    * Serve http/h @abstr_number 
    * Serve gRPC
    * Serve thrift
    * Serve Nshead
    * Debug server issues
    * Server push
    * Avalanche
    * Auto ConcurrencyLimiter
    * @abstr_hyperlink 
    * json @abstr_number pb
    * Builtin Services
    * status
    * vars
    * connections
    * flags
    * rpcz
    * cpu_profiler
    * heap_profiler
    * contention_profiler
    * Tools
    * rpc_press
    * rpc_replay
    * rpc_view
    * benchmark_http
    * parallel_http
    * Others
    * IOBuf
    * Streaming Log
    * FlatMap
    * brpc外功修炼宝典(training material)
    * A tutorial on building large-scale services(training material)
    * brpc internal(training material)
    * RPC in depth
    * New Protocol
    * Atomic instructions
    * IO
    * Threading Overview
    * Load Balancing
    * Locality-aware
    * Consistent Hashing
    * Memory Management
    * Timer keeping
    * bthread_id
    * Use cases inside Baidu
    * 百度地图api入口
    * 联盟DSP
    * ELF学习框架
    * 云平台代理服务



# Contribute code

Please refer to here.

# Feedback

Please report bugs, concerns, suggestions by issues, or join QQ-group @abstr_number to discuss problems around source code.
