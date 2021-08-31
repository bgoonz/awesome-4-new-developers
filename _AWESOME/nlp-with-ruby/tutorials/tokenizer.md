# Tokenizer

## INSTALLATION

`Tokenizer` is provided as a `.gem` package. Simply install it via
[RubyGems](http://rubygems.org/gems/tokenizer).

To install `tokenizer` issue the following command:

```shell
$ gem install tokenizer
```

If you want to do a system wide installation, do this as root
(possibly using `sudo`).

Alternatively use your Gemfile for dependency management.

## SYNOPSIS

You can use +Tokenizer+ in two ways.

- As a command line tool:

```shell
$ echo 'Hi, ich gehe in die Schule!. | tokenize
```

- As a library for embedded tokenization:

```ruby
> require 'tokenizer'
> de_tokenizer = Tokenizer::WhitespaceTokenizer.new
> de_tokenizer.tokenize('Ich gehe in die Schule!')
> => ["Ich", "gehe", "in", "die", "Schule", "!"]
```

- Customizable `PRE` and `POST` list

```ruby
> require 'tokenizer'
> de_tokenizer = Tokenizer::WhitespaceTokenizer.new(:de, { post: Tokenizer::Tokenizer::POST + ['|'] })
> de_tokenizer.tokenize('Ich gehe|in die Schule!')
> => ["Ich", "gehe", "|in", "die", "Schule", "!"]
```

See documentation in the `Tokenizer::WhitespaceTokenizer` class for details
on particular methods.
