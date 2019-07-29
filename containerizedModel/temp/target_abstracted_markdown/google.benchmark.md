# Benchmark

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

A library to benchmark code snippets, similar to unit tests. Example:

```c++

# include 

static void BM_SomeFunction(benchmark::State& state) { // Perform setup here for (auto _ : state) { // This code gets timed SomeFunction(); } } // Register the function as a benchmark BENCHMARK(BM_SomeFunction); // Run the benchmark BENCHMARK_MAIN(); @abstr_code_section bash

# Check out the library.

$ git clone https://github.com/google/benchmark.git

# Benchmark requires Google Test as a dependency. Add the source tree as a subdirectory.

$ git clone https://github.com/google/googletest.git benchmark/googletest

# Make a build directory to place the build output.

$ mkdir build && cd build

# Generate a Makefile with cmake.

# Use cmake -G  to generate a different file type.

$ cmake ../benchmark

# Build the library.

$ make @abstr_code_section /benchmark /build /src /libbenchmark.a /libbenchmark_main.a /test ... @abstr_code_section bash $ make test @abstr_code_section sudo make install @abstr_code_section cmake -DCMAKE_BUILD_TYPE=Release @abstr_code_section cmake -DCMAKE_BUILD_TYPE=Release -DBENCHMARK_ENABLE_LTO=true @abstr_code_section c++

# include 

static void BM_StringCreation(benchmark::State& state) { for (auto _ : state) std::string empty_string; } // Register the function as a benchmark BENCHMARK(BM_StringCreation);

// Define another benchmark static void BM_StringCopy(benchmark::State& state) { std::string x = "hello"; for (auto _ : state) std::string copy(x); } BENCHMARK(BM_StringCopy);

BENCHMARK_MAIN(); @abstr_code_section bash

# Example on linux after running the build steps above. Assumes the

# `benchmark` and `build` directories are under the current directory.

$ g++ -std=c++ @abstr_number -isystem benchmark/include -Lbuild/src -lpthread \ -lbenchmark mybenchmark.cc -o mybenchmark @abstr_code_section 

## Benchmark Time(ns) CPU(ns) Iterations

BM_SetInsert/ @abstr_number / @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number . @abstr_number kB/s @abstr_number . @abstr_number k items/s BM_SetInsert/ @abstr_number / @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number . @abstr_number kB/s @abstr_number . @abstr_number k items/s BM_SetInsert/ @abstr_number / @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number . @abstr_number MB/s @abstr_number . @abstr_number k items/s @abstr_code_section json { "context": { "date": " @abstr_number / @abstr_number / @abstr_number - @abstr_number : @abstr_number : @abstr_number ", "num_cpus": @abstr_number , "mhz_per_cpu": @abstr_number , "cpu_scaling_enabled": false, "build_type": "debug" }, "benchmarks": [ { "name": "BM_SetInsert/ @abstr_number / @abstr_number ", "iterations": @abstr_number , "real_time": @abstr_number , "cpu_time": @abstr_number , "bytes_per_second": @abstr_number , "items_per_second": @abstr_number }, { "name": "BM_SetInsert/ @abstr_number / @abstr_number ", "iterations": @abstr_number , "real_time": @abstr_number , "cpu_time": @abstr_number , "bytes_per_second": @abstr_number , "items_per_second": @abstr_number }, { "name": "BM_SetInsert/ @abstr_number / @abstr_number ", "iterations": @abstr_number , "real_time": @abstr_number , "cpu_time": @abstr_number , "bytes_per_second": @abstr_number , "items_per_second": @abstr_number } ] } @abstr_code_section name,iterations,real_time,cpu_time,bytes_per_second,items_per_second,label "BM_SetInsert/ @abstr_number / @abstr_number ", @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number , @abstr_number , "BM_SetInsert/ @abstr_number / @abstr_number ", @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number e+ @abstr_number , @abstr_number , "BM_SetInsert/ @abstr_number / @abstr_number ", @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number . @abstr_number e+ @abstr_number , @abstr_number . @abstr_number e+ @abstr_number , @abstr_code_section bash $ ./run_benchmarks.x --benchmark_filter=BM_memcpy/ @abstr_number Run on ( @abstr_number X @abstr_number MHz CPU ) @abstr_number - @abstr_number - @abstr_number @abstr_number : @abstr_number : @abstr_number 

## Benchmark Time CPU Iterations

BM_memcpy/ @abstr_number @abstr_number ns @abstr_number ns @abstr_number BM_memcpy/ @abstr_number k @abstr_number ns @abstr_number ns @abstr_number BM_memcpy/ @abstr_number @abstr_number ns @abstr_number ns @abstr_number BM_memcpy/ @abstr_number k @abstr_number ns @abstr_number ns @abstr_number @abstr_code_section c++ static void BM_memcpy(benchmark::State& state) { char* src = new char[state.range( @abstr_number )]; char* dst = new char[state.range( @abstr_number )]; memset(src, 'x', state.range( @abstr_number )); for (auto _ : state) memcpy(dst, src, state.range( @abstr_number )); state.SetBytesProcessed(int @abstr_number _t(state.iterations()) * int @abstr_number _t(state.range( @abstr_number ))); delete[] src; delete[] dst; } BENCHMARK(BM_memcpy)->Arg( @abstr_number )->Arg( @abstr_number )->Arg( @abstr_number )->Arg( @abstr_number << @abstr_number )->Arg( @abstr_number << @abstr_number ); @abstr_code_section c++ BENCHMARK(BM_memcpy)->Range( @abstr_number , @abstr_number << @abstr_number ); @abstr_code_section c++ BENCHMARK(BM_memcpy)->RangeMultiplier( @abstr_number )->Range( @abstr_number , @abstr_number << @abstr_number ); @abstr_code_section c++ static void BM_SetInsert(benchmark::State& state) { std::set data; for (auto _ : state) { state.PauseTiming(); data = ConstructRandomSet(state.range( @abstr_number )); state.ResumeTiming(); for (int j = @abstr_number ; j < state.range( @abstr_number ); ++j) data.insert(RandomNumber()); } } BENCHMARK(BM_SetInsert) ->Args({ @abstr_number << @abstr_number , @abstr_number }) ->Args({ @abstr_number << @abstr_number , @abstr_number }) ->Args({ @abstr_number << @abstr_number , @abstr_number }) ->Args({ @abstr_number << @abstr_number , @abstr_number }) ->Args({ @abstr_number << @abstr_number , @abstr_number }) ->Args({ @abstr_number << @abstr_number , @abstr_number }) ->Args({ @abstr_number << @abstr_number , @abstr_number }) ->Args({ @abstr_number << @abstr_number , @abstr_number }); @abstr_code_section c++ BENCHMARK(BM_SetInsert)->Ranges({{ @abstr_number << @abstr_number , @abstr_number << @abstr_number }, { @abstr_number , @abstr_number }}); @abstr_code_section c++ static void CustomArguments(benchmark::internal::Benchmark* b) { for (int i = @abstr_number ; i <= @abstr_number ; ++i) for (int j = @abstr_number ; j <= @abstr_number * @abstr_number ; j _= @abstr_number ) b- >Args({i, j}); } BENCHMARK(BM_SetInsert)->Apply(CustomArguments); @abstr_code_section c++ template  void BM_takes_args(benchmark::State& state, ExtraArgs&&... extra_args) { [...] } // Registers a benchmark named "BM_takes_args/int_string_test" that passes // the specified values to `extra_args`. BENCHMARK_CAPTURE(BM_takes_args, int_string_test, @abstr_number , std::string("abc")); @abstr_code_section c++ static void BM_StringCompare(benchmark::State& state) { std::string s @abstr_number (state.range( @abstr_number ), '-'); std::string s @abstr_number (state.range( @abstr_number ), '-'); for (auto _ : state) { benchmark::DoNotOptimize(s @abstr_number .compare(s @abstr_number )); } state.SetComplexityN(state.range( @abstr_number )); } BENCHMARK(BM_StringCompare) ->RangeMultiplier( @abstr_number )->Range( @abstr_number << @abstr_number , @abstr_number << @abstr_number )->Complexity(benchmark::oN); @abstr_code_section c++ BENCHMARK(BM_StringCompare) ->RangeMultiplier( @abstr_number )->Range( @abstr_number << @abstr_number , @abstr_number << @abstr_number )->Complexity(); @abstr_code_section c++ BENCHMARK(BM_StringCompare)->RangeMultiplier( @abstr_number ) ->Range( @abstr_number << @abstr_number , @abstr_number << @abstr_number )->Complexity(->double{return n; }); @abstr_code_section c++ template  void BM_Sequential(benchmark::State& state) { Q q; typename Q::value_type v; for (auto _ : state) { for (int i = state.range( @abstr_number ); i--; ) q.push(v); for (int e = state.range( @abstr_number ); e--; ) q.Wait(&v); } // actually messages, not bytes: state.SetBytesProcessed( static_cast(state.iterations())_state.range( @abstr_number )); } BENCHMARK_TEMPLATE(BM_Sequential, WaitQueue)->Range( @abstr_number << @abstr_number , @abstr_number << @abstr_number ); @abstr_code_section c++

# ifdef BENCHMARK_HAS_CXX @abstr_number

# define BENCHMARK_TEMPLATE(func, ...) // Takes any number of parameters.

# else // C++ < C++ @abstr_number

# define BENCHMARK_TEMPLATE(func, arg @abstr_number )

# endif

# define BENCHMARK_TEMPLATE @abstr_number (func, arg @abstr_number )

# define BENCHMARK_TEMPLATE @abstr_number (func, arg @abstr_number , arg @abstr_number )

@abstr_code_section c++ class MyFixture : public benchmark::Fixture { public: void SetUp(const ::benchmark::State& state) { }

void TearDown(const ::benchmark::State& state) { } };

BENCHMARK_F(MyFixture, FooTest)(benchmark::State& st) { for (auto _ : st) { ... } }

BENCHMARK_DEFINE_F(MyFixture, BarTest)(benchmark::State& st) { for (auto _ : st) { ... } } /* BarTest is NOT registered _/ BENCHMARK_REGISTER_F(MyFixture, BarTest)- >Threads( @abstr_number ); /_ BarTest is now registered */ @abstr_code_section c++ template class MyFixture : public benchmark::Fixture {};

BENCHMARK_TEMPLATE_F(MyFixture, IntTest, int)(benchmark::State& st) { for (auto _ : st) { ... } }

BENCHMARK_TEMPLATE_DEFINE_F(MyFixture, DoubleTest, double)(benchmark::State& st) { for (auto _ : st) { ... } }

BENCHMARK_REGISTER_F(MyFixture, DoubleTest)->Threads( @abstr_number ); @abstr_code_section c++ static void UserCountersExample @abstr_number (benchmark::State& state) { double numFoos = @abstr_number , numBars = @abstr_number , numBazs = @abstr_number ; for (auto _ : state) { // ... count Foo,Bar,Baz events } state.counters["Foo"] = numFoos; state.counters["Bar"] = numBars; state.counters["Baz"] = numBazs; } @abstr_code_section c++ // sets a simple counter state.counters["Foo"] = numFoos;

// Set the counter as a rate. It will be presented divided // by the duration of the benchmark. state.counters["FooRate"] = Counter(numFoos, benchmark::Counter::kIsRate);

// Set the counter as a thread-average quantity. It will // be presented divided by the number of threads. state.counters["FooAvg"] = Counter(numFoos, benchmark::Counter::kAvgThreads);

// There's also a combined flag: state.counters["FooAvgRate"] = Counter(numFoos,benchmark::Counter::kAvgThreadsRate);

// This says that we process with the rate of state.range( @abstr_number ) bytes every iteration: state.counters["BytesProcessed"] = Counter(state.range( @abstr_number ), benchmark::Counter::kIsIterationInvariantRate, benchmark::Counter::OneK::kIs @abstr_number ); @abstr_code_section c++ // With C++ @abstr_number , this can be done: state.counters.insert({{"Foo", numFoos}, {"Bar", numBars}, {"Baz", numBazs}}); // ... instead of: state.counters["Foo"] = numFoos; state.counters["Bar"] = numBars; state.counters["Baz"] = numBazs;

##  @abstr_code_section 

## Benchmark Time CPU Iterations UserCounters...

BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number Bar= @abstr_number Bat= @abstr_number Baz= @abstr_number Foo= @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number Bar= @abstr_number Bat= @abstr_number Baz= @abstr_number Foo= @abstr_number m BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number Bar= @abstr_number Bat= @abstr_number Baz= @abstr_number Foo= @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number Bar= @abstr_number Bat= @abstr_number Baz= @abstr_number Foo= @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number Bar= @abstr_number Bat= @abstr_number Baz= @abstr_number Foo= @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number Bar= @abstr_number Bat= @abstr_number Baz= @abstr_number Foo= @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number Bar= @abstr_number Bat= @abstr_number Baz= @abstr_number Foo= @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number Bar= @abstr_number Bat= @abstr_number Baz= @abstr_number Foo= @abstr_number BM_Factorial @abstr_number ns @abstr_number ns @abstr_number @abstr_number BM_Factorial/real_time @abstr_number ns @abstr_number ns @abstr_number @abstr_number BM_CalculatePiRange/ @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number BM_CalculatePiRange/ @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number . @abstr_number BM_CalculatePiRange/ @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number . @abstr_number BM_CalculatePiRange/ @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number . @abstr_number 

##  @abstr_code_section 

## Benchmark Time CPU Iterations Bar Bat Baz Foo

BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number 

## BM_UserCounter/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number 

## Benchmark Time CPU Iterations

BM_Factorial @abstr_number ns @abstr_number ns @abstr_number @abstr_number BM_Factorial/real_time @abstr_number ns @abstr_number ns @abstr_number @abstr_number BM_CalculatePiRange/ @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number BM_CalculatePiRange/ @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number . @abstr_number BM_CalculatePiRange/ @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number . @abstr_number BM_CalculatePiRange/ @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_number . @abstr_number BM_CalculatePiRange/ @abstr_number k @abstr_number ns @abstr_number ns @abstr_number @abstr_number . @abstr_number BM_CalculatePiRange/ @abstr_number k @abstr_number ns @abstr_number ns @abstr_number @abstr_number . @abstr_number BM_CalculatePiRange/ @abstr_number k @abstr_number ns @abstr_number ns @abstr_number @abstr_number . @abstr_number BM_CalculatePiRange/ @abstr_number k @abstr_number ns @abstr_number ns @abstr_number @abstr_number . @abstr_number BM_CalculatePi/threads: @abstr_number @abstr_number ns @abstr_number ns @abstr_number @abstr_code_section c++ static void BM_MultiThreaded(benchmark::State& state) { if (state.thread_index == @abstr_number ) { // Setup code here. } for (auto _ : state) { // Run the test as normal. } if (state.thread_index == @abstr_number ) { // Teardown code here. } } BENCHMARK(BM_MultiThreaded)->Threads( @abstr_number ); @abstr_code_section c++ BENCHMARK(BM_test)->Range( @abstr_number , @abstr_number << @abstr_number )->UseRealTime(); @abstr_code_section c++ void callee(int i);

static void MyMain(int size) {

# pragma omp parallel for

for(int i = @abstr_number ; i < size; i++) callee(i); }

static void BM_OpenMP(benchmark::State& state) { for (auto _ : state) MyMain(state.range( @abstr_number ); }

// Measure the time spent by the main thread, use it to decide for how long to // run the benchmark loop. Depending on the internal implementation detail may // measure to anywhere from near-zero (the overhead spent before/after work // handoff to worker thread[s]) to the whole single-thread time. BENCHMARK(BM_OpenMP)->Range( @abstr_number , @abstr_number << @abstr_number );

// Measure the user-visible time, the wall clock (literally, the time that // has passed on the clock on the wall), use it to decide for how long to // run the benchmark loop. This will always be meaningful, an will match the // time spent by the main thread in single-threaded case, in general decreasing // with the number of internal threads doing the work. BENCHMARK(BM_OpenMP)->Range( @abstr_number , @abstr_number << @abstr_number )->UseRealTime();

// Measure the total CPU consumption, use it to decide for how long to // run the benchmark loop. This will always measure to no less than the // time spent by the main thread in single-threaded case. BENCHMARK(BM_OpenMP)->Range( @abstr_number , @abstr_number << @abstr_number )->MeasureProcessCPUTime();

// A mixture of the last two. Measure the total CPU consumption, but use the // wall clock to decide for how long to run the benchmark loop. BENCHMARK(BM_OpenMP)->Range( @abstr_number , @abstr_number << @abstr_number )->MeasureProcessCPUTime()->UseRealTime(); @abstr_code_section c++ static void BM_SetInsert_With_Timer_Control(benchmark::State& state) { std::set data; for (auto _ : state) { state.PauseTiming(); // Stop timers. They will not count until they are resumed. data = ConstructRandomSet(state.range( @abstr_number )); // Do something that should not be measured state.ResumeTiming(); // And resume timers. They are now counting again. // The rest will be measured. for (int j = @abstr_number ; j < state.range( @abstr_number ); ++j) data.insert(RandomNumber()); } } BENCHMARK(BM_SetInsert_With_Timer_Control)->Ranges({{ @abstr_number << @abstr_number , @abstr_number << @abstr_number }, { @abstr_number , @abstr_number }}); @abstr_code_section c++ static void BM_ManualTiming(benchmark::State& state) { int microseconds = state.range( @abstr_number ); std::chrono::duration sleep_duration { static_cast(microseconds) };

for (auto _ : state) { auto start = std::chrono::high_resolution_clock::now(); // Simulate some useful workload with a sleep std::this_thread::sleep_for(sleep_duration); auto end = std::chrono::high_resolution_clock::now();
    
    
    auto elapsed_seconds =
      std::chrono::duration_cast<std::chrono::duration<double>>(
        end - start);
    
    state.SetIterationTime(elapsed_seconds.count());
    

} } BENCHMARK(BM_ManualTiming)->Range( @abstr_number , @abstr_number << @abstr_number )->UseManualTime(); @abstr_code_section c++ BENCHMARK(BM_test)->Unit(benchmark::kMillisecond); @abstr_code_section c++ static void BM_test(benchmark::State& state) { for (auto _ : state) { int x = @abstr_number ; for (int i= @abstr_number ; i < @abstr_number ; ++i) { benchmark::DoNotOptimize(x += i); } } } @abstr_code_section c++ /* Example @abstr_number : `<expr>` is removed entirely. */ int foo(int x) { return x + @abstr_number ; } while (...) DoNotOptimize(foo( @abstr_number )); // Optimized to DoNotOptimize( @abstr_number );

/* Example @abstr_number : Result of '' is only reused */ int bar(int) __attribute__((const)); while (...) DoNotOptimize(bar( @abstr_number )); // Optimized to: // int __result__ = bar( @abstr_number ); // while (...) DoNotOptimize(__result__); @abstr_code_section c++ static void BM_vector_push_back(benchmark::State& state) { for (auto _ : state) { std::vector v; v.reserve( @abstr_number ); benchmark::DoNotOptimize(v.data()); // Allow v.data() to be clobbered. v.push_back( @abstr_number ); benchmark::ClobberMemory(); // Force @abstr_number to be written to memory. } } @abstr_code_section c++ void BM_spin_empty(benchmark::State& state) { for (auto _ : state) { for (int x = @abstr_number ; x < state.range( @abstr_number ); ++x) { benchmark::DoNotOptimize(x); } } }

BENCHMARK(BM_spin_empty) ->ComputeStatistics("max", -> double { return _(std::max_element(std::begin(v), std::end(v))); }) - >Arg( @abstr_number ); @abstr_code_section c++ auto BM_test = { /_ ... */ };

int main(int argc, char _* argv) { for (auto & test_input : { /_ ... */ }) benchmark::RegisterBenchmark(test_input.name(), BM_test, test_input); benchmark::Initialize(&argc, argv); benchmark::RunSpecifiedBenchmarks(); } @abstr_code_section c++ static void BM_test(benchmark::State& state) { auto resource = GetResource(); if (!resource.good()) { state.SkipWithError("Resource is not good!"); // KeepRunning() loop will not be entered. } for (state.KeepRunning()) { auto data = resource.read_data(); if (!resource.good()) { state.SkipWithError("Failed to read data!"); break; // Needed to skip the rest of the iteration. } do_stuff(data); } }

static void BM_test_ranged_fo(benchmark::State & state) { state.SkipWithError("test will not be entered"); for (auto _ : state) { state.SkipWithError("Failed!"); break; // REQUIRED to prevent all further iterations. } } @abstr_code_section c++ static void BM_Fast(benchmark::State &state) { for (auto _ : state) { FastOperation(); } } BENCHMARK(BM_Fast); @abstr_code_section asm

# Loop Init

mov rbx, qword ptr [r @abstr_number + @abstr_number ] call benchmark::State::StartKeepRunning() test rbx, rbx je .LoopEnd .LoopHeader: # =>This Inner Loop Header: Depth= @abstr_number add rbx, - @abstr_number jne .LoopHeader .LoopEnd: @abstr_code_section asm .LoopHeader: # in Loop: Header=BB @abstr_number _ @abstr_number Depth= @abstr_number cmp byte ptr [rbx], @abstr_number jne .LoopInit .LoopBody: # =>This Inner Loop Header: Depth= @abstr_number mov rax, qword ptr [rbx + @abstr_number ] lea rcx, [rax + @abstr_number ] mov qword ptr [rbx + @abstr_number ], rcx cmp rax, qword ptr [rbx + @abstr_number ] jb .LoopHeader jmp .LoopEnd .LoopInit: mov rdi, rbx call benchmark::State::StartKeepRunning() jmp .LoopBody .LoopEnd: @abstr_code_section **_WARNING_** CPU scaling is enabled, the benchmark real time measurements may be noisy and will incur extra overhead. @abstr_code_section bash sudo cpupower frequency-set --governor performance ./mybench sudo cpupower frequency-set --governor powersave ```
