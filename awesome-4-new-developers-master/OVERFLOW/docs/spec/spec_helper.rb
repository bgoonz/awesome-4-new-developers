here = File.expand_path File.dirname(__FILE__)
top = File.expand_path "#{here}/.."
$: << "#{top}/lib"

require "rspec"
require "nokogiri"
require "files"
require 'active_support/core_ext/string/strip'

Dir[File.join(top, "spec/support/**/*.rb")].each {|f| require f}

RSpec.configure do |c|
  c.include Files
  c.include I18nHelper

  c.expect_with :rspec do |expectations|
    expectations.syntax = [:expect, :should]
  end

  c.mock_with :rspec do |mocks|
    mocks.syntax = [:should, :expect]
  end
end

