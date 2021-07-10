## markov.rb

Simple [Markov generator](https://en.wikipedia.org/wiki/Markov_chain#Markov_text_generators) to produce
realistic-looking names.

### usage

```
$ ruby main.rb --help
Usage: main.rb [options]
    -n, --ngram-length=N             Number of characters to scan when building n-grams
    -c, --count=COUNT                Number of names to generate
    -x, --xstate                     Output an X-State machine definition
$ ruby main.rb -n 4 -c 10 < names.txt
[new] Kenne
[new] Wellina
[new] Dontavia
[new] Sachel
[new] Kayshaunn
[existing] Melaney
[new] Lucetta
[existing] Tonny
[new] Corenea
[existing] Quentina
```

Experimental: Output to an [X-State](https://xstate.js.org/docs/) state-machine

```$ ruby main.rb -x < names-top10.txt > state.js

```

https://xstate.js.org/viz/?gist=91030bd79939c8bc7192e8f27293861c

### how it works

We input a list of names ([names.txt](/names.txt)) and for each name, split it into a list [n-grams](https://en.wikipedia.org/wiki/N-gram). For example: (Jordan, 4) => START -> Jord -> orda -> rdan -> END. We can combine two of these "chains" such as START => [Jord, Jack], Jord => [orda], Jack => [acks], ... to build a [state machine](https://en.wikipedia.org/wiki/Finite-state_machine).

Once the state machine is built, we begin at START and _randomly_ choose a path to take (i.e. START -> "Jord" or "Jack"). Interesting things happen when our list has _shared n-grams_ (for example: "Michael" and "Richard" both contain the "icha" 4-gram).

With a sufficiently large input size ("All first names with frequency at least 5 in the United States in 1984") and the right n-gram size (2 seems to produce fairly alien names while 4 produces realistic names without too many existing ones), we can generate a list of names that could pass for the real thing.

### credits

Jordan Ellenberg's [Shape](https://amzn.to/3yKptm0) has a fantastic section on Markov chains that inspired this.
