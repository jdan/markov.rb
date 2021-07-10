## markov.rb

Simple [Markov generator](https://en.wikipedia.org/wiki/Markov_chain#Markov_text_generators) to produce
realistic-looking names.

### usage

```
$ ruby main.rb --help
Usage: main.rb [options]
    -n, --ngram-length=N             Number of characters to scan when building n-grams
    -c, --count=COUNT                Number of names to generate
$ ruby main.rb -n 4 -c 10
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

### credits

Jordan Ellenberg's [Shape](https://amzn.to/3yKptm0) has a fantastic section on Markov chains that inspired this.
