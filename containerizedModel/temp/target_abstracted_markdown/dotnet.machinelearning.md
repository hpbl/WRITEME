# Machine Learning for .NET

@abstr_hyperlink is a cross-platform open-source machine learning framework which makes machine learning accessible to .NET developers.

ML.NET allows .NET developers to develop their own models and infuse custom machine learning into their applications, using .NET, even without prior expertise in developing or tuning machine learning models.

ML.NET was originally developed in Microsoft Research, and evolved into a significant framework over the last decade and is used across many product groups in Microsoft like Windows, Bing, PowerPoint, Excel and more.

ML.NET enables machine learning tasks like classification (for example: support text classification, sentiment analysis) and regression (for example, price-prediction).

Along with these ML capabilities, this first release of ML.NET also brings the first draft of .NET APIs for training models, using models for predictions, as well as the core components of this framework such as learning algorithms, transforms, and ML data structures.

## Documentation

Please check our documentation @abstr_hyperlink . See the @abstr_hyperlink .

## Installation

@abstr_hyperlink 

ML.NET runs on Windows, Linux, and macOS using @abstr_hyperlink , or Windows using .NET Framework. @abstr_number bit is supported on all platforms. @abstr_number bit is supported on Windows, except for TensorFlow, LightGBM, and ONNX related functionality.

Check out the release notes to see what's new.

First, ensure you have installed @abstr_hyperlink or later. ML.NET also works on the .NET Framework @abstr_number . @abstr_number . @abstr_number or later, but @abstr_number . @abstr_number . @abstr_number or later is recommended.

Once you have an app, you can install the ML.NET NuGet package from the .NET Core CLI using: @abstr_code_section 

or from the NuGet package manager: @abstr_code_section 

Or alternatively, you can add the Microsoft.ML package from within Visual Studio's NuGet package manager or via @abstr_hyperlink .

Daily NuGet builds of the project are also available in our @abstr_hyperlink feed:

> @abstr_hyperlink 

## Building

To build ML.NET from source please visit our developers guide.

@abstr_hyperlink 

| | Debug | Release | |:---|----------------:|------------------:| | **CentOS** | @abstr_hyperlink | @abstr_hyperlink | | **Ubuntu** | @abstr_hyperlink | @abstr_hyperlink | | **macOS** | @abstr_hyperlink | @abstr_hyperlink | | **Windows x @abstr_number _*| @abstr_hyperlink | @abstr_hyperlink | |_** Windows FullFramework **| @abstr_hyperlink | @abstr_hyperlink | |** Windows x @abstr_number **| @abstr_hyperlink | @abstr_hyperlink | |** Windows NetCore @abstr_number . @abstr_number *| @abstr_hyperlink | @abstr_hyperlink |

## Contributing

We welcome contributions! Please review our contribution guide.

## Community

Please join our community on Gitter @abstr_hyperlink 

This project has adopted the code of conduct defined by the @abstr_hyperlink to clarify expected behavior in our community. For more information, see the @abstr_hyperlink .

## Examples

Here is a snippet code for training a model to predict sentiment from text samples. You can find complete samples in @abstr_hyperlink .

`C# var dataPath = "sentiment.csv"; var mlContext = new MLContext(); var loader = mlContext.Data.CreateTextLoader(new[] { new TextLoader.Column("SentimentText", DataKind.String, @abstr_number ), new TextLoader.Column("Label", DataKind.Boolean, @abstr_number ), }, hasHeader: true, separatorChar: ','); var data = loader.Load(dataPath); var learningPipeline = mlContext.Transforms.Text.FeaturizeText("Features", "SentimentText") .Append(mlContext.BinaryClassification.Trainers.FastTree()); var model = learningPipeline.Fit(data); @abstr_code_section C# var predictionEngine = mlContext.Model.CreatePredictionEngine<SentimentData, SentimentPrediction>(model); var prediction = predictionEngine.Predict(new SentimentData { SentimentText = "Today is a great day!" }); Console.WriteLine("prediction: " + prediction.Prediction); ` A cookbook that shows how to use these APIs for a variety of existing and new scenarios can be found here.

## Samples

We have a @abstr_hyperlink that you can look at.

## License

ML.NET is licensed under the MIT license.

## .NET Foundation

ML.NET is a @abstr_hyperlink project.

There are many .NET related projects on GitHub.

  * @abstr_hyperlink - links to @abstr_number s of .NET projects, from Microsoft and the community.


