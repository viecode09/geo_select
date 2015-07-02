# GeoSelect

GeoSelect helps to auto-populate countries, states, regions and cities options to your select_tag form helper. It is based on http://geonames.org services.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'geo_select'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install geo_select

Must Add to application.js:

```ruby
//= require geo_select
```

## Usage

```ruby
<%= form_tag("/site/index") do %>
  <%= label_tag 'name' %>
  <%= select_tag(:country, nil, { class: 'geo-countries'}) %>

  <%= label_tag 'name' %>
  <%= select_tag(:state, nil, { class: 'geo-states' }) %>

  <%= label_tag 'name' %>
  <%= select_tag(:region, nil, { class: 'geo-regions' }) %>

  <%= label_tag 'name' %>
  <%= select_tag(:city, nil, { class: 'geo-cities' }) %>
<% end %>
```

## Contributing

1. Fork it ( https://github.com/mrdivyansh/geo_select/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
