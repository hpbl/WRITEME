# Ninject

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Ninject is a lightning-fast, ultra-lightweight dependency injector for .NET applications. It helps you split your application into a collection of loosely-coupled, highly-cohesive pieces, and then glue them back together in a flexible manner. By using Ninject to support your software's architecture, your code will become easier to write, reuse, test, and modify.

_Write your code so it's flexible..._ `C# public class Samurai { public IWeapon Weapon { get; private set; } public Samurai(IWeapon weapon) { this.Weapon = weapon; } } @abstr_code_section C# public class WarriorModule : NinjectModule { public override void Load() { this.Bind<IWeapon>().To<Sword>(); } } `

## Features:

@abstr_number . **Focused.** Too many existing dependency injection projects sacrifice usability for features that aren't often necessary. Each time a feature is added to Ninject, its benefit is weighed against the complexity it adds to everyday use. Our goal is to keep the barrier to entry - the baseline level of knowledge required to use Ninject - as low as possible. Ninject has many advanced features, but understanding them is not required to use the basic features.

@abstr_number . **Sleek.** Framework bloat is a major concern for some projects, and as such, all of Ninject's core functionality is in a single assembly with no dependencies outside the .NET base class library. This single assembly's footprint is approximately @abstr_number KB when compiled for release.

@abstr_number . **Fast.** Instead of relying on reflection for invocation, Ninject takes advantage of lambda expression build system. This can result in a dramatic ( @abstr_number - @abstr_number x) improvement in performance in many situations.

@abstr_number . **Precise.** Ninject helps developers get things right the first time around. Rather than relying on XML mapping files and string identifiers to wire up components, Ninject provides a robust domain-specific language. This means that Ninject takes advantage of the capabilities of the language (like type-safety) and the IDE (like IntelliSense and code completion).

@abstr_number . **Agile.** Ninject is designed around a component-based architecture, with customization and evolution in mind. Many facets of the system can be augmented or modified to fit the requirements of each project.

@abstr_number . **Stealthy.** Ninject will not invade your code. You can easily isolate the dependency on Ninject to a single assembly in your project.

@abstr_number . **Powerful.** Ninject includes many advanced features. For example, Ninject is the first dependency injector to support contextual binding, in which a different concrete implementation of a service may be injected depending on the context in which it is requested.

## Everything else is in Extensions

Yes, sounds slim and focused, but where is the support for all the features that the competitors have? 

Generally, they are maintained as specific focused extensions with owners who keep them in sync and pull in new ideas and fixes fast. These are summarized on the @abstr_hyperlink section of the project website. Most are hosted alongside the core project right here.

## License

Ninject is intended to be used in both open-source and commercial environments. To allow its use in as many situations as possible, Ninject is dual-licensed. You may choose to use Ninject under either the Apache License, Version @abstr_number . @abstr_number , or the Microsoft Public License (Ms-PL). These licenses are essentially identical, but you are encouraged to evaluate both to determine which best fits your intended use.

Refer to @abstr_hyperlink for detailed information.

## Changes history

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Resources

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 


