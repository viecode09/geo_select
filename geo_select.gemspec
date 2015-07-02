# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'geo_select/version'

Gem::Specification.new do |spec|
  spec.name          = "geo_select"
  spec.version       = GeoSelect::VERSION
  spec.authors       = ["Divyansh Kumar"]
  spec.email         = ["mr.divyanshindore@gmail.com"]
  spec.summary       = %q{GeoSelect helps to auto-populate countries, states, regions and cities options to your select_tag form helper. It is based on http://geonames.org services.}
  spec.homepage      = "https://github.com/mrdivyansh/geo_select"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.7"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "jquery-rails", "~> 3.0.0"
end
