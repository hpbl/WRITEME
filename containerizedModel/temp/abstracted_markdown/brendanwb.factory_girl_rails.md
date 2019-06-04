# factory_girl_rails @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink is a fixtures replacement with a straightforward definition syntax, support for multiple build strategies (saved instances, unsaved instances, attribute hashes, and stubbed objects), and support for multiple factories for the same class (`user`, `admin_user`, and so on), including factory inheritance.

## Rails

factory_girl_rails provides Rails integration for @abstr_hyperlink .

Currently, automatic factory definition loading is the only Rails-specific feature.

Supported Rails versions are listed in <code>Appraisals</code>. Supported Ruby versions are listed in <code>.travis.yml</code>.

## Download

Github: http://github.com/thoughtbot/factory_girl_rails

Gem:
    
    
    gem install factory_girl_rails
    

## Configuration

Add `factory_girl_rails` to your Gemfile:

@abstr_code_section 

Generators for factories will automatically substitute fixture (and maybe any other `fixture_replacement` you set). If you want to disable this feature, add the following to your application.rb file:

@abstr_code_section 

Default factories directory is `test/factories`, or `spec/factories` if `test_framework` generator is set to `:rspec`; change this behavior with:

@abstr_code_section 

If you use factory_girl for fixture replacement, ensure that factory_girl_rails is available in the development group. If it's not, Rails will generate standard .yml files instead of factory files.

factory_girl takes an option `suffix: 'some_suffix'` to generate factories as `modelname_some_suffix.rb`.

If you use factory_girl for fixture replacement and already have a `factories.rb` file in the directory that contains your tests, factory_girl_rails will insert new factory definitions at the top of `factories.rb`.

## Contributing

Please see CONTRIBUTING.md.

## Credits

@abstr_hyperlink was originally written by Joe Ferris.

@abstr_image 

factory_girl is maintained and funded by @abstr_hyperlink 

The names and logos for thoughtbot are trademarks of thoughtbot, inc.

## License

factory_girl_rails is Copyright © @abstr_number - @abstr_number Joe Ferris and thoughtbot. It is free software, and may be redistributed under the terms specified in the LICENSE file.
