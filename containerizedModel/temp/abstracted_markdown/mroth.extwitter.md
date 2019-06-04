# ExTwitter @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Twitter client library for elixir. It uses @abstr_hyperlink to call Twitter's REST API.

It only supports very limited set of functions yet. Refer to @abstr_hyperlink and @abstr_hyperlink for available functions and examples.

### Documentation

  * http://hexdocs.pm/extwitter



### Usage

@abstr_number . Add `extwitter` to deps section in the `mix.exs`. @abstr_number . Use `ExTwitter.configure` to setup Twitter's OAuth authentication paramters. Refer to https://dev.twitter.com/docs for the detail. @abstr_number . Call functions in ExTwitter module (ex. `ExTwitter.search("test")`).

#### Configuration

The default behaviour is to configure using the application environment:

In `config/config.exs`, add:

@abstr_code_section 

Or manually at runtime:

@abstr_code_section 

You can also configure the current process only:

@abstr_code_section 

#### mix.exs

@abstr_code_section 

### Sample

Sample execution on iex.

#### configure

```Elixir $ iex -S mix Interactive Elixir - press Ctrl+C to exit (type h() ENTER for help) @abstr_code_section 

#### search

Example for normal API. ```Elixir ExTwitter.search("elixir-lang", [count: @abstr_number ]) |> Enum.map(fn(tweet) -> tweet.text end) |> Enum.join("\n-----\n") |> IO.puts

# => Tweets will be displayed in the console as follows.

## @xxxx have you tried this yet?

## @yyyy You mean this? http://t.co/xxxx That had sailed below my radar thus far.

## @zzzz #elixir-lang. I'm jadams

## Akala ko @abstr_number nalang kulang ko sa dark elixir para sa Barb King summoner level.

@aaaa usually kasi magbbuzz lang yan pag luma na string. talaga ang elixir. :ok @abstr_code_section Elixir stream = ExTwitter.stream_filter(track: "apple") |> Stream.map(fn(x) -> x.text end) |> Stream.map(fn(x) -> IO.puts "#{x}\n---------------\n" end) Enum.to_list(stream)

# => Tweets will be displayed in the console as follows.

## Apple 'iWatch' rumour round-up

## Apple iPhone @abstr_number s @abstr_number GB Black Verizon - Cracked Screen, WORKS PERFECTLY!

## Apple iPod nano @abstr_number th Generation (PRODUCT) RED ( @abstr_number GB) (Latest Model) - Full read by

... ... @abstr_code_section Elixir

# An example to stop receiving stream after @abstr_number seconds passed.

pid = spawn(fn -> stream = ExTwitter.stream_filter(track: "apple") for tweet <\- stream do IO.puts tweet.text end end)

:timer.sleep( @abstr_number ) ExTwitter.stream_control(pid, :stop) @abstr_code_section Elixir stream = ExTwitter.stream_sample(receive_messages: true) for message <\- stream do case message do tweet = %ExTwitter.Model.Tweet{} -> IO.puts "tweet = #{tweet.text}"
    
    
    deleted_tweet = %ExTwitter.Model.DeletedTweet{} ->
      IO.puts "deleted tweet = #{deleted_tweet.status["id"]}"
    
    limit = %ExTwitter.Model.Limit{} ->
      IO.puts "limit = #{limit.track}"
    
    stall_warning = %ExTwitter.Model.StallWarning{} ->
      IO.puts "stall warning = #{stall_warning.code}"
    
    _ ->
      IO.inspect message
    

end end @abstr_code_section elixir defmodule Retriever do def follower_ids(screen_name, acc \ [], cursor \ - @abstr_number ) do cursor = fetch_next(screen_name, cursor) if Enum.count(cursor.items) == @abstr_number do List.flatten(acc) else follower_ids(screen_name, [cursor.items|acc], cursor.next_cursor) end end

defp fetch_next(screen_name, cursor) do try do ExTwitter.follower_ids(screen_name, cursor: cursor) rescue e in ExTwitter.RateLimitExceededError -> :timer.sleep ((e.reset_in + @abstr_number ) * @abstr_number ) fetch_next(screen_name, cursor) end end end

ids = Retriever.follower_ids("TwitterDev") IO.puts "Follower count for TwitterDev is #{Enum.count(ids)}."

# => Follower count for TwitterDev is @abstr_number .

@abstr_code_section Elixir $ ./run_iex.sh Erlang/OTP @abstr_number [erts- @abstr_number . @abstr_number ] [source] [ @abstr_number -bit] [smp: @abstr_number : @abstr_number ] [async-threads: @abstr_number ]... Interactive Elixir ( @abstr_number . @abstr_number . @abstr_number ) - press Ctrl+C to exit (type h() ENTER for help) iex( @abstr_number )> (ExTwitter.search("elixir") |> List.first).text ... ```
