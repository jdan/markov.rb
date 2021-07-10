require "optparse"
require "colorize"

class Markov
  attr_accessor :chain

  def initialize(n)
    @n = n
    @chain = Hash.new { |h, k| h[k] = [] }
  end

  def digest(str)
    gram = ngram(str, @n)
    curr = :start

    (gram + [:end]).each do |item|
      # Prevent empty names
      # TODO: Is this necessary...? Names like "Amy" cause this to happen
      unless curr == :start && item == :end
        @chain[curr] << item
      end

      curr = item
    end
  end

  def generate
    curr = :start
    result = ""
    loop do
      curr = @chain[curr].sample
      if curr == :end
        return result
      else
        # drop `@n - 1` chars from the end before adding curr
        # (i.e. hel + ell => hell)
        result = result[0..-@n] + curr
      end
    end
  end

  def to_xstate
    states = @chain.map do |k, v|
      transitions = v.tally.map do |gram, count|
        ["#{count.to_f / v.length}-#{gram}", gram]
      end

      [k, transitions]
    end

    # TODO: Prettier or something
    <<~XSTATE
      const machine = Machine({
        id: 'machine',
        initial: 'start',
        states: {
          #{states.map { |s| state_to_json(s) }.join("\n")}
          end: {
            type: "final"
          }
        }
      });
    XSTATE
  end

  private
  # lol, 2 => [lo, ol]
  # hello, 3 => [hel, ell, llo]
  def ngram(str, n)
    str.chars.each_cons(n).to_a.map &:join
  end

  def state_to_json(state)
    id, transitions = state
    transitions_json = transitions.map do |t|
      %Q("#{t[0]}": "#{t[1]}",)
    end

    <<-JSON
      #{id}: {
        on: {
          #{transitions_json.join("\n")}
        }
      },
    JSON
  end
end

options = {
  n: 3,
  count: 5
}

OptionParser.new do |opts|
  opts.banner = "Usage: main.rb [options]"

  opts.on("-nN", "--ngram-length=N", "Number of characters to scan when building n-grams") do |n|
    options[:n] = n.to_i
  end

  opts.on("-cCOUNT", "--count=COUNT", "Number of names to generate") do |count|
    options[:count] = count.to_i
  end

  opts.on("-x", "--xstate", "Output an X-State machine definition") do |x|
    options[:x] = x
  end
end.parse!

names = STDIN.read.strip.lines.map &:chomp
m = Markov.new(options[:n])
names.each do |name|
  m.digest(name)
end

if options[:x]
  puts m.to_xstate
else
  options[:count].times do
    name = m.generate
    if names.include? name
      status = "existing".red
    else
      status = "new".green
    end

    puts "[#{status}] #{name}"
  end
end
